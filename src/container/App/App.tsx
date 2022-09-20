import CssBaseline from '@mui/material/CssBaseline'
import './App.scss'
import Main from 'container/Main/Main'
import { Routes, Route } from 'react-router-dom'
import DestinationsPage from 'pages/DestinationsPage/DestinationsPage'
import GuidesPage from 'pages/GuidesPage/GuidesPage'
import AustraliaPage from 'pages/CountrysPages/AustraliaPage'
import FrancePage from 'pages/CountrysPages/FrancePage'
import ItalyPage from 'pages/CountrysPages/ItalyPage'
import JapanPage from 'pages/CountrysPages/JapanPage'
import SingaporePage from 'pages/CountrysPages/SingaporePage'
import LayoutComponent from 'components/LayoutComponent/LayoutComponent'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
import { useState } from 'react'
import LikedArticles from 'pages/LikedArticles/LikedArticles'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<LayoutComponent />}>
                    <Route index element={<Main />} />
                    <Route path="destinations" element={<DestinationsPage />} />
                    <Route
                        path="destinations/:articleId"
                        element={<ArticlePage />}
                    />
                    <Route path="guides" element={<GuidesPage />} />
                    <Route path="liked" element={<LikedArticles />} />
                    <Route path="australia" element={<AustraliaPage />} />
                    <Route path="france" element={<FrancePage />} />
                    <Route path="italy" element={<ItalyPage />} />
                    <Route path="japan" element={<JapanPage />} />
                    <Route path="singapore" element={<SingaporePage />} />
                    <Route path="*" element={<Main />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
