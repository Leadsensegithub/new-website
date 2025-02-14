import React, { useState } from 'react'
import { DiVim } from 'react-icons/di'
import Assets from '../Assets/Assets'
import { IoIosRefresh } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { HiOutlineRefresh } from "react-icons/hi";
import '../Css/suggest.css'
import axios from 'axios';
import axiosInstance from '../components/axiosInstance';
import { useNavigate } from 'react-router-dom';


function Suggest() {

    const navigate = (e) => {
        Navigate(e)
    }

    const [veriable, setVeriable] = useState(true)
    const [name, setName] = useState(
        {
            title: "which degree are you interestes in?",
            options: [
                {
                    value: "1",
                    type: "2",
                    name: 'PG Courses',
                    img: Assets?.edu2
                },

                {
                    value: "2",
                    type: "2",
                    name: 'UG Courses',
                    img: Assets?.edu3
                },

                {
                    value: "3",
                    type: "2",
                    name: 'Study Abrod',
                    img: Assets?.studyabrod
                },
            ]
        }

    )
    const Navigate = useNavigate()
    const UniversitySuggestion = (id, type) => {
        setName([])
        console.log(type)
        if (type == 3) {
            setVeriable(false)
        }
        if (type == 13) {
            Navigate('/sign-in')
        }
        axiosInstance.get('/getUniversity', {
            params: {
                type: type,
                su: id,
            }
        })
            .then(response => {
                const universityData = response?.data?.data?.university || [];
                const title = response?.data?.data?.title || [];
                const ty = response?.data?.data?.ty || [];

                // Transform response data into the required format
                const newEntries = universityData.map(item => ({
                    value: item.name,
                    type: ty,
                    name: item?.name,
                    img: item?.img
                }));
                setName({ title: title, options: newEntries });
            })
            .catch(error => {
                console.error('Error fetching university suggestions:', error);
            });
    };
    return (
        <div className='suggest'>
            <div className='header d-flex justify-content-between p-3'>
                <div>
                    <img src={Assets?.Logoinnerblack} width={'100px'} />
                </div>

                <div className='navbar_sign'>
                    <div>
                        <button type="button" className="btn btn-outline-primary" onClick={()=>navigate("/sign-in")}>Sign in</button>
                    </div>
                    <div>
                        <IoIosRefresh />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-12'>
                    <div className='minutes pt-2'>
                        <div><CiClock2 /></div>
                        <div><p>Your best match is just 5minutes away!</p></div>
                    </div>
                </div>
            </div>

            <div className='content mt-3'>
                <div>
                    <h1>{name?.title}</h1>
                </div>


            </div>


            <div className='suggest_img mt-5'>
                {veriable ? <div className='row sug_img'>

                    {
                        name?.options?.map((data, index) => {
                            return (

                                <div className='col-lg-2 col-6'>

                                    <div className="card pt-4 mb-4" key={index} onClick={() => UniversitySuggestion(data?.value, data?.type)}>
                                        <div className='suggest-img'>
                                            <div className="card-body">
                                                <img src={data.img} className='images' />
                                                <h5 className="card-text">{data.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> : <>
                    <div className='row sug_img'>
                        {

                            name?.options?.map((data, index) => {
                                return (

                                    <div className='cards col-lg-2 col-6'>

                                        <div className="" key={index} onClick={() => UniversitySuggestion(data?.value, data?.type)}>
                                            <div className='suggest-img'>
                                                <div className="card-body">
                                                    <h5 className="card-text">{data.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>}
            </div>

            <div className='btn1'>

                <button type="button" className="btn btn-warning ">Next</button>

                <div className='btn2'>
                    <div className='btntop'>
                        <HiOutlineRefresh />
                        <p>compare on 30+ factors!</p>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Suggest