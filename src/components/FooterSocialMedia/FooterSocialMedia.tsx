import FooterMailingList from 'components/FooterMailingList/FooterMailingList'
import React from 'react'
import './FooterSocialMedia.scss'

type Props = {}

const FooterSocialMedia = (props: Props) => {
    return (
        <div className="footer-social-media">
            <div className="container">
                <div className="social-media-wrapper">
                    <div className="social-media-copyright">
                        Eaven Theme © Copyright 2019. All rights reserved.
                    </div>
                    <div className="social-media-btns">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="social-media-navigation">
                        <button>HOME</button>
                        <button>CONTACT</button>
                        <button>SHOP</button>
                        <button>BUY THEME</button>
                    </div>
                </div>
            </div>
            {/* <FooterMailingList /> */}
        </div>
    )
}

export default FooterSocialMedia
