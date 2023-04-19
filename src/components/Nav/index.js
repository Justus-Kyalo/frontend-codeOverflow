import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [query, setQuery] = useState("");
  let sessionLink;
  let signUpLink;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/questions?search=${query.replaceAll(" ", "+")}`);
  };

  const handleLogOut = () => {
    dispatch(sessionActions.logout(sessionUser.id));
    return history.push("/");
  };

  if (!sessionUser) {
    //login
    sessionLink = (
      <Link to="/login">
        <button className="login">Log in</button>
      </Link>
    );
    signUpLink = (
      <Link to="/signup">
        <button className="signup">Sign up</button>
      </Link>
    );
  } else {
    //logout
    sessionLink = (
      <button onClick={handleLogOut} className="login">
        Log out
      </button>
    );
  }

  return (
    <>
      <div className="nav-box">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-left">
              <img
                className="codeOverflow-logo-img"
                src={logo}
                alt="codeOverflow"
              ></img>
              codeOverflow
            </Link>
            <div className="nav-right">
              <div style={{ marginRight: "5px" }}>
                {sessionUser ? sessionUser.displayName : ""}
              </div>
              <div className="nav-search">
                <div className="magnifying-glass">
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path>
                  </svg>
                </div>
                <form onSubmit={handleSearch}>
                  <input
                    className="nav-search"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                  ></input>
                </form>
              </div>
              <div className="session-links">
                {sessionLink}
                {signUpLink}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
