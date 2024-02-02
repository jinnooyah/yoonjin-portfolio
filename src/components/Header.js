import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const onAboutMeClick = useCallback(() => {
        navigate("/")
    }, [navigate]);

    const onSamplesClick = useCallback(() => {
        navigate("/samples")
    }, [navigate]);

    const onCommsClick = useCallback(() => {
        navigate("/comms")
    }, [navigate]);
    
    return (
        <div className="header-container">
            <div className="clickable-text" onClick = {onAboutMeClick}>about me</div>
            <div className="clickable-text" onClick = {onSamplesClick}>samples</div>
            <div className="clickable-text" onClick = {onCommsClick}>comms</div>
        </div>
    )
}