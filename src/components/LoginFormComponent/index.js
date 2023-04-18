import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory, useNavigate } from "react-router-dom";
import './LoginForm.css';
import Typewriter from 'typewriter-effect/dist/core'
import { useRef } from "react";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled, setDisabled] = useState(false);

  if (sessionUser) return <Redirect to="/" />;

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmptiness = () => {
    if(email === "" && password === ""){
      setEmailError("Email cannot be empty.");
      setPasswordError("Password cannot be empty.");
    } else if (email === "" && password !== ""){
      setEmailError("Email cannot be empty.");
      setPasswordError("");
    } else {
      setEmailError("");
      setPasswordError("Password cannot be empty.");
    }
  }

  const validateProperEmail = () => {
    if (!isValidEmail(email)) {
        setEmailError("The email is not a valid email address.")
        setPasswordError("")
        setErrors([]);
    } else {
      setEmailError("");
      setPasswordError("");
      setErrors([]);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    handleEmptiness();
    validateProperEmail();

    if (errors.length !== 0){
      setEmailError("");
      setPasswordError("");
    }

    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors){
          setErrors(data.errors);
        }
      });
  };

  const handleDemo = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setDisabled(!disabled);

    // document.querySelector(".demo").disabled = true;
    // document.querySelector("#email").disabled = true;
    // document.querySelector("#password").disabled = true;

    let emailDOM = document.getElementById("email");
    let passwordDOM = document.getElementById("password")
    let emailNodeCreator = function(character){
      emailDOM.value = emailDOM.value + character;
      return null;
    }

    let emailTypewriter = new Typewriter(emailDOM,
      {
        onCreateTextNode: emailNodeCreator
      });

      emailTypewriter
        .typeString("demo@user.io")
        .start();

      let passwordNodeCreator = function(character){
          passwordDOM.value = passwordDOM.value + character;
          return null;
        };
    
    let passwordTypewriter = new Typewriter(passwordDOM,
      {
        onCreateTextNode: passwordNodeCreator
      });
    
        passwordTypewriter
          .typeString("password")
          .start()
          
        setTimeout();
  };

 

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}> 
      <div className="credentials">
        <ul>
        </ul>
          <label htmlFor="email" id="emailLabel">
            Email
          </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled}
            />
            {errors.map(error => <li key={error}>{error}</li>)}
            {emailError && <p style={{color: 'red'}}>{emailError}</p>}
            <label htmlFor="password" id="passwordLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={disabled}
            />
            {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}

            <button className="login-button log-hover" type="submit" disabled={disabled}>Log in</button>
      </div>
      <div className="link">
        <div>
          Don't have an account?
          <Link to="/signup">
            <span> Sign up</span>
          </Link>
        </div>
      </div>
      </form>
    </div>
  );
}

export default LoginFormPage;