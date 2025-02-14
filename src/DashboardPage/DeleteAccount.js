import React from "react";
import { IoClose } from "react-icons/io5";
import "../Css/Deleteaccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function DeleteAccount() {
  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#fff",
      padding: "2rem",
      borderRadius: "8px",
      width: "500px",
      // height: "200px",
      textAlign: "center",
    },
    closeButton: {
      backgroundColor: "red",
      color: "#fff",
      border: "none",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      borderRadius: "4px",
      fontSize: "16px",
      minWidth: "0px",
      width: "100%",
    },
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="delaccount">
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <p>Delete Account</p>
          <div>
            <IoClose onClick={closeModal} style={styles.closeButton} />
          </div>
          <p>
            Are You sure you want to delete your account? Doing this will{" "}
            <span>remove</span>all the data that we have acquired from you.
          </p>
          <p>
            <span>Note:</span>There is no coming back from this.
          </p>
          <h6>Confirm</h6>
        </div>
      )}
     
    </div>
  );
}

export default DeleteAccount;
