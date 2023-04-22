import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuestionIndex from "../QuestionIndexComponent";
import "./index.css";
import { SiRedux, SiPostgresql, SiReact } from "react-icons/si";
import { DiRuby, DiReact } from "react-icons/di";
import { useRef } from "react";

const SplashPage = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const jobRef = useRef(null);

  useEffect(() => {
    const jobs = [
      "Developer",
      "Technical Mentor",
      "System Admin",
      "Student",
      "Data Scientiest",
      "Product Designer",
    ];
    let i = 1;
    setInterval(() => {
      if (i >= jobs.length) {
        i = 1;
      }
      if (jobRef && jobRef.current) {
        jobRef.current.innerHTML = jobs[i];
        jobRef.current.classList.add("animation");
        i++;
      }
    }, 2000);
  });

  if (sessionUser === null) {
    return (
      <>
        <div id="container">
          <div id="black-box" className="row align-items-center">
          <div className="col">
            <h1 className="animation-container">
              Every{" "}
              <span className="job" ref={jobRef}>
                developer
              </span>{" "}
             
              <br />
              has a tab open on <span className="syntaxError">codeOverflow</span>
            </h1>
            </div>
            <div className="col">
              <div id="speech-bubble-container">
                <div className="speech-bubble">
                  <div id="left-content">
                    <h1 className="speech-h1">
                      Find the best answer to your technical question, help
                      others
                    </h1>
                    <Link to="/signup">
                      <button id="join-community-button">
                        Join the codeOverflow Moringa community
                      </button>
                    </Link>
                    <div id="search-content">
                      or{" "}
                      <span>
                        <Link to="/questions/"> search content</Link>
                      </span>
                    </div>
                    <div className="speech-bubble-right-corner"></div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </>
    );
  } else {
    return <QuestionIndex />;
  }
};

export default SplashPage;
