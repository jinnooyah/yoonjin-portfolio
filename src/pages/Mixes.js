// import functionalities
import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import MixItem from "../components/MixItem";
import PopupSample from "../components/PopupSample";
import "./global.css";
import "./Mixes.css";

// import cd images
import dramaCd from '../images/cds/drama-cd.png';
import offTheRecordCd from '../images/cds/offtherecord-cd.png'
import risingCd from '../images/cds/rising-cd.png'
import perfectNightCd from '../images/cds/perfectnight-cd.png'
import rewindCd from '../images/cds/rewind-cd.png'
import hypnosisCd from '../images/cds/hypnosis-cd.png'
import loveDiveCd from '../images/cds/lovedive-cd.png'

export default function Samples() {
    const [popupDrama, openDrama] = useState(false);
    const [popupOffTheRecord, openOffTheRecord] = useState(false);
    const [popupRising, openRising] = useState(false);
    const [popupPerfectNight, openPerfectNight] = useState(false);
    const [popupRewind, openRewind] = useState(false);
    const [popupHypnosis, openHypnosis] = useState(false);
    const [popupLoveDive, openLoveDive] = useState(false);

    return (
        <div>
            <Header />
            <div className = "page">
                <h1>full mix</h1>
                <p class="psubheading">includes time&tune!</p>
                <p class="psubheading" style={{marginTop:"-0.4rem", fontSize: "1rem", fontFamily: "pfont"}}>scroll for more samples!</p>

                <div className="gridContainer" style={{marginTop:"-0.5rem", marginBottom:"2rem"}}>
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

                    <MixItem 
                    title = "rewind" 
                    cdImage = {rewindCd} 
                    trigger = {popupRewind}
                    setTrigger = {openRewind}/>
                    
                    <MixItem 
                    title = "hypnosis" 
                    cdImage = {hypnosisCd} 
                    trigger = {popupHypnosis}
                    setTrigger = {openHypnosis}/>

                    <MixItem 
                    title = "love dive" 
                    cdImage = {loveDiveCd} 
                    trigger = {popupLoveDive}
                    setTrigger = {openLoveDive}/>
                </div>


                {/* pop ups */}
                <div>
                    <PopupSample 
                    title = "drama" 
                    cdImage = {dramaCd} 
                    artist = "aespa" 
                    castN = "solo"
                    sampleEmbed = "c71YsHdDgiY?si=XpTqPu3Cl-LugweD"
                    trigger = {popupDrama}
                    setTrigger = {openDrama}/>

                    <PopupSample 
                    title = "off the record" 
                    cdImage = {offTheRecordCd} 
                    artist = "ive" 
                    castN = "solo"
                    sampleEmbed = "rBLMOgVlCLI?si=y7xN61dUZxafbYME"
                    trigger = {popupOffTheRecord}
                    setTrigger = {openOffTheRecord}/>

                    <PopupSample 
                    title = "rising" 
                    cdImage = {risingCd} 
                    artist = "tripleS" 
                    castN = "4人"
                    sampleEmbed = "i0KFZlpCVh4?si=2K7RRfF0SJACOXkJ"
                    trigger = {popupRising}
                    setTrigger = {openRising}/>

                    <PopupSample
                    title = "perfect night"
                    cdImage = {perfectNightCd}
                    artist = "le sserafim"
                    castN = "solo"
                    trigger = {popupPerfectNight}
                    setTrigger = {openPerfectNight}/>

                    <PopupSample
                    title = "rewind"
                    cdImage = {rewindCd}
                    artist = "twice"
                    castN = "duet"
                    trigger = {popupRewind}
                    setTrigger = {openRewind}/>

                    <PopupSample
                    title = "hypnosis"
                    cdImage = {hypnosisCd}
                    artist = "ive"
                    castN = "duet"
                    sampleEmbed = "PPFPcAjZJg8?si=DNxlqVK8Yqn5blgq"
                    trigger = {popupHypnosis}
                    setTrigger = {openHypnosis}/>

                    <PopupSample
                    title = "love dive"
                    cdImage = {loveDiveCd}
                    artist = "ive"
                    castN = "duet"
                    sampleEmbed = "dnZpVt9f0Bg?si=32S2m6_d4IplfGbo"
                    trigger = {popupLoveDive}
                    setTrigger = {openLoveDive}/>
                </div>
            </div>
        </div>
    );
};