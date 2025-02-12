import React from "react";

function ExploreCourseStatus() {
    return (
        <>
            <div className="ExploreCourseStatus">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Eligibility & Duration</h2>
                    </div>
                    <div className="col-lg-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th><strong>Course Duration</strong></th>
                                    <th><strong>Eligibility</strong></th>
                                    <th><strong>Learning Mode</strong></th>
                                    <th><strong>EMI Options</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>The program typically lasts 1-2 years, depending on the chosen specialization and learning pace.</td>
                                    <td>Eligibility varies by the chosen program, but generally requires a prior degree or relevant experience.</td>
                                    <td>Learning mode options include online, hybrid, or in-person classes, depending on the program.</td>
                                    <td>EMI options are available to make the program fees more affordable and manageable.</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>


                    <div className="col-lg-12">
                        <p><strong>Eligibility:</strong> Bachelor's degree in any discipline from a recognized university. Professionals with work experience are preferred but not mandatory.</p>

                    </div>
                </div>
            </div>

        </>
    )
}
export default ExploreCourseStatus