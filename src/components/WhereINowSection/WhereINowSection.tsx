import WhereINowItem from 'components/WhereINowItem/WhereINowItem'
import React from 'react'
import './WhereINowSection.scss'

type Props = {}

const WhereINowSection = (props: Props) => {
    return (
        <section className="where-section">
            <div className="container">
                <div className="where-wrapper">
                    <div className="where-logo">Where I Am Now – ASIA</div>
                    <div className="where-items">
                        <WhereINowItem
                            whereImg="asia-article-1"
                            country="Japan"
                            section="solo travel"
                            content="Fly to Tokyo for My Christmas 2019! And My Trip Plan Inspirations"
                        />
                        <WhereINowItem
                            whereImg="asia-article-2"
                            country="Singapore"
                            section="Tips & Tricks"
                            content="The Complete Guide – Singapore’s Gardens by the Bay"
                        />
                        <WhereINowItem
                            whereImg="asia-article-3"
                            country="Thailand"
                            section="Guides"
                            content="Everything You Need to Know About Buddhism in Thailand"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhereINowSection
