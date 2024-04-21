import React from "react";
import './MixItem.css';
import './VocalItem.css';

export default function VocalItem(props) {
    const title = props.title;
    const group = props.group;
    const cdImage = props.cdImage;
    const type = props.type;
    const gender = props.gender;

    const handleClick = () => {
        props.setTrigger(true);
    };

    return (
        <div className="vocal-grid">
            <img
                style={{ margin: "0" }}
                className="cd"
                src={cdImage}
                onClick={handleClick} 
                alt=" cover"
            />

            <div>
                <p className="song-text" onClick={handleClick}>{title}</p>
                <p className="group-text">{group}</p>
            </div>

            <div>
                <p className="group-text">{type}</p>
                <p className="group-text">{gender}</p>
            </div>
        </div>
    )
}