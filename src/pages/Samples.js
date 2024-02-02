// import functionalities
import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import MixItem from "../components/MixItem";
import PopupSample from "../components/PopupSample";
import "./Samples.css";
import "./global.css";

// import cd images
import dramaCd from '../images/drama-cd.png';
import offTheRecordCd from '../images/offtherecord-cd.png'
import risingCd from '../images/rising-cd.png'
import perfectNightCd from '../images/perfectnight-cd.png'

export default function Samples() {
    const [popupDrama, openDrama] = useState(false);
    const [popupOffTheRecord, openOffTheRecord] = useState(false);
    const [popupRising, openRising] = useState(false);
    const [popupPerfectNight, openPerfectNight] = useState(false);

    return (
        <div>
            <Header />
            <div className = "page">
                <h1>time&tune</h1>
                <div className="gridContainer">
                    <MixItem 
                    title = "drama" 
                    cdImage = {dramaCd} 
                    trigger = {popupDrama}
                    setTrigger = {openDrama}/>

                    <MixItem 
                    title = "off the record" 
                    cdImage = {offTheRecordCd} 
                    trigger = {popupOffTheRecord}
                    setTrigger = {openOffTheRecord}/>

                    <MixItem 
                    title = "rising" 
                    cdImage = {risingCd} 
                    trigger = {popupRising}
                    setTrigger = {openRising}/>

                    <MixItem 
                    title = "perfect night" 
                    cdImage = {perfectNightCd} 
                    trigger = {popupPerfectNight}
                    setTrigger = {openPerfectNight}/>
                </div>

                <div>
                    <PopupSample 
                    title = "Drama" 
                    cdImage = {dramaCd} 
                    artist = "aespa" 
                    castN = "solo"
                    sampleEmbed = "c71YsHdDgiY?si=XpTqPu3Cl-LugweD"
                    trigger = {popupDrama}
                    setTrigger = {openDrama}/>

                    <PopupSample 
                    title = "Off the Record" 
                    cdImage = {offTheRecordCd} 
                    artist = "IVE" 
                    castN = "solo"
                    sampleEmbed = "rBLMOgVlCLI?si=y7xN61dUZxafbYME"
                    trigger = {popupOffTheRecord}
                    setTrigger = {openOffTheRecord}/>

                    <PopupSample 
                    title = "Rising" 
                    cdImage = {risingCd} 
                    artist = "tripleS" 
                    castN = "4人"
                    sampleEmbed = "i0KFZlpCVh4?si=2K7RRfF0SJACOXkJ"
                    trigger = {popupRising}
                    setTrigger = {openRising}/>

                    <PopupSample
                    title = "Perfect Night"
                    cdImage = {perfectNightCd}
                    artist = "LE SSERAFIM"
                    castN = "solo"
                    trigger = {popupPerfectNight}
                    setTrigger = {openPerfectNight}/>
                </div>
            </div>
        </div>
    );
};