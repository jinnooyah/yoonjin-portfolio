import React from "react";
import './MixItem.css';

export default function MixItem(props) {
    const title = props.title;
    const cdImage = props.cdImage;
    const setTrigger = props.setTrigger;
    
    return (
        <div>
            <img class="cd" src={cdImage} onClick = {() => setTrigger(true)} alt="cd cover"/>
            <p style={{fontWeight: "bold", fontSize: "1.2rem", marginTop: "0rem", marginBottom: "0.3rem", textAlign: "center"}}>{title}</p>
        </div>
    )
}