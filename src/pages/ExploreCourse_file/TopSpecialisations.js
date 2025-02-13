import React from "react";

function TopSpecialisations() {
    return (
        <div>
            <h2 style={{textAlign:"start"}}>Top Specialisations in Online PGDM</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card" style={{height:"300px"}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{textAlign:"start"}}>Marketing Management</h2>
                            <p className="card-text">
                                Learn strategies to analyze market trends, develop brands, and execute campaigns. Ideal for students aspiring for leadership roles in marketing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card"  style={{height:"300px"}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{textAlign:"start"}}>Finance Management</h2>
                            <p className="card-text">
                                Gain expertise in financial analysis, budgeting, and investment management. Perfect for those looking to advance in the finance sector.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card"  style={{height:"300px"}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{textAlign:"start"}}>Human Resource Management</h2>
                            <p className="card-text">
                                Study HR strategies, talent management, and employee relations to lead human capital functions within an organization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <div className="card"  style={{height:"300px"}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{textAlign:"start"}}>Operations Management</h2>
                            <p className="card-text">
                                Develop skills to optimize processes, manage supply chains, and improve operational efficiency. Ideal for those seeking a career in operations leadership.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card"  style={{height:"300px"}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{textAlign:"start"}}>Business Analytics</h2>
                            <p className="card-text">
                                Dive into data-driven decision-making, statistical methods, and predictive analytics to solve business challenges.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card"  style={{height:"300px"}}>
                        <div className="card-body">
                            <h2 className="card-title" style={{textAlign:"start"}}>International Business</h2>
                            <p className="card-text">
                                Gain insight into global trade, cross-cultural management, and international market strategies for a career in international business.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopSpecialisations;
