import React from 'react'
import Logo from '../../assets/images/logo/logo.svg'
const Header = () => {
    return (
        <div>
            <header>
                <div className="logo_img">
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact
                        </li>
                        <li className="header_btn">
                            +923403709352
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header