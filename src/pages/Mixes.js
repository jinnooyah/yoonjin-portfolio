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

    const generateSample = (title, cdImage, popupKey, embed, cast, date) => ({
        title,
        cdImage,
        popupKey,
        embed,
        cast,
        date,
    });

    const samples = [
        generateSample("drama", "dramaCd", "popupDrama", "c71YsHdDgiY?si=XpTqPu3Cl-LugweD", "1", "2023 nov 20"),
        generateSample("off the record", "offTheRecordCd", "popupOffTheRecord", "rBLMOgVlCLI?si=y7xN61dUZxafbYME", "1", "2023 dec 29"),
        generateSample("mirotic", "miroticCd", "popupMirotic", "srRVMd7LRz4?si=WUFvjJrlHABbKQsY", "1", "2024 feb 21"),
        generateSample("magnetic", "magneticCd", "popupMagnetic", "", "1", "2024 mar 26"),
        generateSample("dash", "dashCd", "popupDash", "", "1", "2024 mar 25"),
        generateSample("perfect night", "perfectNightCd", "popupPerfectNight", "", "1", "2023 nov 7"),
        generateSample("fire in the belly", "fireInTheBellyCd", "popupFireInTheBelly", "wgE12bkfNMs?si=b7O15NBFKy8JhUrY", "1", "2024 mar 11"),

        generateSample("trick or trick", "dramaCd", "popupTrickorTrick", "XUDxYzARd4E?si=u3262JN6ZSG8RFU", "2", "2024 feb 23"),
        generateSample("my world", "magneticCd", "popupMyWorld", "", "2", "2024 apr 4"),
        generateSample("rewind", "rewindCd", "popupRewind", "", "2", "2023 nov 28"),
        generateSample("hypnosis", "hypnosisCd", "popupHypnosis", "PPFPcAjZJg8?si=DNxlqVK8Yqn5blgq", "2", "2023 may 6"),
        generateSample("smart", "smartCd", "popupSmart", "", "2", "2024 mar 16"),
        generateSample("love dive", "loveDiveCd", "popupLoveDive", "dnZpVt9f0Bg?si=32S2m6_d4IplfGbo", "2", "2023 aug 17"),
        generateSample("zero", "zeroCd", "popupZero", "Sgmy_TGxGTE?si=2YbdMPCu3ePuIBb6", "2", "2023 apr 8"),

        generateSample("drama", "dramaCd", "popupDrama2", "51O8S6ydvgs?si=8GWR7ln7_J9r8yNO", "3", "2024 jan 1"),
        generateSample("batter up", "batterUpCd", "popupBatterUp", "wRVarZe4YDU?si=e9BJti9-Bd6uSDDH", "3", "2024 mar 31"),

        generateSample("rising", "risingCd", "popupRising", "i0KFZlpCVh4?si=2K7RRfF0SJACOXkJ", "4", "2023 mar 30"),
        generateSample("girls' capitalism", "girlsCapitalismCd", "popupGirlsCapitalism", "POR1B25ODTQ?si=vrB7ViXDbQBcrQXh", "4", "2023 oct 31"),

        generateSample("villain dies", "villainDiesCd", "popupVillainDies", "T9rUHQI1DEI?si=StGfTilhALdUErOt", "5", "2024 mar 9"),
    ];

    const renderMixItems = (sample) => {
        return (
            <MixItem
                key={sample.title} 
                title={sample.title}
                cdImage={cdImages[sample.cdImage]}
                trigger={popups[sample.popupKey]}
                setTrigger={() => togglePopup(sample.popupKey)}
                cast={sample.cast}
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
                trigger={popups[sample.popupKey]}
                setTrigger={() => togglePopup(sample.popupKey)}
                date={sample.date}
            />
        ));
    };

    return (
        <div>
            <Header />
            <div className="page" style={{overflow: "scroll"}}>
                <div className="topbarcontainer">
                    <TopBar />
                </div>

                <p className="psubheading" style={{ textAlign: "left", marginLeft: "1.9rem", paddingTop: "0.8rem", marginBottom: "-0.3rem", fontSize: "1rem", fontFamily: "pfont" }}>scroll for more samples!</p>

                {[1, 2, 3, 4, 5].map((castNumber) => (
                    <div key={castNumber}>
                        <div className="gridHeader">
                            <hr />
                            <p className="psubheading">{`${castNumber}人`}</p>
                            <hr />
                        </div>

                        <div className="gridContainer" style={{ marginTop: "-0.5rem", marginBottom: "0.7rem" }}>
                            {samples.filter((sample) => Number(sample.cast) === castNumber).map((filteredSample, index) => (
                                renderMixItems(filteredSample)
                            ))} 
                        </div>
                    </div>
                ))}


                <div>
                    {renderPopups()}
                </div>
            </div>
        </div>
    );
};
