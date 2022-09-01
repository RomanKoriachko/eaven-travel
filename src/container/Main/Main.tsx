import React from 'react'
import IntroduceSection from 'components/IntroduceSection/IntroduceSection'
import './Main.scss'
import DestinationsSection from 'components/DestinasionsSection/DestinationsSection'
import WhereINowSection from 'components/WhereINowSection/WhereINowSection'
import StoriesSection from 'components/StoriesSection/StoriesSection'
import ArticlesSection from 'components/ArticlesSection/ArticlesSection'

type Props = {}

const Main = (props: Props) => {
    return (
        <main className="main">
            <IntroduceSection />
            <DestinationsSection />
            <WhereINowSection />
            <StoriesSection />
            <ArticlesSection />
        </main>
    )
}

export default Main