import React, { useState } from "react";
import Assets from "../Assets/Assets";
import Uni_register from "./Header_files/Uni_register";
import Academic_counsellor from "./Header_files/Academic_counsellor";
import Student_alumni from "./Header_files/Student_alumni";
import Faq from "./Header_files/Faq";
import "../Css/Aboutus.css";

function Aboutsus() {
  const [about, setAbout] = useState([
    {
      img: Assets?.graduation,
    },
  ]);
  return (
    <div className="">
      <div className="row">
        <div className="col-lg-12">
          <div className="about-container">
            <div className="aboutus">
              <div className="aboutus-details">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="aboutus-image">
                      <img src={Assets?.graduation} alt="Graduation Img" />
                    </div>
                  </div>
                  <div className="col-lg-6 p-5">
                    <div className="aboutus-content p-3">
                      <h2>About College Confluence</h2>
                      <p>
                        College Confluence is your go-to platform for accurate,
                        up-to-date information on universities and colleges in
                        India and abroad. Whether you're exploring
                        undergraduate, postgraduate, or doctoral programs, we
                        provide reliable insights tailored to every aspiring
                        student’s needs.
                      </p>
                      <p>
                        Beyond degree programs, we also feature job-oriented
                        certificate courses available in online mode. Our expert
                        team meticulously evaluates institutions based on
                        authorized rankings, course details, faculty
                        qualifications, and student feedback, ensuring
                        transparent and unbiased ratings. At no point do we
                        influence students toward any specific university or
                        course—our mission is to empower them with the best
                        information to make informed decisions.
                      </p>
                      <p>
                        As India's leading platform for comparing colleges and
                        universities course-wise, ranking-wise, cost-wise, and
                        job opportunity-wise, we also extend our support beyond
                        admissions. Our job portal helps students connect with
                        potential employers through 1-minute video CVs,
                        increasing their chances of landing the right job.
                      </p>
                      <p>
                        Additionally, we offer free counseling services, guiding
                        students in choosing the most suitable courses while
                        respecting their personal choices. For those in need of
                        financial assistance, we facilitate education loans
                        through partnerships with top banks and NBFCs.
                      </p>
                      <p>
                        India has a vast number of first-generation graduates,
                        and even experienced professionals often struggle to
                        navigate the higher education landscape. College
                        Confluence is here to bridge that gap, offering
                        admissions support, recruitment guidance, and career
                        training for students at every stage of their academic
                        and professional journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
}

export default Aboutsus;
