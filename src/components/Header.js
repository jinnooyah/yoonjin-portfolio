import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();

    const onHomeClick = useCallback(() => {
        navigate("/")
    }, [navigate]);

    const onAboutMeClick = useCallback(() => {
        navigate("/about-me")
    }, [navigate]);

    const onSamplesClick = useCallback(() => {
        navigate("/samples")
    }, [navigate]);
    
    return (
        <div className="header-container">
            <div onClick = {onHomeClick}>Home</div>
            <div onClick = {onAboutMeClick}>About Me</div>
            <div onClick = {onSamplesClick}>Samples</div>
        </div>
    )
}