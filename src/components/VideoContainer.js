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
        setPlaylistVideos([...data.items])
    }

    const fetchShorts = async () => {
        const response = await fetch(process.env.REACT_APP_SHORTS_URL)
        const data = await response.json()
        console.log('shorts data: ', data)
        setShorts([...data.items[0].shorts])
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
        <main className='mr-4 mt-[190px] ml-4' style={{marginLeft: showSideBar ? '230px' : '75px'}}>
            <section className='flex gap-x-2 flex-wrap items-center justify-around'>
                {
                    playlistVideos.slice(0, 8).map(item => {
                        // {console.log(item)}
                        return (
                            <div key={item.contentDetails.videoId} className='white w-1/5 rounded-md relative flex flex-col'>
                                <img className='rounded-md object-cover' src={item.snippet.thumbnails?.standard?.url || item.snippet.thumbnails?.maxres?.url} alt='thumbnail' />
                                <span className='text-white align-middle -mt-6 px-1 py-1 line-clamp-2 bg-gray-500'> {item.snippet.title} </span>
                                <span className='text-gray-300 px-1 bg-gray-500 '> {item.snippet.channelTitle} </span>
                                <span className=''></span>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default VideoContainer;