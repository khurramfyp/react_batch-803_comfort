import React from 'react'
import ClientImg from '../../assets/images/home/review_img.png'
import { IoStar } from "react-icons/io5";

const ClientCard = () => {
    return (
        <div className='client_card'>
            <div className='outer_content'>
                <div className='img'>
                    <img src={ClientImg} alt='' />

                </div>
                <div className='img_content'>
                    <h2>
                        Alexa Scent
                    </h2>
                    <div className='rating'>
                        <small>3 Years Ago</small>
                        <div className='star'>
                            <IoStar color='#FFB800' className='icons' size={21} />
                            <IoStar color='#FFB800' className='icons' size={21} />
                            <IoStar color='#FFB800' className='icons' size={21} />
                            <IoStar color='#FFB800' className='icons' size={21} />
                            <IoStar color='#FFB800' className='icons' size={21} />

                        </div>


                    </div>

                </div>

            </div>
            <div className='lower_content'>
                <p>
                    We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.
                </p>
            </div>
        </div>
    )
}

export default ClientCard