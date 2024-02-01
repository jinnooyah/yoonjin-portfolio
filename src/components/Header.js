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
    
    return (
        <div className="header-container">
            <div onClick = {onAboutMeClick}>About Me</div>
            <div onClick = {onSamplesClick}>Samples</div>
        </div>
    )
}