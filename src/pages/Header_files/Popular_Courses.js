import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import "../../Css/Common.css";
import Assets from "../../Assets/Assets";
import Slider from "react-slick";

function Popular_Courses() {
  const [courses, setCourses] = useState([
    "Sort by",
    "Recommendation",
    "Fee - Low to High",
    "Fee - High to Low",
    "Ranking - High to Low",
  ]);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#087FFF",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#087FFF",
          borderRadius: "100%",
        }}
        onClick={onClick}
      />
    );
  }

  const [degreeSlide, setDegreeSlide] = useState([
    {
      degreename: "UG Course",
    },
    {
      degreename: "PG Course",
    },
    {
      degreename: "Study Abrod",
    },
  ]);

  const [university, setUniversity] = useState([
    {
      university_name: "Andhra University",
      university_img: Assets?.Andhra_University,
      course_name: "BA(History)",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:22-01-2023",
      rank: "★5 Rank  ₹60,000",
    },
    {
      university_name: "Bharathidasan University",
      university_img: Assets?.Bharathidasan_University,
      course_name: "BSC Maths",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:28-02-2023",
      rank: "★5 Rank  ₹80,000",
    },
    {
      university_name: "Centurion University",
      university_img: Assets?.Centurion_University,
      course_name: "BSC CS",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:22-02-2023",
      rank: "★5 Rank  ₹1,00,000",
    },
    {
      university_name: "Chandigarh University",
      university_img: Assets?.Chandigarh_University,
      course_name: "BA(English)",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:10-02-2023",
      rank: "★5 Rank  ₹80,000",
    },
    {
      university_name: "DYPatil University",
      university_img: Assets?.DYPatil_University,
      course_name: "BSC Chemistry",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:29-01-2023",
      rank: "★5 Rank  ₹60,000",
    },
    {
      university_name: "DrMGR University",
      university_img: Assets?.DrMGR_University,
      course_name: "BSC CS",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:12-01-2023",
      rank: "★5 Rank  ₹2,00,000",
    },
    {
      university_name: "Jain University",
      university_img: Assets?.Jain_University,
      course_name: "BSC Zology",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:30-02-2023",
      rank: "★5 Rank  ₹80,000",
    },
    {
      university_name: "KIIT University",
      university_img: Assets?.KIIT_University,
      course_name: "BA Tamil",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:20-02-2023",
      rank: "★5 Rank  ₹70,000",
    },
    {
      university_name: "Koneru Lakshmaiah Education Foundation",
      university_img: Assets?.Koneru_Lakshmaiah_Education_Foundation,
      course_name: "BCOM CA",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:12-02-2023",
      rank: "★5 Rank  ₹90,000",
    },
    {
      university_name: "Kurukshetra University",
      university_img: Assets?.Kurukshetra_University,
      course_name: "BCOM",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:05-02-2023",
      rank: "★5 Rank  ₹70,000",
    },
    {
      university_name: "Noida International University",
      university_img: Assets?.Noida_International_University,
      course_name: "BSC Physics",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:20-01-2023",
      rank: "★5 Rank  ₹90,000",
    },
    {
      university_name: "OP Jindal Global University",
      university_img: Assets?.OP_Jindal_Global_University,
      course_name: "BCOM CA",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:02-02-2023",
      rank: "★5 Rank  ₹1,00,000",
    },
    {
      university_name: "Vignan University",
      university_img: Assets?.Vignan_University,
      course_name: "BSC Maths",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:10-02-2023",
      rank: "★5 Rank  ₹1,20,000",
    },
    {
      university_name: "Vivekananda Global University",
      university_img: Assets?.Vivekananda_Global_University,
      course_name: "BA English",
      duration: "Duration:3 Years",
      date: "Last Date To Apply:02-01-2023",
      rank: "★5 Rank  ₹1,00,000",
    },
  ]);

  const degrees = ["ALL", "UG", "PG"];

  const courseNames = ["BA (English)", "B.Com", "BBA", "BCA", "BCA", "BCA"];

  const universities = [
    "Jain University",
    "Chandigarh University",
    "Noida International University",
    "D.Y. Patil University",
    "KIIT University",
    "Dr. MGR University",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [DegreeactiveIndex, setDegreeActiveIndex] = useState(0);

  return (
    <div className="course">
      <h2>Recommendation</h2>
      <div className="course-slider">
        <div className="slider-container mt-4">

          {degreeSlide?.map((filter, index) => (
            <div style={{ marginRight: "10px" }} key={index}>
              <button
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {filter?.degreename}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="courselist">
            {courses?.map((filter, index) => (
              <button
                key={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="col-lg-3">
          <div className="degreelist mt-3">
            <div>
              <h5>Degree</h5>
              <div className="d-flex">
                {degrees?.map((degree, index) => (
                  <div
                    key={index}
                    className={
                      index === DegreeactiveIndex ? "dree active" : "dree"
                    }
                    onClick={() => setDegreeActiveIndex(index)}
                  >
                    {degree}
                  </div>
                ))}
              </div>
            </div>

            <div className="coursenames">
              <h5>Course</h5>
              <input type="text" placeholder="Search" />
              <div className="course_listitems">
                {courseNames?.map((course, index) => (
                  <label key={index}>
                    <input type="radio" name="coursename" />
                    {course}
                  </label>
                ))}
              </div>
            </div>

            <div className="coursenames">
              <h5>University's</h5>
              <input type="text" placeholder="Search" />
              <div className="course_listitems">
                {universities?.map((university, index) => (
                  <label key={index}>
                    <input type="radio" name="universityname" />
                    {university}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="university mt-3">
            <div className="row">
              {university?.slice(0, 8)?.map((data, index) => {
                return (
                  <div className="col-lg-3 col-6" key={index}>
                    <div className="card mt-3">
                      <div className="university-content">
                        <img
                          src={data.university_img}
                          alt={data.university_name}
                        />
                        <h5 style={{ backgroundColor: "#004aad", color: "white", padding: "10px" }} >{data.course_name}</h5>
                        <h6>{data.university_name}</h6>
                        <h6>{data.duration}</h6>
                        <h6>{data.date}</h6>
                        <h5 style={{ color: "#087FFF" }}>{data.rank}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-3">
              <button type="button" style={{backgroundColor:"#004aad"}} className="btn btn-primary">
                View ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular_Courses;
