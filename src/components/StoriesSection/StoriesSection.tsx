import React from 'react'
import ColorButton from 'components/ColorButton/ColorButton'
import './StoriesSection.scss'

type Props = {}

const StoriesSection = (props: Props) => {
    return (
        <section className="stories">
            <div className="container">
                <div className="stories-content">
                    <div className="stories-logo">
                        All Stories from the Road
                    </div>
                    <div className="stories-text">
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Fusce porttitor metus
                        eget lectus consequat, sit amet feugiat magna vulputate.
                        Phasellus iaculis tellus augue, at ultrices lacus
                        efficitur a. Mauris a nibh erat. In sed massa sed erat
                        consectetur convallis vel vitae felis.
                    </div>
                    <ColorButton buttonText="read the story" />
                </div>
            </div>
        </section>
    )
}

export default StoriesSection
