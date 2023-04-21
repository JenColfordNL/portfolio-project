import React from "react";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Jen Colford</h2>
        <div className="prompt">
          <p>
            A software developer who wants to improve lives through technology
          </p>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>

        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              {" "}
              HTML, CSS, JavaScript, React, Heroku, NPM, Bootstrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>NodeJS, Java, ExpressJS, MongoDB, PostgresSQL, AWS</span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>Python, JavaScript, Java (currently learning C)</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
