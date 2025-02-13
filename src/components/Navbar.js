import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Assets from "../Assets/Assets";
import Popular_Courses from "../pages/Header_files/Popular_Courses";

const Navbar = () => {
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
      width: "250px", 
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
      border: "1px solid #ccc",
      fontSize: "16px",
      fontWeight: "500",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      borderRadius: "4px",
    },
    signInButton: {
      color: "white",
      backgroundColor: "#087FFF",
      padding:"5px 10px",
      borderRadius: "4px",
      border: "1px solid white",
      cursor: "pointer",
      fontSize:"15px",
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
    <nav style={styles.nav} className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-header" style={styles.logo}>
        <img src={Assets?.Logoinnerblack} alt="Logo" />
      </div>
      <div style={styles.searchBar} className="mobile">
        <input type="text" placeholder="Search..." style={styles.searchInput} />
        <FaSearch style={styles.searchIcon} className="mobile" />
      </div>
      <div style={styles.linksContainer} className="mobile">
        <button onClick={openModal} style={styles.linkButton}>Explore Programs</button>
        <button onClick={() => navigate("/suggest-universities")} className="mobile" style={styles.linkButton}>
          Suggest Universities in 5 mins
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/login")} style={styles.signInButton}>
          Login
        </button>
      </div>
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={styles.closeButton}>Close</button>
            <div>
              Hello
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}



export default Navbar;
