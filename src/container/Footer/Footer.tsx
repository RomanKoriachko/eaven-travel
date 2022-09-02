import FooterInstagramLinks from 'components/FooterInstagramLinks/FooterInstagramLinks'
import FooterLinks from 'components/FooterLinks/FooterLinks'
import FooterMailingList from 'components/FooterMailingList/FooterMailingList'
import FooterSocialMedia from 'components/FooterSocialMedia/FooterSocialMedia'
import React from 'react'
import './Footer.scss'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <FooterInstagramLinks />
            <FooterLinks />
            <FooterSocialMedia />
            <FooterMailingList />
        </footer>
    )
}

export default Footer
