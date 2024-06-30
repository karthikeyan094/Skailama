import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectCard.css";
const ProjectCard = ({ project }) => {
  console.log(project);
  const navigate = useNavigate();
  return (
    <div
      className="project-card-wrapper"
      onClick={() => {
        console.log("clicked");
        navigate("/project");
      }}
    >
      <div>
        <p className="project-name-short">SP</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <p
            style={{
              fontSize: "25px",
              color: "#7E22CE",
              margin: "0px",
              fontWeight: "700",
            }}
          >
            {project.name}
          </p>
          <p style={{ fontSize: "15px", margin: "0px" }}>
            {project.episodes} Episodes
          </p>
        </div>
        <div>
          <p className="project-last-edited">{project.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
