import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './src/components/Header'
import SideBar from './src/components/SideBar'
import Body from './src/components/Body'
import YoutubeContext from './src/context'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import WatchVideo from './src/components/WatchVideo'

const App = () => {
    const [showSideBar, setShowSideBar] = useState(true)

    console.log(showSideBar)

    return (
        <YoutubeContext>
            <div className='bg-black w-full h-full'>
                <Header/>
                <div class='flex h-full'>
                    <SideBar/>
                    {/* <Body showSideBar={showSideBar}/> */}
                    <Outlet />
                </div>
            </div>
        </YoutubeContext>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/watch/:id',
                element: <WatchVideo />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter} />)