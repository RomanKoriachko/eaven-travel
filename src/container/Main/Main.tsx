import React from 'react'
import IntroduceSection from 'components/IntroduceSection/IntroduceSection'
import './Main.scss'
import DestinationsSection from 'components/DestinasionsSection/DestinationsSection'
import WhereINowSection from 'components/WhereINowSection/WhereINowSection'

type Props = {}

const Main = (props: Props) => {
    return (
        <main className="main">
            <IntroduceSection />
            <DestinationsSection />
            <WhereINowSection />
        </main>
    )
}

export default Main
