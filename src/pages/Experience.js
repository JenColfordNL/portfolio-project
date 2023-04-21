import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div classNmame="experience">
      <VerticalTimeline lineColor="grey">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "#13182e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Keyin College, St. John's, NL
          </h3>
          <p>Diploma Software Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000-2004"
          iconStyle={{ background: "#13182e", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Memorial University, St. John's, NL
          </h3>
          <p>Bachelor of Arts in English</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2021"
          iconStyle={{ background: "#ed2603", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Learning Labs, St. John's, NL
          </h3>
          <p>Internship in Software Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013-2021"
          iconStyle={{ background: "#ed2603", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Author/Ghostwriter, Remote
          </h3>
          <p>Amazon International Best Selling Author</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
