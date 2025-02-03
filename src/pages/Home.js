import React, { useState } from "react";
import '../Css/Common.css'
import Uni_register from "./Header_files/Uni_register";
import Home_header from "./Header_files/Home_header";
import Popular_Courses from "./Header_files/Popular_Courses";
import Academic_counsellor from "./Header_files/Academic_counsellor";
import Student_alumni from "./Header_files/Student_alumni";
import Faq from "./Header_files/Faq";

function Home() {


  return (
    <div className="home_page">
      <div className="row">
        <div className="col-lg-12">
          <Home_header />
        </div>
        <div className="col-lg-12">
          <Popular_Courses />
        </div>
        <div className="col-lg-12">
          <Uni_register />
        </div>
        <div className="col-lg-12">
          <Academic_counsellor />
        </div>
        <div className="col-lg-12">
          <Student_alumni />
        </div>
        <div className="col-lg-12">
          <Faq />
        </div>
      </div>

    </div>
  );
}

export default Home;
