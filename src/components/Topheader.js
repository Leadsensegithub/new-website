import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa"; // Import the icons
import '../Css/Common.css';

function TopHeader() {
    return (
        <nav>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2px 30px",color:"#087FFF" }}>
                <span>admissions@zolearn.com</span>
                <div style={{ display: "flex", gap: "15px" }}>
                    {/* Apply black color to icons using inline style */}
                    <Link to="https://www.instagram.com" target="_blank" aria-label="Instagram">
                        <FaInstagram size={24} style={{ color: '#e6005c' }} />
                    </Link>
                    <Link to="https://www.youtube.com" target="_blank" aria-label="YouTube">
                        <FaYoutube size={24} style={{ color: '#ff0000' }} />
                    </Link>
                    <Link to="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin size={24} style={{ color: '#0000e6' }} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default TopHeader;
