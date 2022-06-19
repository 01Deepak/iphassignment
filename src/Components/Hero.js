import React from 'react'
import '../Styles/Style.css'
import { AiFillStar } from 'react-icons/ai';
import paneerImg from '../Images/food.PNG'

const Hero = () => {
    return (
        <>
            <div className=' bgImage text-white '>
                <div className="bg-dark  bg-opacity-75 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center">
                    <div className='roundImage'>

                        <img src={paneerImg} className="card-img" alt="food background" height={50} />
                    </div>
                    <h3>Behrouz Biryani (South Exteension)</h3>
                    <h5>Biryani</h5>
                    <p ><span className='text-warning'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></span>(2.3)</p>
                </div>
            </div>
            <div className='flexColumn p-3 bg-dark d-flex justify-content-center align-items-center text-center text-white'>
                <div className='mx-2'>Behrouz Biryani (South Extension) can deliver to you at Lajpat Nagar </div>
                <div><button className='btn btn-outline-success btn-sm'> CHANGE LOCATION </button></div>
            </div>
        </>
    )
}

export default Hero