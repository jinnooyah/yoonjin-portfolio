import React, { useState } from "react";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import MixItem from "../components/MixItem";
import PopupSample from "../components/PopupSample";
import cdImages from "../components/cdImages";
import { popupKeys } from "../components/popupKeys";

export default function Samples() {    
    const initialPopupsState = popupKeys.reduce((acc, key) => {
        acc[key] = false;
        return acc;
    }, {});
    
    const [popups, setPopups] = useState(initialPopupsState);

    const togglePopup = (key) => {
        setPopups(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const generateSample = (title, cdImage, popupKey, embed, instagram, type, date) => ({
        title,
        cdImage,
        popupKey,
        embed,
        instagram,
        type,
        date,
    });

    const samples = [
        generateSample("surf", "surfCd", "popupSurf", "Oi6q86W-pEY?si=b8XwZalVvi1550OI", "", "full mix", "2025 aug 19"),
        generateSample("ember to solar", "emberToSolarCd", "popupEmberToSolar", "QBEfx1eXW7I?si=BLNWyAf_CFTVRL6P", "", "full mix", "2025 jan 16"),
        generateSample("halazia", "halaziaCd", "popupHalazia", "8q39DrHe22g?si=IzY9SO55PZDnYman", "", "full mix", "2025 jan 1"),
        generateSample("trick or trick", "dramaCd", "popupTrickorTrick", "XUDxYzARd4E?si=u3262JN6ZSG8RFU", "", "full mix", "2024 feb 23"),
        generateSample("birth", "virtualAngelCd", "popupBirth", "ki9sXJEecls?si=p5fKrdgJaGTKbSy0", "", "time/tune", "2025 may 20"),
        generateSample("drama", "dramaCd", "popupDrama", "c71YsHdDgiY?si=XpTqPu3Cl-LugweD", "", "full mix", "2023 nov 20"),
        generateSample("girls never die", "girlsNeverDieCd", "popupGirlsNeverDie", "uJFodOy6D1I?si=Lez4E6Qxsmp06Emm", "", "full mix", "2024 oct 30"),
        generateSample("songbird", "songBirdCd", "popupSongBird", "Jdv9-14VIg8?si=0lJSwGMdeaP_XUpA", "", "full mix", "2025 may 5"),
        generateSample("my world", "magneticCd", "popupMyWorld", "iqhvFo-b1EQ?si=5OP111zOmT8aIY20", "", "full mix", "2024 apr 4"),
        generateSample("mirotic", "miroticCd", "popupMirotic", "srRVMd7LRz4?si=WUFvjJrlHABbKQsY", "", "full mix", "2024 feb 21"),
        generateSample("armageddon", "armageddonCd", "popupArmageddon5", "l67jmXAC4DA?si=lZwI9soSIiHT97u4", "", "full mix", "2024 aug 24"),
    ];

    const renderMixItems = (sample) => {
        return (
            <MixItem
                key={sample.title} 
                title={sample.title}
                cdImage={cdImages[sample.cdImage]}
                trigger={popups[sample.popupKey]}
                setTrigger={() => togglePopup(sample.popupKey)}
                type={sample.type}
            />
        );
    };

    const renderPopups = () => {
        return samples.map((sample, index) => (
            <PopupSample
                key={index}
                title={sample.title}
                cdImage={cdImages[sample.cdImage]}
                sampleEmbed={sample.embed}
                sampleInstagram={sample.instagram}
                trigger={popups[sample.popupKey]}
                setTrigger={() => togglePopup(sample.popupKey)}
                date={sample.date}
            />
        ));
    };

    return (
        <div>
            <Header />
            <div className="page">
                <div className="topbarcontainer">
                    <TopBar />
                </div>

            <div className="vocals" style={{height:"15%"}}>
                <p className="psubheading" style={{ textAlign: "left", marginLeft: "1.9rem", paddingTop: "1rem", fontSize: "1rem", fontFamily: "pfont" }}>scroll for more samples!</p>
                <p className="psubheading" style={{ marginTop: "0.7rem", textAlign:"right", marginRight: "2.45rem", fontSize: "1rem", fontFamily: "pfont" }}>click <a href="https://youtube.com/playlist?list=PLwx9VkHDSb0JM1ZONYcxdro8BiQnSku5D&si=EkQQYy1a7wyjmaPt" target="_blank" rel="noreferrer">here</a> for all samples!</p>
            </div>

            <div className="mixesContainer" style={{height:"77.9%", marginTop: "-1.5rem"}}>
                <div className="gridContainer" style={{marginTop: "-0.7rem", marginBottom: "0.7rem", paddingTop:"-2rem"}}>
                    {samples.map((sample) => renderMixItems(sample))}
                </div>

                <div>
                    {renderPopups()}
                </div>
            </div>
            </div>
        </div>
    );
};
