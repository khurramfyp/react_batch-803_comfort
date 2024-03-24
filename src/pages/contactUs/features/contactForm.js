import React, { useState } from 'react'

const ContactForm = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const formData = {
        first_name: fname,
        last_name: lname,
        home_address: address,
        phone_number: phone,
        message: message
    }
    const onSubmit = () => {
        console.log("Data in form", formData)
    }

    return (
        <div className='page_width'>
            <div className='form_contact'>

                <input type='text' placeholder='First Name'
                    className='form_input' value={fname} onChange={(e) => setFname(e.target.value)} />
                <input type='text' placeholder='Last Name'
                    className='form_input' value={lname} onChange={(e) => setLname(e.target.value)} />
                <input type='text' placeholder='Address'
                    className='form_input' value={address} onChange={(e) => setAddress(e.target.value)} />
                <input type='text' placeholder='Phone '
                    className='form_input' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type='text' placeholder='Message'
                    className='form_input' value={message} onChange={(e) => setMessage(e.target.value)} />

                <button onClick={onSubmit}>Send</button>

            </div>
        </div>
    )
}

export default ContactForm