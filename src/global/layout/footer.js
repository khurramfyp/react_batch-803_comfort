import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="column_one">
                    1
                </div>
                <div className="column_two">
                    2
                </div>
                <div className="column_three">
                    <ul>
                        <li>
                            +92 340 370 9352
                        </li>
                        <li>
                            info@homecomfort.com
                        </li>
                    </ul>
                    <div className="news_letter">
                        <input type="text" placeholder="Enter Email" />
                        <button>Send</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer