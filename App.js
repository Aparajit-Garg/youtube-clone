import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './src/components/Header/Header'
import SideBar from './src/components/SideBar/SideBar'
import Body from './src/components/Body/Body'

const App = () => {

    return (
        <div class='bg-black'>
            <Header />
            <div class='flex'>
                <SideBar />
                <Body />

            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)