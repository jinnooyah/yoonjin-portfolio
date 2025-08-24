import React from "react";
import './PopupSample.css';
import YoutubeEmbed from "./YoutubeEmbed";

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

                <div style={{marginTop: "-0.15rem"}}>
                    {props.sampleEmbed !== "" ? (
                        <YoutubeEmbed embedId={props.sampleEmbed}></YoutubeEmbed>
                    ) : (
                        props.sampleInstagram ? (
                            <div className="box">
                                <a style={{color:"white", fontFamily:"pfont", fontSize: "1.3rem", marginTop:"-0.7rem"}}
                                href={`https://www.instagram.com/reel/${props.sampleInstagram}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="instagram-link">
                                    link to cover on instagram reels!
                                </a>
                            </div>
                        ) : (
                            <div className="box">
                                <p4 style={{color:"white", fontFamily:"pfont", fontSize: "1.3rem", marginTop:"-0.7rem"}}>video coming soon!</p4>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    ) : "";
}