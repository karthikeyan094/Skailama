import React from "react";
import UploadFileCard from "./UploadFileCard.component";
import "./ProjectUploadFile.css";
import youtube from "../assets/youtube.png";
import spotify from "../assets/spotify.png";
import rss from "../assets/rss.png";
const ProjectUploadFile = () => {
  return (
    <div style={{ padding: "32px" }}>
      <p className="upload-heading">Upload</p>
      <div style={{ display: "flex", gap: "32px", marginTop: "16px" }}>
        <UploadFileCard imageSrc={youtube} textContent="Youtube Video" />
        <UploadFileCard imageSrc={spotify} textContent="Spotify Podcast" />
        <UploadFileCard imageSrc={rss} textContent="from RSS Feed" />
      </div>
      <div style={{ display: "flex", gap: "32px", marginTop: "16px" }}>
        <UploadFileCard imageSrc={youtube} textContent="Youtube Video" />
        <UploadFileCard imageSrc={spotify} textContent="Spotify Podcast" />
        <UploadFileCard imageSrc={rss} textContent="from RSS Feed" />
      </div>
      <p style={{ color: "#999999", paddingLeft: "8px", fontWeight: "700",textAlign:"center" }}>or</p>
    </div>
  );
};

export default ProjectUploadFile;
