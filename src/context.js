import { useState, createContext } from "react";
import React from 'react'

export const valuesContext = createContext()

const YoutubeContext = (props) => {
    const [showSideBar, setShowSideBar] = useState(true)

    return (
        <valuesContext.Provider value={[
            showSideBar,
            setShowSideBar
        ]}>
        {props.children}
        </valuesContext.Provider>
    )
}

export default YoutubeContext