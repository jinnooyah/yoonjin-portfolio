import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

import folderSelected from '../images/folder-selected.png';
import folderUnselected from '../images/folder-unselected.png';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const onAboutMeClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    const onVocalsClick = useCallback(() => {
        navigate("/vocals");
    }, [navigate]);

    const onMixesClick = useCallback(() => {
        navigate("/mixes");
    }, [navigate]);

    const onCommsClick = useCallback(() => {
        navigate("/comms");
    }, [navigate]);

    return (
        <div>
            <div className="header-folder">
                <img src={location.pathname === '/' ? folderSelected : folderUnselected} alt="folder" onClick={() => navigate('/')}/>
                <img src={(location.pathname === '/vocals' || location.pathname === '/harmguides') ? folderSelected : folderUnselected} alt="folder" onClick={() => navigate('/vocals')}/>
                <img src={location.pathname === '/mixes' ? folderSelected : folderUnselected} alt="folder" onClick={() => navigate('/mixes')}/>
                <img src={location.pathname === '/comms' ? folderSelected : folderUnselected} alt="folder" onClick={() => navigate('/comms')}/>
            </div>

            <div className="header-container">
                <div className={`clickable-text ${location.pathname === '/' ? 'selected' : ''}`} onClick={onAboutMeClick}>about me</div>
                <div className={`clickable-text ${(location.pathname === '/vocals' || location.pathname === '/harmguides') ? 'selected' : ''}`} onClick={onVocalsClick}>vocals</div>
                <div className={`clickable-text ${location.pathname === '/mixes' ? 'selected' : ''}`} onClick={onMixesClick}>mixes</div>
                <div className={`clickable-text ${location.pathname === '/comms' ? 'selected' : ''}`} onClick={onCommsClick}>comms</div>
            </div>
        </div>
    );
}