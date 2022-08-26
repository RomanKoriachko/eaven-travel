import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import './App.scss'
import SimpleSlider from 'components/SimpleSlider/SimpleSlider'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <SimpleSlider />
            <Main />
            <Footer />
        </>
    )
}

export default App
