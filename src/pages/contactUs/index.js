import React from 'react'
import './style.css'
import Banner from './features/banner'
import ContactForm from './features/contactForm'
import JavaScriptPractice from './features/javaScriptPractice'

const ContactUs = () => {
    return (
        <div>
            <Banner />
            <JavaScriptPractice />
            <ContactForm />
        </div>
    )
}

export default ContactUs