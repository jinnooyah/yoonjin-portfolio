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
            <div>
                <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"#FF6767"}}></button>
                <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"#FFF385"}}></button>
                <button onClick={() => props.setTrigger(false)} style={{backgroundColor:"#8BFF62"}}></button>

                <YoutubeEmbed embedId ={props.sampleEmbed}></YoutubeEmbed>
            </div>

            <div className="grid">
                <p class="pbold">{props.title}</p>
                <p></p>
                <p class="plightleft">{props.artist}</p>
                <p class="plightright">{props.castN}</p>
            </div>
        </div>
    ) : "";
}