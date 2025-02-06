import React, { useState } from 'react'
import { DiVim } from 'react-icons/di'
import Assets from '../Assets/Assets'
import { IoIosRefresh } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { HiOutlineRefresh } from "react-icons/hi";
import '../Css/suggest.css'


function Suggest() {
    const [name, setName] = useState(
        [
            {
                key: 'PG Courses',
                img: Assets?.edu2
            },
      
            {
                key: 'UG Courses',
                img: Assets?.edu3
            },
     
            {
                key: 'Study Abrod',
                img: Assets?.studyabrod
            },
       
         

        ]
    )

    return (
        <div className='suggest'>
            <div className='header d-flex justify-content-between p-3'>
                <div>
                    <img src={Assets?.Logoinnerblack} width={'100px'} />
                </div>

                <div className='navbar_sign'>
                    <div>
                        <button type="button" class="btn btn-outline-primary">sign in</button>
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
                        <div><p>your best match is just 5minutes away!</p></div>
                    </div>
                </div>
            </div>

            <div className='content mt-3'>
                <div>
                    <h1>which degree are you interestes in?</h1>
                </div>
           

            </div>


            <div className='suggest_img mt-5'>
                <div className='row sug_img'>
          
                    {
                        name.map((data, index) => {
                            return (
                                
                                <div className='col-lg-2'>
                                    
                                    <div className="card pt-4 mb-4" key={index}>
                                    <div className='suggest-img'> 
                                        <div className="card-body">
                                            <img src={data.img} className='images' />
                                            <p className="card-text">{data.key}</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='btn1'>
        
                        <button type="button" class="btn btn-warning ">Next</button>

                        <div className='btn2'>
                          <div className='btntop'>
                               <HiOutlineRefresh/>
                                <p>compare on 30+ factors!</p>
                       </div>
                        </div>
               
            </div>

               

        </div>
    )
}

export default Suggest