import React, { Suspense, useEffect, useState } from "react";
import UserNavbar from "../components/UserDashboard/UserNavbar";
import UserSidebar from "../components/UserDashboard/UsersideBar";
import DashboardRoute from "../Route/DashboardRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

function Default_Dashboard_layout() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <Navbar />
                </div>
                <div className="col-lg-3 col-md-2">
                    <UserSidebar />
                </div>
                <div className="col-lg-9 col-md-10">
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
        </>

    );
}

export default Default_Dashboard_layout;
