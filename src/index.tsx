import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/App/App'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </BrowserRouter>
)
