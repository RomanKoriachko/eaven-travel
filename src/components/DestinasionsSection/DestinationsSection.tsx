import DestinationBlock from 'components/DestinationBlock/DestinationBlock'
import React from 'react'
import './DestinationsSection.scss'

type Props = {}

const DestinationsSection = (props: Props) => {
    return (
        <section className="destinations">
            <div className="container">
                <div className="destinations-menu">
                    <div className="destinations-logo">
                        Explore by Destination
                    </div>
                    <div className="destinations-items">
                        <DestinationBlock country="australia" />
                        <DestinationBlock country="france" />
                        <DestinationBlock country="italy" />
                        <DestinationBlock country="japan" />
                        <DestinationBlock country="singapore" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationsSection
