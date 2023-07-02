import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './src/components/Header/Header'

const App = () => {

    return (
        <div>
            <Header />
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)