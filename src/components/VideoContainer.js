import React, { useEffect, useState } from 'react'

const VideoContainer = ({ selectedFilter, showSideBar }) => {

    const [playlistVideos, setPlaylistVideos] = useState([])
    const [shorts, setShorts] = useState([])

    useEffect(() => {
        // Depending on the filter clicked, api calls can be made here
    }, [selectedFilter])

    const fetchPlaylistVideos = async () => {
        const response = await fetch(process.env.REACT_APP_PLAYLIST_SEARCH_URL + process.env.REACT_APP_YOUTUBE_API_KEY)
        const data = await response.json()
        console.log('playlist data: ', data)
        // setPlaylistVideos([...data.items])
    }

    const fetchShorts = async () => {
        const response = await fetch(process.env.REACT_APP_SHORTS_URL)
        const data = await response.json()
        console.log('shorts data: ', data)
        // setShorts([...data.items[0].shorts])
    }

    useEffect(() => {
        fetchPlaylistVideos()
        fetchShorts()
    }, [])

    if (playlistVideos.length === 0 || shorts.length === 0) {
        console.log('hi there')
        return (
            <div className='mt-[200px] bg-black' style={{marginLeft: showSideBar ? '260px' : '80px'}}>
                <div class="flex p-4 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-bounce">Loading...</div>
            </div>
        );
    }

    return (
        <>
        </>
    )
}

export default VideoContainer;