import React from 'react'
import CountryPage from 'components/CountryPage/CountryPage'

type Props = {}

const FrancePage = (props: Props) => {
    return (
        <div className="france-page">
            <CountryPage image="france-page-bg" text="France" />
        </div>
    )
}

export default FrancePage
