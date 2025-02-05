import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default_layout from "./default_layout/Default_layout";
import Loader from "./pages/Loader/Loader";
import RegForm from "./pages/RegForm";

// import Universities from "./pages/Universities";
// import Contact from "./pages/Header_files/Contact";
// import TopHeader from "./components/Topheader";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/*" element={<Default_layout />} />
       <Route path="/loader" element={<Loader/>} />
        // <Route path="/reg-form" element={<RegForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
