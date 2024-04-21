import React from "react";
import './TopBar.css';
import { useNavigate, useLocation } from "react-router-dom";

const TopBar = ({ subpages = [], selectedSubpage }) => { 
    const location = useLocation();
    const navigate = useNavigate();

    const handlePageClick = (route) => {
        if (location.pathname === '/harmguides' && route === '/harmguides') {
            navigate('/vocals');
        } else {
            navigate(`/${route}`);
        }
    };

    const getSubpageTitle = (subpage) => {
        switch (subpage) {
            case 'harmguides':
                return '★ harm guides'; 
            default:
                return subpage; 
        }
    };

    const getColour = (currentPage) => {
        if (location.pathname === '/harmguides') {
            return '#393B62'
        }
        else {
            return 'white'
        }
    };

    const getColourPages = (currentPage) => {
        if (currentPage === '/harmguides') {
            return 'white'
        }
        else {
            return '#393B62'
        }
    };

    const pageTitleMap = {
        '/': '★ about me',
        '/vocals': '★ vocals',
        '/harmguides': '★ vocals',
        '/mixes': '★ mixes',
        '/comms': '★ comms',
        default: '★ hi'
    };

    const currentPage = location.pathname;
    const pageTitle = pageTitleMap[location.pathname] || pageTitleMap.default;

    return (
        <div className="top-bar">
            <p className={`header clickable`} 
                onClick={() => handlePageClick(currentPage)} 
                style={{ 
                    cursor: 'pointer', 
                    color: getColourPages(currentPage)
                }}>
                {pageTitle}
            </p>

            {subpages.map((subpage, index) => (
                <div key={index} onClick={() => handlePageClick(subpage)} style={{ cursor: 'pointer' }}>
                    <span
                        className={`header clickable ${selectedSubpage === subpage ? 'selected' : ''}`} 
                        style={{color: getColour('/harmguides'), marginLeft: "1.3rem"}}
                    >
                        {getSubpageTitle(subpage)}
                    </span>
                </div>
            ))}


            {currentPage === '/vocals' && (
                <div className="tab-indicator" style={{backgroundColor: "#E1E5F0"}}> </div>
            )}

            {currentPage === '/harmguides' && (
                <div className="tab-indicator" style={{width: "18rem", left: "13.8rem"}}> 
                </div>
            )}
            

            <div className="button-container">
                <div className="button">
                    <hr className="button-line"></hr>
                </div>
                
                <div className="button">
                    <div className="button-square"></div>
                </div>
                
                <div className="button">
                    <div className="button-x"></div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;