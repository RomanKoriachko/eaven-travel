import DestinationItem from 'components/DestinationItem/DestinationItem'
import AustraliaPage from 'pages/CountrisPages/AustraliaPage'
import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to="/australia">
                            <DestinationItem country="australia" />
                        </Link>
                        <Link to="/france">
                            <DestinationItem country="france" />
                        </Link>
                        <Link to="/italy">
                            <DestinationItem country="italy" />
                        </Link>
                        <Link to="/japan">
                            <DestinationItem country="japan" />
                        </Link>
                        <Link to="/singapore">
                            <DestinationItem country="singapore" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DestinationsSection
