import React, { useEffect, useState } from "react";
import '../Css/explore_more_body.css'
import Assets from "../Assets/Assets";
import axiosInstance from "./axiosInstance";


function ExploreMore() {
    const [activeIndex, setActiveIndex] = useState([]);
    console.log(activeIndex)
    const [DegreeactiveIndex, setDegreeActiveIndex] = useState('MA');
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


    useEffect(()=>{
        APifunction("MA")
    },[])

    const degrees = ["ALL", "UG", "PG"];

    const courseNames = ["MA", "MBA", "MCA", "MCom", "MSc", "BA", "B.Com", "BBA", "BCA"];

    const universities = [
        "Jain University",
        "Chandigarh University",
        "Noida International University",
        "D.Y. Patil University",
        "KIIT University",
        "Dr. MGR University",
    ];
    const APifunction = (i) => {
        let config = {
            method: 'get',
            url: `/getUniversity?type=3&search=MA&su=${i}`,
            headers: {}
        };

        axiosInstance.request(config)
            .then((response) => {
                //   console.log(response?.data?.data?.university)
                setActiveIndex(response?.data?.data?.university)
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const UserNavigateButton = (i) => {
        console.log(i)

        APifunction(i)
        setDegreeActiveIndex(i)
    }
    return (
        <>
            <div className="explore_more_body">
            <p>UG & PG Degrees</p>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card courselists">
                            <div className="card-body course-names" >
                                <div className="list_out_courses">
                                    {courseNames?.map((degree, index) => (
                                        <div
                                            key={index}
                                            className={
                                                degree === DegreeactiveIndex ? "dree active" : "dree"
                                            }
                                            onClick={() => UserNavigateButton(degree)}
                                        >
                                            {degree}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card content">
                            <div className="card-body">
                                <div className="card-container">
                                    {activeIndex?.map((data, index) => (
                                        <div key={index} className="card-item">
                                            <div className="card uni-names">

                                                <p>{data?.name}</p>

                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ExploreMore