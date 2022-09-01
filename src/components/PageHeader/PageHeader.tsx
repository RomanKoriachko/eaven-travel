import React from 'react'
import './PageHeader.scss'

type Props = {
    header: string
}

const PageHeader = ({ header }: Props) => {
    return (
        <div className="page-header">
            <p>{header}</p>
        </div>
    )
}

export default PageHeader
