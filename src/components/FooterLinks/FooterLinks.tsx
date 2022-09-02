import React from 'react'
import './FooterLinks.scss'

type Props = {}

const FooterLinks = (props: Props) => {
    return (
        <div className="footer-links">
            <div className="container">
                <div className="footer-links-content">
                    <ul>
                        <li className="links-content-header">ABOUT EAVEN</li>
                        <li className="links-content-text">About us</li>
                        <li className="links-content-text">Travel Guide</li>
                        <li className="links-content-text">Social Impact</li>
                        <li className="links-content-text">Affiliates</li>
                        <li className="links-content-text">Advertisement</li>
                        <li className="links-content-text">Hot Destinations</li>
                    </ul>
                    <ul>
                        <li className="links-content-header">DESTINATIONS</li>
                        <li className="links-content-text">Australia</li>
                        <li className="links-content-text">Singapore</li>
                        <li className="links-content-text">Japan</li>
                        <li className="links-content-text">Thailand</li>
                        <li className="links-content-text">France</li>
                        <li className="links-content-text">Italy</li>
                    </ul>
                    <ul>
                        <li className="links-content-header">HELP & FAQS</li>
                        <li className="links-content-text">Contact Us</li>
                        <li className="links-content-text">Subscribe Now</li>
                        <li className="links-content-text">
                            Pictorial & gifts
                        </li>
                        <li className="links-content-text">Special Offers</li>
                        <li className="links-content-text">Hotels & Flights</li>
                    </ul>
                    <div className="footer-contacts">
                        <div className="footer-contacts-data">
                            <p className="links-content-header">CONTACT</p>
                            <p>hello@eaven.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                        <div className="footer-search-wrapper">
                            <p className="links-content-header">SEARCH</p>
                            <div className="footer-search">
                                <input
                                    type="email"
                                    placeholder="Hit Enter to Search"
                                />
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks
