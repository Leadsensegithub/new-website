import React from "react";

function EducationLoanEMI() {
    return (
        <div className="container my-5">
            <h2 style={{textAlign:"start"}}>Education Loan & EMIs</h2>
            
            <div className="table-responsive">
                {/* Table for Education Loan Details */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Aspect</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* What is Education Loan */}
                        <tr>
                            <td><strong>What is an Education Loan?</strong></td>
                            <td>An education loan helps students finance their higher education. It covers tuition fees, exam fees, and other expenses such as books, living costs, etc. Education loans are available from banks and financial institutions with various repayment options.</td>
                        </tr>
                        {/* How EMIs Work */}
                        <tr>
                            <td><strong>How EMIs Work</strong></td>
                            <td>EMIs (Equated Monthly Installments) are fixed monthly payments made to repay the loan. The EMI is calculated based on the loan amount, interest rate, and loan tenure. Education loan EMIs usually begin after the completion of the course or after a moratorium period.</td>
                        </tr>
                        {/* Eligibility for Education Loan */}
                        <tr>
                            <td><strong>Eligibility for Education Loan</strong></td>
                            <td>
                                <ul>
                                    <li>Indian citizen with a confirmed admission to a recognized educational institution.</li>
                                    <li>Age between 18-35 years (may vary by lender).</li>
                                    <li>Good academic performance and potential for success in the chosen course.</li>
                                    <li>Co-applicant, usually a parent or guardian, may be required.</li>
                                </ul>
                            </td>
                        </tr>
                        {/* Documents Required */}
                        <tr>
                            <td><strong>Documents Required</strong></td>
                            <td>
                                <ul>
                                    <li>Admission letter from the educational institution.</li>
                                    <li>Proof of identity (Aadhaar, Passport, etc.).</li>
                                    <li>Proof of address (Utility bills, Rent Agreement, etc.).</li>
                                    <li>Academic transcripts and mark sheets.</li>
                                    <li>Co-applicant's income proof and bank statements.</li>
                                </ul>
                            </td>
                        </tr>
                        {/* Repayment Options */}
                        <tr>
                            <td><strong>Repayment Options</strong></td>
                            <td>
                                Education loans offer various repayment options such as:
                                <ul>
                                    <li><strong>EMI Based Repayment:</strong> Equal monthly payments for the loan's tenure.</li>
                                    <li><strong>Moratorium Period:</strong> You can get a break in EMI payments until a certain period after course completion (e.g., 6 months or 1 year).</li>
                                    <li><strong>Income-Sensitive Repayment:</strong> EMI amounts can be adjusted based on income levels.</li>
                                    <li><strong>Prepayment Option:</strong> Option to pay the loan early without any penalty.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Button to Loan EMI Calculator */}
            <div className="row mt-4">
                <div className="col-lg-12 text-center">
                    <a href="/loan-calculator" className="btn btn-primary btn-lg">
                        Calculate Your Loan EMI
                    </a>
                </div>
            </div>
        </div>
    );
}

export default EducationLoanEMI;
