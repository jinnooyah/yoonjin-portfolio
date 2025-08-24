import "./Vocals.css";
import React, { useState } from 'react';
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import VocalItem from '../components/VocalItem';
import PopupSample from "../components/PopupSample";
import cdImages from "../components/cdImages";
import { popupKeys } from "../components/popupKeys";

export default function Vocals() {
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

    const generateSample = (title, cdImage, popupKey, embed, instagram, language, group, gender, type, date) => {
        return {
            title,
            cdImage,
            popupKey,
            embed,
            instagram,
            language,
            group,
            gender,
            type,
            date,
        };
    };

    const samples = [
        generateSample("surf", "surfCd", "popupSurf", "Oi6q86W-pEY?si=b8XwZalVvi1550OI", "", "korean", "nct wish", "boy group", "vocals&rap", "2025 aug 19"),
        generateSample("drama", "dramaCd", "popupDrama", "c71YsHdDgiY?si=XpTqPu3Cl-LugweD", "", "korean", "aespa", "girl group", "vocals&rap", "2023 nov 20"),
        generateSample("trick or trick", "dramaCd", "popupTrickOrTrick", "XUDxYzARd4E?si=u3262JN6ZSG8RFU", "", "korean", "aespa", "girl group", "vocals", "2024 feb 23"),
        generateSample("ember to solar", "emberToSolarCd", "popupEmberToSolar", "QBEfx1eXW7I?si=BLNWyAf_CFTVRL6P", "", "korean", "riize", "boy group", "vocals", "2025 jan 16"),
        generateSample("melt inside my pocket", "meltInsideMyPocketCd", "popupMeltInsideMyPocket", "sHEr509_nbs?si=pPQmHvSc-pYdfiUf", "", "korean", "nct wish", "boy group", "vocal&rap", "2025 jun 22"),
        generateSample("songbird", "songBirdCd", "popupSongBird", "Jdv9-14VIg8?si=0lJSwGMdeaP_XUpA", "", "korean", "nct wish", "boy group", "vocals&rap", "2025 may 5"),
        generateSample("virtual angel", "virtualAngelCd", "popupVirtualAngel", "1zJR5R-7HZM?si=2YlYwG5Ulk_HC4G6", "", "korean", "artms", "girl group", "vocals", "2025 aug 16"),
        generateSample("mirotic", "miroticCd", "popupMirotic", "srRVMd7LRz4?si=WUFvjJrlHABbKQsY", "", "korean", "aespa", "girl group", "vocals&rap", "2024 feb 21"),
        generateSample("off the record", "offTheRecordCd", "popupOffTheRecord", "rBLMOgVlCLI?si=y7xN61dUZxafbYME", "", "korean", "ive", "girl group", "vocals", "2023 dec 29"),
        generateSample("rewind", "rewindCd", "popupRewind", "", "C0M7buAuf8", "korean", "twice", "girl group", "vocals", "2023 nov 28"),
        
        generateSample("jackpot sad girl", "jackpotSadGirlCd", "popupJackpotSadGirl", "OSUB6GJprwA?si=HHXuWPHQ6y5CF3r8", "", "japanese", "nightcord at 25:00", "girl group", "vocals&rap", "2025 jan 6"),
        generateSample("monitoring", "monitoringCd", "popupMonitoring", "", "", "japanese", "deco*27", "female artist", "vocals", "2025 mar 3"),
        generateSample("be classic", "beClassicCd", "popupBeClassic", "agXiOS535jw?si=rveLg9ENkiFE_oO6", "", "japanese", "jo1", "boy group", "vocals&rap", "2025 jul 3"),
        generateSample("marionette", "marionetteCd", "popupMarionette", "yqR3dY69JAI?si=5zMZL417PaHgoLsQ", "", "japanese", "lapix", "male artist", "vocals", "2025 apr 26"),
        generateSample("let me battle", "letMeBattleCd", "popupLetMeBattle", "ElamS34Uiwk?si=Qciy-e3ZjR4B92IP", "", "japanese", "9lana", "female artist", "vocals", "2024 dec 21"),
        generateSample("keitai renwa", "keitaiRenwaCd", "popupKeitaiRenwa", "q5W9UIsGk1A?si=IuHVQnj2QhhAybtx", "", "japanese", "mafumafu", "male artist", "vocals", "2024 may 28"),
        generateSample("moon pride", "moonPrideCd", "popupMoonPride", "nEvdz4QSc0w?si=pOjiq8177-rZMZIo", "", "japanese", "momoiro clover z", "female artist", "vocal", "2025 dec 25"),
        generateSample("battle of butler", "battleOfButlerCd", "popupBattleOfButler", "", "C29XvenuH-w", "japanese", "king & prince", "boy group", "rap?", "2024 feb 5"),   
        generateSample("god sees all", "godSeesAllCd", "popupGodSeesAll", "B1IT2YCZBZg?si=yqf9AFoqXe6WvUse", "", "japanese", "ethyria", "girl group", "vocals", "2022 oct 23"),
        generateSample("black out", "blackOutCd", "popupBlackOut", "Porq4eyAlYw?si=UXnXGxR5vWtn3_4A", "", "japanese", "obsydia", "girl group", "vocals&rap", "2022 jul 19"),  

        generateSample("gabriela", "gabrielaCd", "popupGabriela", "", "DLO38uGurLi", "english", "katseye", "girl group", "vocals", "2025 jun 23"),
        generateSample("get up", "newJeansCd", "popupnNewJeans", "7-OJJCyf5As?si=WBAHwK1_TEveIE98", "", "english", "newjeans", "girl group", "vocals", "2023 jul 22"),
        generateSample("if i can stop one heart from breaking", "ifICanStopOneHeartFromBreakingCd", "popupIfICanStopOneHeartFromBreaking", "", "C5IPd64qq-i/", "english", "chevy", "female artist", "vocals", "2024 mar 30"),
        generateSample("god sees all", "godSeesAllCd", "popupGodSeesAll", "B1IT2YCZBZg?si=yqf9AFoqXe6WvUse", "", "english", "ethyria", "girl group", "vocals", "2022 oct 23"),
        generateSample("diamond city lights", "diamondCityLightsCd", "popupDiamondCityLights", "0awfUq1xo_o?si=PXIG4luBcEdq13y7", "", "english", "lazulight", "girl group", "vocals", "2022 may 17"),   
        generateSample("black out", "blackOutCd", "popupBlackOut", "Porq4eyAlYw?si=UXnXGxR5vWtn3_4A", "", "english", "obsydia", "girl group", "vocals&rap", "2022 jul 19"),   
        
        generateSample("silent boarding gate", "silentBoardingGateCd", "popupSilentBoardingGate", "qW9p13BvUkA?si=34Zyjl9fonxz1tdT", "", "chinese", "seventeen (jun)", "male artist", "vocals", "2022 nov 5"),
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
                    <TopBar subpages={subpages}  />
                </div>

                <div className='vocals'>
                    <div>
                        <p className="psubheading" style={{ marginTop: "1rem", marginLeft: "0.1rem", marginBottom: "0rem", fontSize: "1rem", fontFamily: "pfont" }}>scroll for more samples!</p>

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
                        <p className="psubheading" style={{ marginTop: "0.7rem", textAlign:"right", marginRight:"2.45rem", marginBottom: "0rem", fontSize: "1rem", fontFamily: "pfont" }}>click <a href="https://youtube.com/playlist?list=PLwx9VkHDSb0KagjNzQfWkvB574xYbTOZW&si=8Lt4gGPpfgvLHKo7" target="_blank" rel="noreferrer">here</a> for all samples!</p>
                        
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