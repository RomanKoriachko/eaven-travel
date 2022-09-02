import CountryPage from 'components/CountryPage/CountryPage'
import React from 'react'

type Props = {}

const AustraliaPage = (props: Props) => {
    return (
        <div className="australia-page">
            <CountryPage image="australia-page-bg" text="Australia" />
        </div>
    )
}

export default AustraliaPage
