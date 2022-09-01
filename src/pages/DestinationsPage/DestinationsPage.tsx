import PageHeader from 'components/PageHeader/PageHeader'
import React from 'react'
import './DestinationsPage.scss'

type Props = {}

const DestinationsPage = (props: Props) => {
    return (
        <div className="destinations-page">
            <PageHeader header="Destinations" />
        </div>
    )
}

export default DestinationsPage
