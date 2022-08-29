import DestinationItem from 'components/DestinationItem/DestinationItem'
import React from 'react'
import './DestinationsSection.scss'

type Props = {}

const DestinationsSection = (props: Props) => {
    return (
        <section className="destinations">
            <div className="container">
                <div className="destinations-wrapper">
                    <div className="destinations-logo">
                        Explore by Destination
                    </div>
                    <div className="destinations-items">
                        <DestinationItem country="australia" />
                        <DestinationItem country="france" />
                        <DestinationItem country="italy" />
                        <DestinationItem country="japan" />
                        <DestinationItem country="singapore" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationsSection
