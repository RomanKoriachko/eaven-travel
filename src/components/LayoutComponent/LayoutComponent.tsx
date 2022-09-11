import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const LayoutComponent = (props: Props) => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutComponent
