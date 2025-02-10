import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import '../../Css/UserNavbar.css'; // Import the external CSS file
import Assets from '../../Assets/Assets';

const UserNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="cccc">
            <nav className="navbar">
                <div>
                    <img src={Assets?.LogoInner} style={{width:"100px"}}></img>
                </div>
                <div className="profileContainer">
                    <button className="profileButton" onClick={() => setMenuOpen(!menuOpen)}>
                        <small style={{ marginRight: "10px", fontSize: "16px" }}>Profile</small>
                        <FaUserCircle size={34} />
                    </button>

                    {/* Dropdown Menu */}
                    {menuOpen && (
                        <div className="dropdownMenu">
                            <button className="dropdownItem">My Account</button>
                            <button className="dropdownItem">Settings</button>
                            <button className="dropdownItem">
                                <MdLogout size={18} style={{ marginRight: '8px' }} /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default UserNavbar;
