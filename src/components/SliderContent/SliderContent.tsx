import { Link } from 'react-router-dom'
import './SliderContent.scss'

type Props = {
    id: number
    country: string
    dash: string
    section: string
    header: string
    text: string
}

const SliderContent = ({ id, country, dash, section, header, text }: Props) => {
    return (
        <>
            <div className="topText">
                <Link to={`/${country}`}>
                    <p>{country}</p>
                </Link>
                <p>{dash}</p>
                <Link to={`/${section}`}>
                    <p>{section}</p>
                </Link>
            </div>
            <p className="mainText">{header}</p>
            <p className="bottomText">{text}</p>

            <button className="sliderButton">
                <Link to={`/destinations/${id}`}>Read More</Link>
            </button>
        </>
    )
}

export default SliderContent
