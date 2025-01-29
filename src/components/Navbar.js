import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for programmatic navigation
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import Assets from "../Assets/Assets";
import '../Css/Common.css';

function Navbar() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav style={styles.nav}>
      {/* Logo Section */}
      <div className="logo-header" style={styles.logo}>
        <img src={Assets?.Logoinnerblack} alt="Logo" />
      </div>

      {/* Search Bar Section with Search Icon */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          style={styles.searchInput}
        />
        <FaSearch style={styles.searchIcon} />
      </div>

      {/* Links Section with Buttons */}
      <div style={styles.linksContainer}>
        <button onClick={openModal} style={styles.linkButton}>
          Explore Programs
        </button>
        <button onClick={() => navigate("/suggest-universities")} style={styles.linkButton}>
          Suggest Universities in 5 mins
        </button>
      </div>

      {/* Sign In Button */}
      <div>
        <button onClick={() => navigate("/sign-in")} style={styles.signInButton}>
          SIGN IN
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "1px 8px 20px #787878",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  searchInput: {
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "250px",  // Adjust width as needed
  },
  searchIcon: {
    position: "absolute",
    right: "10px",
    color: "#888",
    fontSize: "18px",
  },
  linksContainer: {
    display: "flex",
    gap: "1rem",
  },
  linkButton: {
    background: "none",
    color: "#000",
    border: "1px solid #ccc",  // Adding border here
    fontSize: "16px",
    fontWeight: "500",
    padding: "0.5rem 1rem", // Adding some padding for better button size
    cursor: "pointer",
    borderRadius: "4px", // Optional: rounded corners
  },
  signInButton: {
    color: "#fff",
    backgroundColor: "#000",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "1px solid #000",  // Border for the sign-in button
    fontWeight: "bold",
    cursor: "pointer",
  },
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
    minWidth: "1000px",
    minHeight: "550px",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "16px",
  },
};

export default Navbar;
