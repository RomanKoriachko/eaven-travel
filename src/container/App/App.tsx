import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import './App.scss'
import SimpleSlider from 'components/SimpleSlider/SimpleSlider'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <SimpleSlider />
        </>
    )
}

export default App
