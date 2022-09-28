import React from 'react'
import './DestinationItem.scss'

type Props = {
    country: string
}

const DestinationItem = ({ country }: Props) => {
    return (
        <div
            className="destinations-item"
            style={{ backgroundImage: `url(/images/${country}.jpg)` }}
        >
            <button className="white-btn">{country}</button>
        </div>
    )
}

export default DestinationItem
