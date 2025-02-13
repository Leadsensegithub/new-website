import React from 'react';
import { FaTachometerAlt, FaCogs, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md'; // Logout icon
import '../../Css/UserSidebar.css';

const UserSidebar = () => {

    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarItem">
                    <FaTachometerAlt size={20} style={{ marginRight: '10px' }} /> Profile Details
                </li>
                <li className="sidebarItem">
                    <FaCogs size={20} style={{ marginRight: '10px' }} /> Exciting Offers
                </li>
                <li className="sidebarItem">
                    <FaBell size={20} style={{ marginRight: '10px' }} /> Best EMI Options
                </li>
                <li className="sidebarItem">
                    <FaQuestionCircle size={20} style={{ marginRight: '10px' }} />Enrollment Details
                </li>
                <li className="sidebarItem">
                    <MdLogout size={20} style={{ marginRight: '10px' }} /> Delete Account
                </li>
            </ul>
            <div className='sidebarListMobiles'>
                <FaTachometerAlt size={24} />
                <FaCogs size={24} />
                <FaBell size={24} />
                <FaQuestionCircle size={24} />
                <MdLogout size={24} />
            </div>
        </div>
    );
};

export default UserSidebar;
