import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { DiVim } from 'react-icons/di';
import { useNavigate } from 'react-router-dom';



function Footer() {

    const Navigate = useNavigate()


    const navigate = (e) => {
        Navigate(e)
    }

    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 mt-4'>


                        <div className='footer-icons'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <h4>Follow Us</h4>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='media_icons'>
                                        <div className='circule'>
                                            <BsFacebook />
                                        </div>
                                        <div className='circule'>
                                            <FaInstagram />
                                        </div>
                                        <div className='circule'>
                                            <CiYoutube />
                                        </div>

                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className='col-lg-5 mt-4'>
                        <div> <h4>Our Links</h4></div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='footer_items'>
                                    <div><h6>Student Login</h6></div>
                                    <div><h6>Staff Login</h6></div>
                                    <div><h6>Admission</h6></div>
                                    <div><h6>About Us</h6></div>


                                </div>


                            </div>
                            <div className='col-lg-6'>
                                <div className='footer_items'>
                                    <div> <h6>scholarship</h6></div>
                                    <div> <h6>FeedBack</h6></div>
                                    <div> <h6>Students Facility</h6></div>


                                </div>
                            </div>


                        </div>


                    </div>
                    <div className='col-lg-3 mt-4'>
                        <div className='footer_contact'>
                            <h4>Contact Us</h4>
                        </div>
                        <div className='row'>
                            <div className='d-flex ptag_ft'>
                                <div>
                                   <IoMdCall/>
                                </div>
                                <div>
                                    <p>+91 9087878687686</p>
                                </div>
                            </div>
                            <div className='d-flex ptag_ft'>
                                <div>
                               <FaRegMessage/>
                                </div>
                                <div>
                                    <p>clgwebsite@gmail.com</p>
                                </div>
                            </div>
                            <div className='d-flex ptag_ft'>
                                <div>
                                <IoLocationOutline/>
                                </div>
                                <div>
                                    <p>chennai</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>



    )
}

export default Footer