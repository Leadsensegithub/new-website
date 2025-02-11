import React, { useState } from "react";

function Site_map() {
  const [onMba, setOnMba] = useState([
    "Finance",
    "HR",
    "Marketing",
    "General",
    "Business Analytics",
    "Operations",
    "Information Technology",
    "Logistics And Supply Chain (Dual)",
    "Healthcare Management",
    "Data Analytics",
    "Production and Operation (Dual)",
    "Data Science and Analytics (Dual)",
    "Data Science",
    "Retail Management",
    "Project Management",
    "Entrepreneurship and Leadership (Dual)",
    "Financial Markets",
    "International Business Management",
    "Digital Marketing",
    "HR Analytics",
    "Hospital Administration & Healthcare (Dual)",
    "Hospitality Management",
    "Generative AI",
    "Hospital Administration",
    "Banking and Insurance",
    "HRM and Finance (Dual)",
    "Oil and Gas Management (Dual)",
    "Fintech Management",
    "Digital Marketing E Commerce (Dual)",
    "Banking and Finance",
    "Marketing And HR (Dual)",
    "Marketing And Finance (Dual)",
    "Infrastructure Management",
    "Digital Entrepreneurship",
    "Business Intelligence & AI (Dual)",
    "Business Intelligence And Analytics (Dual)",
    "Marketing and Sales (Dual)",
    "Power Management",
    "IT and FinTech (Dual)",
    "Investment Banking Equity Research",
    "Finance and Accounting (Dual)",
    "International Finance",
    "Blockchain Management",
    "AI and Machine Learning (Dual)",
    "System And Operations (Dual)",
    "Quality Management",
    "International Trade",
    "Tourism Management",
    "Family-Managed Business",
    "Pharmaceutical Management",
    "Public Policy",
    "Forensic Accounting & Corporate Fraud Investigation",
    "Biotechnology Management",
    "Food Technology Management",
    "Direct Selling Management",
    "Management Information System",
    "Event and Media Management",
    "Sports Management",
    "Advertising and Branding (Dual)",
    "Real Estate Management",
    "Business Management",
    "Aviation Management",
    "Strategic HR Management",
    "Strategic Marketing",
    "Leadership and Strategy (Dual)",
    "Agri-Business Management",
    "Strategic Finance",
    "Personnel and HR Management",
    "Business and Corporate Laws Management",
    "Export and Import Management",
    "Banking Financial Services & Insurance",
    "Energy Management",
    "Customer Relationship Management",
    "Technical Writing in Business Management",
    "Educational Administration",
    "Fashion Management",
    "International Finance With ACCA",
    "Integrated Marketing",
    "Disaster Management",
    "International Finance (Accredited by CPA, US + CMA, US)",
    "Digital Finance",
    "Wealth Management",
    "Supply Chain Management",
    "Cyber Security",
  ]);

  const [exMba, setExMba] = useState([
    "Marketing Management",
    "Applied Finance",
    "AI and Machine Learning",
    "Data Science And Analytics",
    "Business Analytics",
    "Global Logistics & Supply Chain",
    "Human Resource",
    "Project Management",
    "Operations Management",
    "IT Management",
    "Business and Corporate Laws Management",
    "Supply Chain Management",
    "Leadership and Strategy",
    "General Management",
    "Entrepreneurship",
    "International Business",
    "Market Research",
    "Digital Finance",
    "Accounting and Finance",
    "Healthcare Management",
    "Digital Marketing",
    "Economic Management",
    "Communication Management",
    "Humanities and Social Sciences",
    "Decision Sciences",
    "Information Systems",
    "Quantitative Techniques",
    "Digital Product Management and Design",
    "Cyber Security",
  ]);

  const[mbaon,setMbaOn]=useState([
    "Business and Corporate Laws Management"
  ])

const[globMba,setGlobMba]=useState([
    "Marketing Management",
    "Leadership",
    "General",
    "Finance Management",
    "HR Management",
    "Data Science & Analytics",
    "Supply Chain Management",
    "Operations",
    "Business Analytics",
    "Business & Law",
    "International Business"
])

const[dualMba,setDualMba]=useState([
    "Data Science and Analytics (Dual)",
    "Entrepreneurship and Leadership (Dual)",
    "Logistics And Supply Chain (Dual)",
    "Marketing And HR (Dual)",
    "Marketing And Finance (Dual)",
    "HRM and Finance (Dual)",
    "Digital Marketing E Commerce (Dual)",
    "Oil and Gas Management (Dual)",
    "Hospital Administration & Healthcare (Dual)",
    "Business Intelligence And Analytics (Dual)",
    "System And Operations (Dual)",
    "Business Intelligence & AI (Dual)",
    "AI and Machine Learning (Dual)",
    "IT and FinTech (Dual)",
    "Marketing and Sales (Dual)",
    "Production and Operation (Dual)",
    "Finance and Accounting (Dual)",
    "Finance And Leadership (Dual)",
    "PGDM + EMBA"
])

const[onMca,setOnMca]=useState([
    "General",
    "Computer Science And IT",
    "Artificial Intelligence and Machine Learning",
    "Cyber Security",
    "Data Science",
    "Cloud Computing",
    "Artificial Intelligence",
    "Full Stack Development",
    "AR and VR",
    "Data Analytics",
    "Blockchain",
    "Machine Learning",
    "Data Science and Big Data Analytics",
    "Software Engineering",
    "Internet of Things",
    "Game Development",
    "Emerging Technologies"
])


const[afdiploma,setAfDiploma]=useState([
    "Computer Science",
    "Generative AI",
    "Civil Structural",
    "Electronics and Communication",
    "Civil",
    "Mechanical Design",
    "Electrical Power Systems",
    "Mechanical Production",
    "Environmental Engineering",
    "Electronics VLSI",
    "Civil Highway",
    "Electrical Control System",
    "Electrical Power Electronics",
    "Embedded System",
    "Transportation Engineering",
    "Civil Construction",
    "Electrical Engineering",
    "Information Technology",
    "Data Science",
    "Space Technology",
    "Renewable Energy Engineering",
    "Infrastructure Engineering",
    "Data Engineering",
    "Artificial Intelligence",
    "Data Analytics",
    "Machine Learning"
])

const[onMA,setOnMA]=useState([
    "English",
    "Psychology",
    "Economics",
    "History",
    "Political Science",
    "Sociology",
    "Journalism And Mass Communication",
    "Hindi",
    "General",
    "Islamic Studies",
    "Education",
    "Public Policy and Administration",
    "Mathematics",
    "International Relations, Security, and Strategy",
    "Urdu",
    "Liberal Arts",
])

const[onMcom,setOnMcom]=useState([
    "General",
    "Accounting And Finance",
    "M.Com With ACCA",
    "Financial Management",
    "International Finance",
    "Fintech",
    "E-Commerce",
])


const[onMaster,setOnMaster]=useState([
    "User Experience"
])

const[onMsc,setOnMsc]=useState([
     "Mathematics",
     "Data Science",
     "Artificial Intelligence and Machine Learning",
     "Information Technology",
     "Economics",
     "Business Analytics",
     "Computer Science",
     "Statistics",
     "Cyber Security",
])

const[msDegree,setMsDegree]=useState([
    "Machine Learning & AI",
    "Data Science",
    "Computer Science",
    "Business Analytics",
    "Applied Data Science",
    "Cyber Security"
])

const[disMba,setDisMba]=useState([
    "Finance",
    "HR Management",
    "Marketing",
    "Business Analytics",
    "Operations",
    "Information Technology",
    "Data Science and Analytics",
    "Logistics and Supply Chain Management",
    "Healthcare Management"
])

const[pgdm,setPgdm]=useState([
    "IT Management",
    "Digital Marketing",
    "HR Management",
    "Marketing",
    "Business Analytics",
    "Supply Chain Management",
    "Financial",
    "Project Management",
    "Operations",
    "Banking and Financial Services Management",
    "Hospital Administration"
])
  return (
    <div>
      <div className="site-map">
        <div className=" container onmba">
          <h5 className="mb-3">Online MBA</h5>
          <div className="course-names">
          {onMba?.map((filter, index) => (
            <button key={index}>{filter}</button>
          ))}
         
        </div>

            <h5 className="mt-5 mb-3">Executive MBA for Working Professionals</h5>
            <div className="course-names">
                {exMba?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>


            <h5 className="mt-5 mb-3">1 Year MBA Online</h5>
            <div className="course-names">
                {mbaon?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>



            <h5 className="mt-5 mb-3">Online Global MBA</h5>
            <div className="course-names">
                {globMba?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>


            <h5 className="mt-5 mb-3">Dual MBA Online</h5>
            <div className="course-names">
                {dualMba?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>
             

            <h5 className="mt-5 mb-3">Online MCA</h5>
            <div className="course-names">
                {onMca?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>



            <h5 className="mt-5 mb-3">Online MBA after Diploma</h5>
            <h6 className="mt-3 mb-3 text-center"  style={{color:"darkblue"}}>M.Tech</h6>
            <div className="course-names">
                {afdiploma?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>


            <h5 className="mt-5 mb-3">Online MA</h5>
            <div className="course-names">
                {onMA?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>


            <h5 className="mt-5 mb-3">Online Master of Design</h5>
            <div className="course-names">
                {onMaster?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>

            
            <h5 className="mt-5 mb-3">Online M.Com</h5>
            <div className="course-names">
                {onMcom?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>


            <h5 className="mt-5 mb-3">Online M.Sc</h5>
            <div className="course-names">
                {onMsc?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>

            <h5 className="mt-5 mb-3">MS Degree Online</h5>
            <div className="course-names">
                {msDegree?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>

            <h5 className="mt-5 mb-3">Distance MBA</h5>
            <div className="course-names">
                {disMba?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>  
               

            <h5 className="mt-5 mb-3">Online PGDM</h5>
            <h6 className="mt-3 mb-3 text-center"  style={{color:"darkblue"}}>Online PG Diploma & Certificate</h6>
            <div className="course-names">
                {pgdm?.map((filter,index)=>(
                    <button key={index}>{filter}</button>
                ))}
            </div>

            </div>
        </div>
      </div>
    
  );
}

export default Site_map;
