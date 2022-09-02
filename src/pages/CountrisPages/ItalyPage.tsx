import React from 'react'
import CountryPage from 'components/CountryPage/CountryPage'

type Props = {}

const ItalyPage = (props: Props) => {
    return (
        <div className="italy-page">
            <CountryPage image="italy-page-bg" text="Italy" />
        </div>
    )
}

export default ItalyPage
