import React from 'react'
import './DestinationBlock.scss'

type Props = {
    country: string
}

const DestinationBlock = ({ country }: Props) => {
    return (
        <div
            className="destinations-item"
            style={{ backgroundImage: `url(images/${country}.jpg)` }}
        >
            <button className="white-btn">{country}</button>
        </div>
    )
}

export default DestinationBlock
