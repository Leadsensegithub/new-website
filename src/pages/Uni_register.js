import React, { useState } from 'react'
import Assets from '../Assets/Assets'

function Uni_register() {

    const [image, setImage] = useState([
        {
            img1: Assets?.Jain_University_logo,
            url: 'Jain University',
        },
        {
            img1: Assets?.Chandigarh_University_logo,
            url: 'Chandigarh University',
        },
        {
            img1: Assets?.Noida_International_University_logo,
            url: 'Noida International University',
        },
        {
            img1: Assets?.DY_Patil_University_logo,
            url: 'D.Y. Patil University',
        },
        {
            img1: Assets?.KIIT_University_logo,
            url: 'KIIT University',
        },
        {
            img1: Assets?.Dr_MGR_University_logo,
            url: 'Dr. MGR University',
        },
        {
            img1: Assets?.Andhra_University_logo,
            url: 'Andhra University'
        },
        {
            img1: Assets?.Kurukshetra_University_logo,
            url: 'Kurukshetra University',
        },
        {
            img1: Assets?.OP_Jindal_Global_University_logo,
            url: 'OP Jindal Global University',
        },
        {
            img1: Assets?.Vivekananda_Global_University_logo,
            url: 'Vivekananda Global University',
        },
        {
            img1: Assets?.Bharathidasan_University_logo,
            url: 'Bharathidasan University',
        },
        {
            img1: Assets?.Koneru_Lakshmaiah_Education_Foundation_KL_University_logo,
            url: 'Koneru Lakshmaiah Education Foundation (KL University',
        },
        {
            img1: Assets?.Vignan_University_logo,
            url: 'Vignan University',
        },

    ])


    const [num, setNum] = useState({
        years: "7 years",
        experience: "year of experiance",

        stu: '1000+',
        tru_stu: "trusted student",

        coun: "50+",
        academic_coun: "academic counselor"
    }
    )


    return (
        <div>
            <main className='iniversities'>
                <div className='text-center'>
                    <h1>welcome to our top universities</h1>
                    <p> when an unknow printer tok a gal ut also the leap into electronic typesetting lorem lorem universities top welocme to the vision.</p>
                </div>
                <div className='uni-image'>

                    <div className='item-main'>
                        {image?.map((data, index) => {
                            return (
                                <div className='item-body '>
                                    <div className='items'>
                                        <img src={data?.img1}></img>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='uni-content row'>
                    <div className='col-lg-8'>
                        <h1>register now</h1>
                        <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis  rhoncus ut,</h4>


                        <div className='row'>
                            <div className="col-lg-4 mt-3">
                                <h2>{num?.years}</h2>
                                <h3>{num?.experience}</h3>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <h2>{num?.stu}</h2>
                                <h3>{num?.tru_stu}</h3>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <h2>{num?.coun}</h2>
                                <h3>{num?.academic_coun}</h3>
                            </div>

                        </div>
                    </div>



                </div>

            </main>
        </div>
    )
}

export default Uni_register
