import React from 'react'
import CountryPage from 'components/CountryPage/CountryPage'

type Props = {}

const SingaporePage = (props: Props) => {
    return (
        <div className="singapore-page">
            <CountryPage image="singapore-page-bg" text="Singapore" />
        </div>
    )
}

export default SingaporePage
