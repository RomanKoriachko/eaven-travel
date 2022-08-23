import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import './App.scss'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
        </>
    )
}

export default App