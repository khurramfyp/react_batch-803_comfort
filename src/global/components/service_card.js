import React from 'react'

const ServiceCard = ({ service_img, title }) => {
    return (

        <div className='service_card'>
            <img src={service_img ? service_img : 'https://images.pexels.com/photos/10568358/pexels-photo-10568358.jpeg?auto=compress&cs=tinysrgb&w=600'} width='100%' alt='Pixels'></img>
            <div className='over_lay'>
                <div className='content'>
                    <h2>{title ? title : 'Title'}</h2>
                    <button> Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard