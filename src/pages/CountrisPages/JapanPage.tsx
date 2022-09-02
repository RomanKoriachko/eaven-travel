import React from 'react'
import CountryPage from 'components/CountryPage/CountryPage'

type Props = {}

const JapanPage = (props: Props) => {
    return (
        <div className="japan-page">
            <CountryPage image="japan-page-bg" text="Japan" />
        </div>
    )
}

export default JapanPage
