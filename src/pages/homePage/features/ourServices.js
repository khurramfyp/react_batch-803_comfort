import React from 'react'
import ServiceCard from '../../../global/components/service_card'

const OurServices = () => {
    return (
        <div className='ourServices page_width'>
            <h2 className='global_title'>
                Explore our <span>Services</span>
            </h2>
            <div className='card_grid'>

                <ServiceCard service_img="https://images.pexels.com/photos/3987142/pexels-photo-3987142.jpeg?auto=compress&cs=tinysrgb&w=600" title='AC Duct' />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default OurServices