import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import './App.scss'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import DestinationsPage from 'pages/DestinationsPage/DestinationsPage'
import GuidesPage from 'pages/GuidesPage/GuidesPage'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/guides" element={<GuidesPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
