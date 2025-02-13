import React from "react";

function AdmissionProcedure() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <h2 style={{ textAlign: "start"}}>Admissions Process</h2>
                </div>
                <div className="col-lg-4">
                    <div className="card" style={{height:"200px"}}>
                        <div className="card-body">
                            <h2 style={{ textAlign: "start" }}>Step 1: Application</h2>
                            <p>Fill out the online application form with your personal and academic details.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" style={{height:"200px"}}>
                        <div className="card-body">
                            <h2 style={{ textAlign: "start" }}>Step 2: Document Submission</h2>
                            <p>Submit necessary documents like transcripts, resume, and statement of purpose.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" style={{height:"200px"}}>
                        <div className="card-body">
                            <h2 style={{ textAlign: "start" }}>Step 3: Interview & Admission</h2>
                            <p>Attend an online interview and complete the final admission process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdmissionProcedure;
