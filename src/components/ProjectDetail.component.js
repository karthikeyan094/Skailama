import React from "react";
import ProjectSideBar from "./ProjectSideBar.component";
import { useState } from "react";
import ProjectDetailHeader from "./ProjectDetailHeader.component";
import ProjectUploadFile from "./ProjectUploadFile.component";
import "./ProjectDetails.css";
const ProjectDetails = () => {
  const [active, setActive] = useState("project");
  return (
    <div className="project-details-wrapper">
      <ProjectSideBar active={active} hadleActive={setActive} />
      {active === "project" && (
        <div>
          <ProjectDetailHeader project={"Sample Project"} type={"Upload"} />
          <ProjectUploadFile />
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
