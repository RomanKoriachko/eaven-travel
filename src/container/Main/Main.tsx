import React from 'react'
import IntroduceSection from 'components/IntroduceSection/IntroduceSection'
import './Main.scss'
import DestinationsSection from 'components/DestinasionsSection/DestinationsSection'

type Props = {}

const Main = (props: Props) => {
    return (
        <main className="main">
            <IntroduceSection />
            <DestinationsSection />
        </main>
    )
}

export default Main
