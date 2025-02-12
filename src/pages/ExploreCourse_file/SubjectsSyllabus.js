import React from 'react';

const SubjectsSyllabus = () => {
    const syllabusData = [
        {
            term: 'Term I',
            courses: [
                'Basic Financial Analysis',
                'Economic and Social Aspects of Business',
                'Individual and Group Behavioural Design: Discovery and Transformation',
                'Data to Decisions',
                'Fundamentals of Marketing',
                'Multimedia and Short Film Making',
                'Wellness and Life Skills',
            ],
        },
        {
            term: 'Term II',
            courses: [
                'Design, Implementation, and Management of the Workforce',
                'Corporate Finance',
                'Decisions for Wealth Maximization',
                'Analytics for Business Insights',
                'Operations Research & Management',
                'Marketing Strategy & Managing Customer Value',
                'Personal Growth Lab',
                'Rural Immersion',
            ],
        },
        {
            term: 'Term III',
            courses: [
                'Cost and Management Accounting for Sustainable Business',
                'Leadership and Strategy: Managing with Excellence',
                'Research Methods & Methodology',
                'Supply Chain Management',
                'Strategic Management',
                'Ethical and Legal Aspects of Business',
            ],
        },
        {
            term: 'Term IV',
            courses: ['International Business'],
        },
        {
            term: 'Term V',
            courses: ['Entrepreneurship and Business Plan Development'],
        },
        {
            term: 'Term VI',
            courses: ['Research Paper'],
        },
    ];

    return (
        <div className='row'>
            <div className='col-lg-12'>
                <h1 style={{ textAlign: "start" }}>Subjects & Syllabus</h1>
            </div>
            <div className='col-lg-12'>
                <div className="syllabus-container">

                    <table className="syllabus-table">
                        <thead>
                            <tr>
                                <th>Term</th>
                                <th>Courses</th>
                            </tr>
                        </thead>
                        <tbody>
                            {syllabusData.map((termData, index) => (
                                <tr key={index}>
                                    <td>{termData.term}</td>
                                    <td>
                                        <ul className="courses-list">
                                            {termData.courses.map((course, idx) => (
                                                <li key={idx}>{course}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default SubjectsSyllabus;
