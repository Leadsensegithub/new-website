import React, { Suspense, useEffect, useState } from "react";
import TopHeader from "../components/Topheader";
import Navbar from "../components/Navbar";

import { Navigate, Route, Routes } from "react-router-dom";
import route from "../Route/Route";
import Footer from "../pages/Header_files/Footer";
import Loaders from "../pages/Loader/Loader";


function Default_layout() {
    const [Loader, setLoader] = useState(true)
    const [ip, setIp] = useState(sessionStorage.getItem("ip") || "");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const fetchIP = async () => {
            try {
                const storedIp = sessionStorage.getItem("ip");
                if (storedIp) return;

                const response = await fetch("https://api64.ipify.org?format=json");
                const data = await response.json();
                setIp(data.ip);
                sessionStorage.setItem("ip", data.ip);
            } catch (error) {
                console.error("Error fetching IP:", error);
            }
        };

        fetchIP();
    }, []);

    return (
        <>
            {Loader ? <>
                <Loaders />
            </> : <div className="default_layout">
                <div className="row">
                    <div className="col-lg-12">
                        <TopHeader />
                    </div>
                    <div className="col-lg-12">
                        <Navbar />
                    </div>
                    <div className="col-lg-12">
                        <Suspense>
                            <Routes>
                                {route.map((route, idx) => {
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
                    <div className="col-lg-12">
                        <Footer />
                    </div>

                </div>
            </div>}
        </>

    )
}
export default Default_layout