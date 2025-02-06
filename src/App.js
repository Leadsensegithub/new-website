import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default_layout from "./default_layout/Default_layout";
import Loader from "./pages/Loader/Loader";
import RegForm from "./pages/RegForm";
import Suggest from "./Ai_2min/Suggest";
import Exploreuniversities from "./pages/Exploreuniversities";

// import Universities from "./pages/Universities";
// import Contact from "./pages/Header_files/Contact";
// import TopHeader from "./components/Topheader";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/*" element={<Default_layout />} />
       <Route path="/loader" element={<Loader/>} />
        <Route path="/sign-in" element={<RegForm />} /> 
<<<<<<< HEAD
        <Route path="/suggest" element={<Suggest />} /> 
        <Route path="/suggest-universities" element={<Suggest />} /> 
=======
        <Route path="/suggest-universities" element={<Suggest />} /> 
        <Route path="/explore-uni/" element={<Exploreuniversities />} /> 
>>>>>>> 2bd63031638885798deb140abdea9d89c9d01f65
      </Routes>
    </Router>
  );
}

export default App;
