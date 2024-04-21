import "./VHarmGuides.css";
import React, { useState } from 'react';
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import VocalItem from '../components/VocalItem';
import PopupSample from "../components/PopupSample";
import cdImages from "../components/cdImages";
import { popupKeys } from "../components/popupKeys";

export default function VHarmGuides() {
    const subpages = ['harmguides'];
    
    const initialPopupsState = popupKeys.reduce((acc, key) => {
        acc[key] = false;
        return acc;
    }, {});

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
    };

    const [popups, setPopups] = useState(initialPopupsState);

    const [selectedLanguage, setSelectedLanguage] = useState('korean');

    const togglePopup = (key) => {
        setPopups(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const generateSample = (title, cdImage, popupKey, embed, language, group, gender, type, date) => {
        return {
            title,
            cdImage,
            popupKey,
            embed,
            language,
            group,
            gender,
            type,
            date,
        };
    };

    const samples = [
        generateSample("drama", "dramaCd", "popupDrama", "c71YsHdDgiY?si=XpTqPu3Cl-LugweD", "korean", "aespa", "girl group", "vocals&rap", "2023 nov 20"),
        generateSample("off the record", "offTheRecordCd", "popupOffTheRecord", "rBLMOgVlCLI?si=y7xN61dUZxafbYME", "korean", "ive", "girl group", "vocals", "2023 dec 29"),
        generateSample("mirotic", "miroticCd", "popupMirotic", "srRVMd7LRz4?si=WUFvjJrlHABbKQsY", "korean", "aespa", "girl group", "vocals&rap", "2024 feb 21"),
        generateSample("magnetic", "magneticCd", "popupMagnetic", "", "korean", "illit", "girl group", "vocals", "2024 mar 26"),
        generateSample("dash", "dashCd", "popupDash", "", "korean", "nmixx", "girl group", "vocals&rap", "2024 mar 25"),
        generateSample("trick or trick", "dramaCd", "popupTrickOrTrick", "XUDxYzARd4E?si=u3262JN6ZSG8RFU", "korean", "aespa", "girl group", "vocals", "2024 feb 23"),
        generateSample("rewind", "rewindCd", "popupRewind", "", "twice", "girl group", "vocals", "2023 nov 28"),
        generateSample("hypnosis", "hypnosisCd", "popupHypnosis", "PPFPcAjZJg8?si=DNxlqVK8Yqn5blgq", "korean", "ive", "girl group", "vocals&rap", "2023 may 6"),
        generateSample("villain dies", "villainDiesCd", "popupVillainDies", "T9rUHQI1DEI?si=StGfTilhALdUErOt", "korean", "(g)i-dle", "girl group", "vocals", "2024 mar 9"),
        
        generateSample("battle of butler", "battleOfButlerCd", "popupBattleOfButler", "", "japanese", "king & prince", "boy group", "rap", "2024 feb 5"),   
        generateSample("god sees all", "godSeesAllCd", "popupGodSeesAll", "B1IT2YCZBZg?si=yqf9AFoqXe6WvUse", "japanese", "ethyria", "girl group", "vocals", "2022 oct 23"),
        generateSample("black out", "blackOutCd", "popupBlackOut", "Porq4eyAlYw?si=UXnXGxR5vWtn3_4A", "japanese", "obsydia", "girl group", "vocals&rap", "2022 jul 19"),  

        generateSample("get up", "newjeanscd", "popupnewjeans", "7-OJJCyf5As?si=WBAHwK1_TEveIE98", "english", "newjeans", "girl group", "vocals", "2023 jul 22"),
        generateSample("god sees all", "godSeesAllCd", "popupGodSeesAll", "B1IT2YCZBZg?si=yqf9AFoqXe6WvUse", "english", "ethyria", "girl group", "vocals", "2022 oct 23"),
        generateSample("diamond city lights", "diamondCityLightsCd", "popupDiamondCityLights", "0awfUq1xo_o?si=PXIG4luBcEdq13y7", "english", "lazulight", "girl group", "vocals", "2022 may 17"),   
        generateSample("black out", "blackOutCd", "popupBlackOut", "Porq4eyAlYw?si=UXnXGxR5vWtn3_4A", "english", "obsydia", "girl group", "vocals&rap", "2022 jul 19"),   
        
        generateSample("silent boarding gate", "silentBoardingGateCd", "popupSilentBoardingGate", "qW9p13BvUkA?si=34Zyjl9fonxz1tdT", "chinese", "seventeen (jun)", "boy group", "vocals", "2022 nov 5"),
    ];

    const renderVocalItems = (sample) => {
        if (sample.language !== selectedLanguage) {
            return null;
        }

        return (
            <VocalItem
                key={sample.title} 
                title={sample.title}
                cdImage={cdImages[sample.cdImage]}
                trigger={popups[sample.popupKey]}
                setTrigger={() => togglePopup(sample.popupKey)}
                language={sample.language}
                group={sample.group}
                type={sample.type}
                gender={sample.gender}
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

                <div className='vocals'>
                    <div>
                        <p className="psubheading" style={{ marginTop: "0.6rem", marginLeft: "0.1rem", marginBottom: "0rem", fontSize: "1rem", fontFamily: "pfont" }}>scroll for more samples!</p>
                        
                        <div className="album-grid">
                            {["korean", "japanese", "english", "chinese"].map((language, index) => (
                                <div key={index} onClick={() => handleLanguageClick(language)} className="album-container">
                                    <div className="album-wrapper">
                                        <div className={`album ${selectedLanguage === language ? 'selected' : ''}`}></div>
                                        <div className="highlight"></div>
                                    </div>
                                    <p className={`albumtext ${selectedLanguage === language ? 'selected-text' : ''}`}>{language}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="song-container">
                            {samples.filter(sample => sample.language === selectedLanguage).map(sample => (
                                <div key={sample.title}>
                                    {renderVocalItems(sample)}
                                </div>
                            ))}
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