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
            <img src={cdImage} onClick = {() => setTrigger(true)} />
            <p style={{fontWeight: "bold"}}>{title}</p>
        </div>
    )
}