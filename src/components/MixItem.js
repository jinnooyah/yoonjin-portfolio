import React from "react";
import './MixItem.css';

export default function MixItem(props) {
    const title = props.title;
    const artist = props.artist;
    const cdImage = props.cdImage;
    const trigger = props.trigger;
    const setTrigger = props.setTrigger;

    return (
        <div>
            <img class="cd" src={cdImage} onClick = {() => setTrigger(true)} />
            <p style={{fontWeight: "bold", fontSize: "1.2rem", marginTop: "0rem", textAlign: "center"}}>{title}</p>
        </div>
    )
}