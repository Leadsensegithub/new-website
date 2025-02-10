import React, { Suspense, useEffect, useState } from "react";
import UserNavbar from "../components/UserDashboard/UserNavbar";
import UserSidebar from "../components/UserDashboard/UsersideBar";
import DashboardRoute from "../Route/DashboardRoute";
import { Navigate, Route, Routes } from "react-router-dom";

function Default_Dashboard_layout() {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <UserSidebar />

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
                <UserNavbar />
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
    );
}

export default Default_Dashboard_layout;
