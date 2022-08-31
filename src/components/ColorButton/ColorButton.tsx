import React from 'react'
import './ColorButton.scss'

type Props = {
    buttonText: string
}

const ColorButton = ({ buttonText }: Props) => {
    return <button className="color-btn">{buttonText}</button>
}

export default ColorButton
