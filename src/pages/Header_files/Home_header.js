import React, { useState } from "react";
import '../../Css/Common.css'


function Home_header() {
    const [items, setItems] = useState({
        heading: 'the premium system education',
        paratag: 'future of education technology',
        btn1: 'expolre universities',
        home_1: {
            years: "7 years",
            experience: "year of experiance",

            stu: '1000+',
            tru_stu: "trusted student",

            coun: "50+",
            academic_coun: "academic counselor"


        },
        home_2: {
            head: "popular online course",
            paratag: "lorem  paratage experince work the server the unverisity graduation of the year"
        }
    })

    return (

        <div className="home-page1 text-center mb-4  text-capitalize">

            <div className="home-heading">
                <div className="home-heading-title">
                    <h1>{items.heading}</h1>
                    <p className="fs-3">{items.paratag}</p>
                    <button className="home-btn px-3">{items.btn1}</button>
                </div>
            </div>
            <div className="home-page1 " >
                <div className="row home-borders">
                    <div className="col-lg-4 mt-3 col-4">
                        <h2>{items.home_1.years} </h2>
                        <h3>{items.home_1.experience}</h3>
                    </div>
                    <div className="col-lg-4 mt-3 col-4">
                        <h2>{items.home_1.stu}</h2>
                        <h3>{items.home_1.tru_stu}</h3>
                    </div>
                    <div className="col-lg-4 mt-3 col-4">
                        <h2>{items.home_1.coun}</h2>
                        <h3>{items.home_1.academic_coun}</h3>
                    </div>
                </div>
            </div>

            <div className="home-heading-bottom">
                <div>
                    <h1>{items.home_2.head}</h1>
                    <p>{items.home_2.paratag}</p>
                </div>
            </div>

        </div>


    );
}

export default Home_header;
