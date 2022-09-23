import React from 'react'
import './ColorButton.scss'

type Props = {
    buttonText: string
    type?: 'submit'
}

const ColorButton = ({ buttonText, type }: Props) => {
    return (
        <button className="color-btn" type={type || 'button'}>
            {buttonText}
        </button>
    )
}

export default ColorButton
