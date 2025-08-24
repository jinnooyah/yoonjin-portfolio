import "./VHarmGuides.css";
import React, { useState } from 'react';
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import GuideItem from '../components/GuideItem';
import PopupSample from "../components/PopupSample";
import cdImages from "../components/cdImages";
import { popupKeys } from "../components/popupKeys";

export default function VHarmGuides() {
    const subpages = ['harmguides'];
    
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

    const generateSample = (title, cdImage, popupKey, embed, group, date) => {
        return {
            title,
            cdImage,
            popupKey,
            embed,
            group,
            date,
        };
    };

    const samples = [
        generateSample("drama", "dramaCd", "popupDrama", "c71YsHdDgiY?si=XpTqPu3Cl-LugweD", "aespa", "2023 nov 20"),
        generateSample("surf", "surfCd", "popupSurf", "Oi6q86W-pEY?si=b8XwZalVvi1550OI", "nct wish", "2025 aug 19"),
        generateSample("mesmerizer", "mesmerizerCd", "popupMesmerizer", "bGiwBVJiB2k?si=FG6CD3oMZ-0nAJoC", "miku & teto", "2024 nov 9"),
        generateSample("let me battle", "letMeBattleCd", "popupLetMeBattle", "ElamS34Uiwk?si=Qciy-e3ZjR4B92IP", "9lana", "2024 dec 21"),
        generateSample("be classic", "beClassicCd", "popupBeClassic", "agXiOS535jw?si=g8ZWHSJdk20tIrKM", "jo1", "2025 jul 3"),
        generateSample("perfume", "perfumeCd", "popupPerfume", "luDW35_sedo?si=FPmkSFIwwjuR9NIX", "dojaejung", "2025 apr 1"),
        generateSample("accendio", "accendioCd", "popupAccendio", "lnDKUpV_AySw?si=cKF6HR5y3Gail_97", "ive", "2025 jan 15"),
        generateSample("halazia", "halaziaCd", "popupHalazia", "8q39DrHe22g?si=IzY9SO55PZDnYman", "ateez", "2025 jan 1"),
        generateSample("songbird", "songBirdCd", "popupSongBird", "Jdv9-14VIg8?si=0lJSwGMdeaP_XUpA", "nct wish", "2025 may 5"),
        generateSample("melt inside my pocket", "meltInsideMyPocketCd", "popupMeltInsideMyPocket", "sHEr509_nbs?si=9r-mrRzoYu-F4PVT", "nct wish", "2025 jun 22"),
        generateSample("design", "meltInsideMyPocketCd", "popupDesign", "", "nct wish", "2025 jun 17"),
        generateSample("mirotic", "miroticCd", "popupMirotic", "srRVMd7LRz4?si=WUFvjJrlHABbKQsY", "aespa", "2024 feb 21"),
        generateSample("idsmile", "idSmileCd", "popupIdSmile", "", "nightcord at 25:00", "2025 apr 28"),
    ];

    const renderGuideItems = (sample) => {
        return (
            <GuideItem
                key={sample.title} 
                title={sample.title}
                cdImage={cdImages[sample.cdImage]}
                trigger={popups[sample.popupKey]}
                setTrigger={() => togglePopup(sample.popupKey)}
                group={sample.group}
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
            <div className="page">
                <div className="topbarcontainer">
                    <TopBar subpages={subpages}  />
                </div>

                <div className='mixesContainer'>
                    <div>
                        <div className='vocals'>
                            <p className="psubheading" style={{ marginTop: "0.6rem", marginLeft: "0.3rem", marginBottom: "0rem", fontSize: "1rem", fontFamily: "pfont" }}>scroll for more samples!</p>
                            <p className="psubheading" style={{ marginTop: "0.7rem", textAlign:"right", marginRight: "2rem", marginBottom: "0rem", fontSize: "1rem", fontFamily: "pfont" }}>click <a href="https://youtube.com/playlist?list=PLwx9VkHDSb0IBXoBy4MiR0Otrtyg7bsHD&si=N6Qm-32yA19O5OUD" target="_blank" rel="noreferrer">here</a> for all samples!</p>
                        </div>

                        <div className="gridContainer" style={{width:"110%", marginLeft:"-2rem", marginTop:"1.5rem"}}>
                            {samples.map((sample) => renderGuideItems(sample))}
                        </div>
                    </div>
                </div>

                <div>
                    {renderPopups()}
                </div>
            </div>
        </div>
    );
}