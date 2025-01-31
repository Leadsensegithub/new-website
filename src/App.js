import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default_layout from "./default_layout/Default_layout";

// import Universities from "./pages/Universities";
// import Contact from "./pages/Header_files/Contact";
// import TopHeader from "./components/Topheader";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Default_layout />} />
        {/* <Route path="/universities" element={<Universities />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
