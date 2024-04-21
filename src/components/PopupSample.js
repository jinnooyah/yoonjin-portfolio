import React from "react";
// import { useCallback } from "react";
import './PopupSample.css';
import YoutubeEmbed from "./YoutubeEmbed";

import videoComingSoon from '../images/videoComingSoon.png';

export default function PopupSample(props) {
    return (props.trigger) ? (
        <div>
            <div className="popup">
                <div className="popup-top">
                    <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"#F47F7F", marginLeft: "0.8rem"}}></button>
                    <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"#EAE191"}}></button>
                    <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"#9ADD83"}}></button>

                    <p style={{color: "white", marginTop:"-1.2rem", fontSize:"1.1rem"}}>{props.date}</p>
                </div>

                <div>
                    {props.sampleEmbed !== "" ? (
                        <YoutubeEmbed embedId={props.sampleEmbed}></YoutubeEmbed>
                    ) : (
                        <img src={videoComingSoon} 
                        alt="video coming soon!" 
                        style={{width: "25rem", 
                        height: "14.06rem", 
                        marginTop: "0rem",
                        verticalAlign: "top"}}/>
                    )}
                </div>
            </div>
        </div>
    ) : "";
}