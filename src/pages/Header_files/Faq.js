import React, { useState } from 'react'
import '../../Css/Common.css'

const Faq = () => {

    const [ans, setAns] = useState(
        [
            {
                question: "What are the eligibility criteria for admission?",
                answer: "The eligibility criteria depend on the program you are applying for. Generally, for undergraduate programs, candidates must have completed their high school education with the required minimum percentage or GPA. For postgraduate programs, applicants must hold a relevant bachelor's degree from a recognized institution. Some courses may also have specific subject requirements or prior work experience. Additionally, certain programs require candidates to clear an entrance examination as part of the eligibility criteria. It is advisable to check the official website for course-specific eligibility details."
            },
            {
                question: "What documents are required for the application?",
                answer: "To complete the application process, candidates must submit essential documents, including a completed application form, academic transcripts and certificates from previous education levels, and a valid government-issued identity proof such as an Aadhaar card or passport. Additionally, passport-size photographs, entrance exam scorecards (if applicable), and letters of recommendation may be required for certain courses. Some programs, particularly postgraduate ones, may also ask for a Statement of Purpose (SOP) or a personal essay outlining the applicant’s academic and career goals. Candidates should ensure they have all the necessary documents before submitting their applications."
            },
            {
                question: "How can I apply for admission?",
                answer: "Candidates can apply for admission either online or offline. For online applications, they need to visit the official website, register, fill out the application form, upload the required documents, and pay the application fee if applicable. For offline applications, candidates can collect the application form from the admissions office, fill it out manually, and submit it along with the necessary documents. Some institutions may also conduct admission drives where applicants can apply in person. It is important to check the institution’s official guidelines to ensure the correct application procedure is followed."
            },
            {
                question: "What is the deadline for submitting applications?",
                answer: "The deadline for submitting applications varies depending on the institution and the program. Generally, undergraduate course applications close between March and June, while postgraduate program applications may have deadlines from January to April. Some institutions also have multiple admission cycles, such as early decision, regular decision, and late admissions. Candidates are advised to check the official website or prospectus for precise deadlines to avoid missing the submission window."
            },
            {
                question: "Is there an entrance exam for admission?",
                answer: "For certain programs, institutions require candidates to take an entrance exam as part of the selection process. Common entrance exams for undergraduate courses include JEE for engineering, NEET for medical programs, and SAT for international admissions. For postgraduate programs, exams such as CAT, GRE, GMAT, and GATE are often required. However, some programs offer admission based on merit, considering previous academic performance without the need for an entrance exam. Candidates should verify the requirements for their chosen course before applying."
            },
            {
                question: "What is the selection process for admission?",
                answer: "The selection process varies depending on the course and institution. Generally, it begins with an initial screening of applications to verify eligibility and academic qualifications. For entrance exam-based admissions, candidates are shortlisted based on their scores. Some programs also include a personal interview, group discussion, or written test as part of the evaluation. In the final stage, selected candidates receive an offer letter, after which they must confirm their admission by paying the required fees within the stipulated time. The entire process is designed to ensure that the most qualified candidates are admitted."
            },
            {
                question: "Are there any scholarships or financial aid options available?",
                answer: "Many institutions offer scholarships and financial aid to eligible students. Scholarships can be merit-based, awarded to students with outstanding academic performance, or need-based, provided to those facing financial difficulties. Additionally, government and private organizations offer scholarships for specific categories, such as sports, arts, or underprivileged backgrounds. Some institutions also provide tuition fee waivers or installment payment options to support students financially. Candidates should explore the scholarship opportunities available and apply within the given deadline to avail of financial assistance."
            },
            {
                question: "When will the results be announced?",
                answer: "The announcement of results depends on the type of admission process followed by the institution. For entrance exam-based admissions, results are typically declared within a few weeks after the examination. Merit-based admissions may take longer, as applications undergo a thorough evaluation before final selection. Most institutions provide updates on their official website, and shortlisted candidates receive notification via email or SMS. Applicants should regularly check the admissions portal for the latest updates regarding their admission status."
            },
            {
                question: "How can I check my application status?",
                answer: "Candidates can check their application status through the official admissions portal by logging in with their registered credentials. Some institutions also provide status updates via email or SMS. In cases where online tracking is unavailable, applicants can directly contact the admissions office through phone or email to inquire about their application progress. It is advisable to keep a record of the application number or reference ID to facilitate easy tracking."
            },
            {
                question: "Whom should I contact for admission-related queries?",
                answer: "For any admission-related inquiries, candidates can reach out to the admissions office of the institution. Most institutions provide contact details such as email addresses, phone numbers, and office locations on their official website. Additionally, some institutions have dedicated helplines or chat support for quicker assistance. Candidates are encouraged to contact the admissions office well in advance to clarify any doubts regarding eligibility, application procedures, deadlines, or required documents."
            }
        ]
    )

const [num,setNum] =useState(12)

  const handleanswer=(i)=>{

  setNum(i)


  }


    return (
        <div className='faq'>
            <div className='container'>
                <div><h1>Let's clear up some doubts </h1></div>

                <div className='row text-center'>
                    <div className='col-lg-12 border'>
                       
                        {  ans.map((data,index)=>{
                             return (
                                
                        <div className='faq_button'>

                        <div className='faq_inner'>

                            <div>
                                <button onClick={()=>handleanswer(index)}>{data.question}</button>
                            </div>

                            <div id={index}  style={{display:(num==index)?"block":"none"}} >
                                <p>{data.answer}</p>
                            </div>
                        </div>
                    </div>
                             )
                        })

}
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Faq
