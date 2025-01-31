import React, { Suspense } from "react";
import TopHeader from "../components/Topheader";
import Navbar from "../components/Navbar";

import { Navigate, Route, Routes } from "react-router-dom";
import route from "../Route/Route";


function Default_layout() {
    
    return (
        <>
            <div className="default_layout">
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

                </div>
            </div>
        </>
    )
}
export default Default_layout