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
      <p
        style={{
          color: "#999999",
          paddingLeft: "8px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        or
      </p>
      <div className="upload-device-wrapper">
        <svg
          width="128"
          height="129"
          viewBox="0 0 128 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M103.2 54.4666C99.5733 36.0666 83.4133 22.2533 64 22.2533C48.5867 22.2533 35.2 31 28.5333 43.8C12.48 45.5066 0 59.1066 0 75.5866C0 93.24 14.3467 107.587 32 107.587H101.333C116.053 107.587 128 95.64 128 80.92C128 66.84 117.067 55.4266 103.2 54.4666ZM101.333 96.92H32C20.2133 96.92 10.6667 87.3733 10.6667 75.5866C10.6667 64.6533 18.8267 55.5333 29.6533 54.4133L35.36 53.8266L38.0267 48.76C43.0933 39 53.0133 32.92 64 32.92C77.9733 32.92 90.0267 42.84 92.7467 56.5466L94.3467 64.5466L102.507 65.1333C110.827 65.6666 117.333 72.6533 117.333 80.92C117.333 89.72 110.133 96.92 101.333 96.92ZM42.6667 70.2533H56.2667V86.2533H71.7333V70.2533H85.3333L64 48.92L42.6667 70.2533Z"
            fill="#7E22CE"
          />
        </svg>
        <p style={{ margin: "0px" }}>
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p style={{ margin: "0px 0px 16px 0px", color: "#999" }}>
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
        </p>
        <button className="select-file-btn">Select File</button>
      </div>
    </div>
  );
};

export default ProjectUploadFile;
