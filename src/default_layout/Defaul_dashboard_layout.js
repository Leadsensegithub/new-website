import React, { Suspense, useEffect, useState } from "react";
import UserNavbar from "../components/UserDashboard/UserNavbar";
import UserSidebar from "../components/UserDashboard/UsersideBar";
import DashboardRoute from "../Route/DashboardRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import DeleteAccount from "../DashboardPage/DeleteAccount";
import { useNavigate } from "react-router-dom";

function Default_Dashboard_layout() {
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
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <Navbar />
                </div>
                <div className="col-lg-3">
                    <UserSidebar />
                </div>
                <div className="col-lg-9" style={{textAlign:"start"}}>
                    <div className="flex flex-col flex-1">
                        <div className="p-4">
                            <Suspense>
                                <Routes>
                                    {DashboardRoute.map((route, idx) => {
                                        return (
                                            route.element && (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    element={<route.element />}
                                                />
                                            )
                                        );
                                    })}
                                    <Route path="/" element={<Navigate to="dashboard" replace />} />


                                </Routes>
                            </Suspense>
                        </div>
                    </div>
                </div>

            </div>
            <div>

            </div>
        </>

    );
}

export default Default_Dashboard_layout;
