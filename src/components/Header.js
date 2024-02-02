import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const onAboutMeClick = useCallback(() => {
        navigate("/")
    }, [navigate]);

    const onVocalsClick = useCallback(() => {
        navigate ("/vocals")
    }, [navigate]);

    const onMixesClick = useCallback(() => {
        navigate("/mixes")
    }, [navigate]);

    const onCommsClick = useCallback(() => {
        navigate("/comms")
    }, [navigate]);

    return (
        <div className="header-container">
            <div className={`clickable-text ${location.pathname === '/' ? 'selected' : ''}`} onClick={onAboutMeClick}>about me</div>
            <div className={`clickable-text ${location.pathname === '/vocals' ? 'selected' : ''}`} onClick={onVocalsClick}>vocals</div>
            <div className={`clickable-text ${location.pathname === '/mixes' ? 'selected' : ''}`} onClick={onMixesClick}>mixes</div>
            <div className={`clickable-text ${location.pathname === '/comms' ? 'selected' : ''}`} onClick={onCommsClick}>comms</div>
        </div>
    );
}