import React, { useState } from 'react';
import { FaTachometerAlt, FaCogs, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md'; // Logout icon
import '../../Css/UserSidebar.css';
import { MdWindow } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaCalculator } from "react-icons/fa6";



import { useNavigate } from 'react-router-dom';

const UsersideBar = ({ openModal, styles }) => {
    const [active, setActive] = useState("/dashboard/");
    const navigate = useNavigate();
  
    const Offerpage = (e) => {
      navigate(e);
      setActive(e);
    };
  
    return (
      <div className="sidebar">
        <ul className="sidebarList">
          <li
            className={active === "/dashboard/" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => Offerpage("/dashboard/")}
          >
            <MdWindow size={20} style={{ marginRight: "10px" }} /> Profile Details
          </li>
          <li
            className={active === "/dashboard/offerpage" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => Offerpage("/dashboard/offerpage")}
          >
            <MdOutlineAttachMoney size={20} style={{ marginRight: "10px" }} /> Exciting Offers
          </li>
          <li
            className={active === "/dashboard/emipage" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => Offerpage("/dashboard/emipage")}
          >
            <FaCalculator size={20} style={{ marginRight: "10px" }} /> Best EMI Options
          </li>
          <li
            className={active === "/dashboard/enrollment" ? "sidebarItem active" : "sidebarItem"}
            onClick={() => Offerpage("/dashboard/enrollment")}
          >
            <CgProfile size={20} style={{ marginRight: "10px" }} /> Enrollment Details
          </li>
          <li className="sidebarItem" onClick={openModal}>
            <MdLogout size={20} style={{ marginRight: "10px" }} /> Delete Account
          </li>
        </ul>
  
        <div className="sidebarListMobiles">
          <MdWindow size={24} onClick={() => Offerpage("/dashboard/")} />
          <MdOutlineAttachMoney size={24} onClick={() => Offerpage("/dashboard/offerpage")} />
          <FaCalculator size={24} onClick={() => Offerpage("/dashboard/emipage")} />
          <CgProfile size={24} onClick={() => Offerpage("/dashboard/enrollment")} />
          <MdLogout size={24} onClick={openModal} />
        </div>
      </div>
    );
  };

    

export default UsersideBar;
