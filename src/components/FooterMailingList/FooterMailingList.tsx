import ColorButton from 'components/ColorButton/ColorButton'
import React from 'react'
import './FooterMailingList.scss'

type Props = {}

const FooterMailingList = (props: Props) => {
    return (
        <>
            <div className="footer-mailing-list">
                <div className="container">
                    <div className="mailing-wrapper">
                        <div className="mailing-header">
                            Don't Miss Anything New
                        </div>
                        <div className="mailing-text">
                            Sign up to the weekly travel newsletter for the
                            latest posts, city guides, and the useful travel
                            tips and secrets.
                        </div>
                        <div className="mailing-input">
                            <input type="email" placeholder="Your Email" />
                            <ColorButton buttonText="subscribe" />
                        </div>
                        <div className="mailing-chackbox">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms" className="checkbox-label">
                                I have read and agree to the terms & conditions
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-mailing-list-bg"></div>
        </>
    )
}

export default FooterMailingList
