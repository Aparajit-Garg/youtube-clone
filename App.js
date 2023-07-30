import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './src/components/Header'
import SideBar from './src/components/SideBar'
// import Body from './src/components/Body'

const App = () => {
    const [showSideBar, setShowSideBar] = useState(true)

    console.log(showSideBar)

    return (
        <div className='bg-black'>
            <Header setShowSideBar={setShowSideBar}/>
            <div class='flex h-full'>
                <SideBar showSideBar={showSideBar}/>
                {/* <Body /> */}

            </div>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)