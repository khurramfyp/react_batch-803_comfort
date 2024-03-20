import React from 'react'
import BannerImage from '../../../assets/images/home/banner/banner.svg'
const HeroSection = () => {
    return (
        <>
            <section className="banner_section">
                <div className="page_width">
                    <div className="banner_inner_section">
                        <div className="banner_content">
                            <small> Best in Dubai</small>
                            <p className="intro">Welcome To</p>
                            <h2>Home <span>Comfort</span></h2>
                            <p className="description">
                                Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with
                                home comfort professional experts.
                            </p>
                            <div className="banner_button">
                                <button className="btn btn_1"> Contact Us</button>
                                <button className="btn btn_2"> Learn More </button>
                            </div>
                        </div>
                        <div className="banner_img">
                            <img src={BannerImage} alt="" />
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default HeroSection