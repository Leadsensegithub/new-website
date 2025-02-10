import React from 'react';
import { FaTachometerAlt, FaCogs, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md'; // Logout icon
import '../../Css/UserSidebar.css';

const UserSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarItem">
                    <FaTachometerAlt size={20} style={{ marginRight: '10px' }} /> Dashboard
                </li>
                <li className="sidebarItem">
                    <FaCogs size={20} style={{ marginRight: '10px' }} /> Settings
                </li>
                <li className="sidebarItem">
                    <FaBell size={20} style={{ marginRight: '10px' }} /> Notifications
                </li>
                <li className="sidebarItem">
                    <FaQuestionCircle size={20} style={{ marginRight: '10px' }} /> Help
                </li>
                <li className="sidebarItem">
                    <MdLogout size={20} style={{ marginRight: '10px' }} /> Logout
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
