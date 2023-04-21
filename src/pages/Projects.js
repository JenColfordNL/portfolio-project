import Proj2 from "../assets/proj2.png";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Passion Project</h1>

      <div className="projectList">
        <div className="snack-pic">
          <ProjectItem
            name=" The Snack Tracker: React, NextJS and CSS"
            image={Proj2}
          />
        </div>
        <div className="link">
          <a
            href="https://www.SnackTracker.ca"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <button className="snack-btn">
              Click here to go to the Snack Tracker
            </button>
          </a>
        </div>
        <p className="blurb">
          I built this application to reward my son's healthy snacking as his
          ADHD medication supresses his appetite. I'm currently learning React
          Native and AWS Amplify to develop the application and further enhance
          the user experience. The snack tracker is presently deployed on
          Vercel.
        </p>
      </div>
    </div>
  );
}

export default Projects;
