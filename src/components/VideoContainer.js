import React, { useContext, useEffect, useState } from 'react'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Link } from 'react-router-dom';
import { valuesContext } from '../context';

const VideoContainer = ({ selectedFilter }) => {
    const [showSideBar] = useContext(valuesContext)

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
        console.log('shorts data: ', data.items[0].shorts)
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
        <main className='mr-4 mt-[160px] ml-4 relative' style={{marginLeft: showSideBar ? '230px' : '45px'}}>
            <section className='flex gap-x-4 ml-10 flex-wrap items-center justify-normal'>
                {
                    playlistVideos.slice(0, 8).map(item => {
                        // {console.log(item)}
                        return (
                            <div key={item.contentDetails.videoId} className='w-[330px] relative flex flex-col'>
                                <Link to={`/watch/v=${item?.contentDetails?.videoId}`}>
                                    <img className='rounded-xl bg-white p-0.5 object-cover cursor-pointer hover:rounded-none transition-all 0.5s' src={item.snippet.thumbnails?.standard?.url || item.snippet.thumbnails?.maxres?.url} alt='thumbnail' />
                                </Link>
                                <span className='text-white align-middle max-w-max  px-1 py-2 line-clamp-2'> {item.snippet.title} </span>
                                <span className='text-gray-300 px-1 mb-6'> {item.snippet.channelTitle} </span>
                                <span className=''></span>
                            </div>
                        )
                    })
                }
            </section>

            <div class='text-white py-4 border-t-2 ml-10 mt-8 flex items-center gap-x-2'>
                    <SlowMotionVideoIcon class='fill-white w-12' />
                    <span className='text-white text-xl'> Shorts </span>
            </div>

            <section className='flex mt-4 ml-10 gap-y-4 gap-x-8 flex-wrap items-center justify-around'>
                {
                    shorts.slice(0, 6).map(item => {
                        return (
                            <div key={item.videoId} className='flex w-[14%] flex-col justify-center flex-wrap relative'>
                                <img className='rounded-md h-1/5 w-full cursor-pointer' src={item.thumbnails[0].url} alt='shorts pic' />
                                <span className='text-white align-middle max-w-max px-1 py-1 line-clamp-2'> {item.title} </span>
                                <span className='text-gray-300 px-1'> {item.viewCount} views </span>
                            </div>
                        )
                    })
                }
            </section>

        </main>
    )
}

export default VideoContainer;