import React from "react";
import { useCallback } from "react";
import './PopupSample.css';
import YoutubeEmbed from "./YoutubeEmbed";

export default function PopupSample(props) {
    const onSampleLinkClick = useCallback (() => {
        window.open(props.sampleLink);
    });

    return (props.trigger) ? (
        <div className="popup">
            <div style={{padding: "1rem", paddingLeft:"4rem"}}>
                <button onClick={() => props.setTrigger(false)} style={{marginBottom: "1rem"}}>
                    X
                </button>

                <YoutubeEmbed embedId ={props.sampleEmbed}></YoutubeEmbed>
            </div>

            <div>
                <p style={{fontFamily: "pfontbold", marginTop: "1rem", color: "white"}}>{props.title}</p>
                <p style={{color: "white"}}>{props.artist}</p>
                <p>{props.castN}</p>
            </div>
        </div>
    ) : "";
}