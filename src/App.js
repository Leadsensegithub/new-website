import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default_layout from "./default_layout/Default_layout";
import Loader from "./pages/Loader/Loader";
import RegForm from "./pages/RegForm";
import Suggest from "./Ai_2min/Suggest";
import Exploreuniversities from "./pages/Exploreuniversities";
import UserNavbar from "./components/UserDashboard/UserNavbar";
import Default_Dashboard_layout from "./default_layout/Defaul_dashboard_layout";
import Login from "./pages/Header_files/Login";
import Error_page from "./pages/Header_files/Error_page";
import Aboutsus from "./pages/Aboutsus";
import Site_map from "./pages/Header_files/Site_map";
function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="*" element={<Error_page />} /> */}
        <Route path="/*" element={<Default_layout />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/sign-in" element={<RegForm />} />
        <Route path="/suggest-universities" element={<Suggest />} />
        <Route path="/dashboard/*" element={<Default_Dashboard_layout />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>
  );
}

export default App;
