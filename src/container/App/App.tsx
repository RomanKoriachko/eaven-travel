import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import './App.scss'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import DestinationsPage from 'pages/DestinationsPage/DestinationsPage'
import GuidesPage from 'pages/GuidesPage/GuidesPage'
import AustraliaPage from 'pages/CountrysPages/AustraliaPage'
import FrancePage from 'pages/CountrysPages/FrancePage'
import ItalyPage from 'pages/CountrysPages/ItalyPage'
import JapanPage from 'pages/CountrysPages/JapanPage'
import SingaporePage from 'pages/CountrysPages/SingaporePage'

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
                <Route path="/australia" element={<AustraliaPage />} />
                <Route path="/france" element={<FrancePage />} />
                <Route path="/italy" element={<ItalyPage />} />
                <Route path="/japan" element={<JapanPage />} />
                <Route path="/singapore" element={<SingaporePage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
