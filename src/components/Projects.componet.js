import React, { useEffect, useState } from "react";
import "./Projects.css";
import CreateProjectImage from "../assets/image.png";
import ProjectCard from "./ProjectCard.component";
import Navbar from "./Navbar";
const Project = () => {
 const [projectName,setProjectName] = useState("");
 const [showCNPForm,setShowCNPForm] = useState(false);
 const [projects,setProjects] = useState([]);
 const handleAddNewProject = (e,projectName)=>{
  
  console.log(projectName);
  let newProject = {name:projectName,episodes:4,lastUpdated:"Last edited a week ago"}
  const projectsList = [...projects];
  projectsList.push(newProject)
  setProjects(projectsList);
  setShowCNPForm(false);
  setProjectName("");
 }
 const handleCNP = ()=>{
    setShowCNPForm(true);
 }
  return (
    <>
    <Navbar/>
   
    <div className={showCNPForm?"project-Wrapper CNP-blur":"project-Wrapper"}>
      <button className="bth-btn">
        <svg
          width="19"
          height="19"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0613 8.18399L21.1252 13.6415V23.1132H18.6996V15.8366H11.423V23.1132H8.99746V13.6415L15.0613 8.18399ZM15.0613 4.92163L2.93359 15.8366H6.57191V25.5388H13.8486V18.2621H16.2741V25.5388H23.5507V15.8366H27.1891L15.0613 4.92163Z"
            fill="#3C3C3C"
          />
        </svg>
        Back To Home
      </button>
      {!projects.length ?
      <div className="new-pro-wrapper">
        <h1 className="cnp-heading">Create a New Project</h1>
        <img src={CreateProjectImage} width={"539px"} height={"360px"} />
        <p className="cnp-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <button
          type="button"
          className="cnp-btn"
          onClick={handleCNP}
        >
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z"
              fill="#F8F8F8"
            />
          </svg>
          <span>Create New Project</span>
        </button>
        
      </div> :
      <div>
        <div className="project-heading-wrapper">
            <h2 className="cnp-heading">Projects</h2>
            <button
          type="button"
          className="cnp-btn"
          onClick={handleCNP}
          style={{padding:"5px"}}
        >
          {" "}
          <svg
            width="30"
            height="30"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.8806 42.7186H31.4663V31.5484H42.6376V25.9633H31.4663V14.7931H25.8806V25.9633H14.7093V31.5484H25.8806V42.7186ZM28.6734 56.6814C24.81 56.6814 21.1793 55.9478 17.7814 54.4808C14.3834 53.0138 11.4277 51.0246 8.91415 48.5131C6.4006 45.9998 4.41117 43.0444 2.94587 39.6468C1.48056 36.2492 0.746979 32.6189 0.745117 28.7558C0.745117 24.8928 1.4787 21.2625 2.94587 17.8649C4.41304 14.4673 6.40246 11.5118 8.91415 8.99854C11.4277 6.48524 14.3834 4.49601 17.7814 3.03085C21.1793 1.56569 24.81 0.832184 28.6734 0.830322C32.5368 0.830322 36.1675 1.56383 39.5655 3.03085C42.9634 4.49787 45.9192 6.4871 48.4327 8.99854C50.9463 11.5118 52.9366 14.4673 54.4038 17.8649C55.8709 21.2625 56.6036 24.8928 56.6017 28.7558C56.6017 32.6189 55.8681 36.2492 54.401 39.6468C52.9338 43.0444 50.9444 45.9998 48.4327 48.5131C45.9192 51.0264 42.9634 53.0166 39.5655 54.4836C36.1675 55.9506 32.5368 56.6832 28.6734 56.6814Z"
              fill="#F8F8F8"
            />
          </svg>
          <span>Create New Project</span>
        </button>
            </div>
            <div className="project-list-wrapper">
              {projects.map((project)=>{
                return <ProjectCard project={project} />
              })}                
                </div>
      </div>
      }
      {showCNPForm &&<form className="cnp-form-wrapper" onSubmit={(e)=>{e.preventDefault();handleAddNewProject(e,projectName)}}>
        <h3 cla>Create Project</h3>
        
        <label>Enter Project Name:</label><br/>
        <input type="text" placeholder="Type here" value={projectName} onChange={(e)=>{setProjectName(e.target.value)}}/> 
        <p className={!projectName ? "cnp-error show-cnp-error":"cnp-error hide-cnp-error"}>Project Name Can't be empty</p>
        <div style={{float:"right"}}>
        <button className="form-calcel-btn" onClick={()=>{setShowCNPForm(false)}}>Cancel</button>
        <button className="form-create-btn" type="submit">Create</button>
        </div>
      </form>}
    </div>
    </>
  );
};
export default Project;
