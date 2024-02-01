// import functionalities
import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import MixItem from "../components/MixItem";
import PopupSample from "../components/PopupSample";
import "./Samples.css";

// import cd images
import dramaCd from '../images/drama-cd.png';

export default function Samples() {
    const [popupDrama, openDrama] = useState(false);

    return (
        <div>
            <Header />
            <div className="gridContainer">
                <MixItem 
                title = "Drama" 
                cdImage = {dramaCd} 
                artist = "aespa" 
                trigger = {popupDrama}
                setTrigger = {openDrama}/>
                <MixItem 
                title = "Drama" 
                cdImage = {dramaCd} 
                artist = "aespa" 
                trigger = {popupDrama}
                setTrigger = {openDrama}/>
                <MixItem 
                title = "Drama" 
                cdImage = {dramaCd} 
                artist = "aespa" 
                trigger = {popupDrama}
                setTrigger = {openDrama}/>
            </div>

            <PopupSample 
            title = "Drama" 
            cdImage = {dramaCd} 
            artist = "aespa" 
            castN = "solo"
            sampleEmbed = "c71YsHdDgiY?si=XpTqPu3Cl-LugweD"
            trigger = {popupDrama}
            setTrigger = {openDrama}/>
    </div>
    );
};