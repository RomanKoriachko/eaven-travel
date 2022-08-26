import React from 'react'
import './IntroduceSection.scss'

type Props = {}

const IntroduceSection = (props: Props) => {
    return (
        <section className="introduce">
            <div className="container">
                <div className="introduce-wrapper">
                    <div className="introduce-photo">
                        <img src="images/kiko.png" alt="" />
                    </div>
                    <div className="introduce-desc">
                        <p>Nice to Meet You!</p>
                        <p>
                            Hello, I am Kiko. Traveller. Blogger. Writer. I was
                            born in Kyoto and grew up in Toronto, now I am
                            living in Morocco. I have traveled to over 60
                            countries around the world ever since 2015.
                        </p>
                        <p>
                            Hope this site will give you some inspiration and
                            useful tips to pursue your adventures. Let's find
                            some beautiful places to get lost!
                        </p>
                        <button>FIND MORE ABOUT ME</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroduceSection
