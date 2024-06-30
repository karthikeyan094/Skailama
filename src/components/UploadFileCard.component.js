import React from "react";
import "./UploadFileCard.css"
import youtubeImg from "../assets/youtube.png"
const UploadFileCard = ({imageSrc,textContent})=>{
    return(
        <div className="upload-card-wrapper">
            <div>
                <img src={imageSrc} width="50px" height="50px"/>
            </div>
            <div>
                <p>Upload</p>
                <p>{textContent}</p>
            </div>
        </div>
    )
}
export default UploadFileCard;