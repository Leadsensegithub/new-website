import React, { useState } from "react";
import '../Css/ExploreCourse.css'
import ExploreCourseHerder from "./ExploreCourse_file/ExplorecourseHerder";
import ExploreCourseStatus from "./ExploreCourse_file/ExploreCourseStatus";
import SubjectsSyllabus from "./ExploreCourse_file/SubjectsSyllabus";
import ProgramFees from "./ExploreCourse_file/ProgramFees";
import AdmissionProcedure from "./ExploreCourse_file/AdmissionProcedure";
import TopSpecialisations from "./ExploreCourse_file/TopSpecialisations";
import EducationLoanEMI from "./ExploreCourse_file/EducationLoanEMI";

function ExploreCourse() {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        "Program Overview",
        "Subjects/Syllabus",
        "Eligibility & Duration",
        "Program Fees",
        "Admission Procedure",
        "Top Specialisations",
        "Education Loan/EMIs"
    ];
    return (
        <>
            <div className="ExploreCourse">
                <div className="explore_sidebar bg-gray-100 w-64 p-4 rounded-lg shadow-lg">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`p-2 cursor-pointer rounded-lg transition-colors duration-300 ${activeIndex === index ? "bg-blue-500 text-white active" : "hover:bg-gray-200"
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content-explore">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h1>ONLINE PGDM</h1>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-5">
                            <ExploreCourseHerder />
                        </div>
                        <div className="col-lg-12 mt-5">
                            <ExploreCourseStatus />
                        </div>
                        <div className="col-lg-12 mt-5">
                            <SubjectsSyllabus />
                        </div>
                        <div className="col-lg-12 mt-5">
                            <AdmissionProcedure />
                        </div>
                        <div className="col-lg-12 mt-5">
                            <ProgramFees />
                        </div>
                        <div className="col-lg-12 mt-5">
                            <TopSpecialisations />
                        </div>
                        <div className="col-lg-12 mt-5">
                            <EducationLoanEMI />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ExploreCourse