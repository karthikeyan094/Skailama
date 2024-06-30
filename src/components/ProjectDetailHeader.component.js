import React from "react";
import "./ProjectDetailHeader.css";
import engFlag from "../assets/engFlag.png";
const ProjectDetailHeader = ({project,type}) => {
  return (
    <div className="project-header-wrapper">
      <div className="header-icon-wrapper">
        <svg
          width="32"
          height="32"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0002 13.4116L36.8335 23.1616V40.0833H32.5002V27.0833H19.5002V40.0833H15.1668V23.1616L26.0002 13.4116ZM26.0002 7.58331L4.3335 27.0833H10.8335V44.4166H23.8335V31.4166H28.1668V44.4166H41.1668V27.0833H47.6668L26.0002 7.58331Z"
            fill="#7E22CE"
          />
        </svg>
        <p style={{ color: "#999999", paddingLeft: "8px", fontWeight: "700" }}>
          / {project}{" "}
        </p>
        <p style={{ color: "#7E22CE", paddingLeft: "8px", fontWeight: "700" }}>
          / {type}
        </p>
      </div>
      <div className="header-icon-wrapper" style={{ gap: "8px" }}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6667 25.3333L32.0001 38.6666L45.3334 25.3333H18.6667Z"
            fill="#1E1E1E"
          />
        </svg>
        <p style={{ fontWeight: "700" }}>EN</p>
        <img src={engFlag} width="36px" height="36px" />
        <svg
          width="56"
          height="56"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.0001 58C34.9334 58 37.3334 55.6 37.3334 52.6667H26.6667C26.6667 55.6 29.0667 58 32.0001 58ZM48.0001 42V28.6667C48.0001 20.48 43.6534 13.6267 36.0001 11.8133V10C36.0001 7.78667 34.2134 6 32.0001 6C29.7867 6 28.0001 7.78667 28.0001 10V11.8133C20.3734 13.6267 16.0001 20.4533 16.0001 28.6667V42L10.6667 47.3333V50H53.3334V47.3333L48.0001 42ZM42.6667 44.6667H21.3334V28.6667C21.3334 22.0533 25.3601 16.6667 32.0001 16.6667C38.6401 16.6667 42.6667 22.0533 42.6667 28.6667V44.6667Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};
export default ProjectDetailHeader;
