import React from 'react';


const PGDMOnlineFeeTable = () => {
    const feeData = [
        { component: 'Tuition Fee', totalFee: '₹3,50,000' },
        { component: 'Registration Fee', totalFee: '₹3,100' },
        { component: 'Total Program Fee', totalFee: '₹3,53,100', emi12: '₹29,425 / month', emi6: '₹58,850 / month', emi24: '₹14,712 / month' },
    ];

    return (
        <div className='row'>
            <div className='col-lg-12'>
                <h2 style={{textAlign:"start"}}>Program Fee</h2>
            </div>
            <div className='col-lg-12'>
                <div className="fee-table-container">

                    <table className="fee-table">
                        <thead>
                            <tr>
                                <th>Program Fee Component</th>
                                <th>Total Fee</th>
                                <th>EMI Option (12 Months)</th>
                                <th>EMI Option (6 Months)</th>
                                <th>EMI Option (24 Months)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feeData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.component}</td>
                                    <td>{row.totalFee}</td>
                                    {row.emi12 ? (
                                        <>
                                            <td>{row.emi12}</td>
                                            <td>{row.emi6}</td>
                                            <td>{row.emi24}</td>
                                        </>
                                    ) : (
                                        <>
                                            <td colSpan="3">-</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default PGDMOnlineFeeTable;
