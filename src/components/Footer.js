import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://linkedin.com/in/jen-colford"
          target={"_blank"}
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a
          href="https://github.com/jencolfordnl"
          target={"_blank"}
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="mailto:jencolford@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <EmailIcon />
        </a>
      </div>
      <p> &copy; 2023 jencolford.com</p>
    </div>
  );
}

export default Footer;
