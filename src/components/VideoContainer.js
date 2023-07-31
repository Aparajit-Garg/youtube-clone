import React, { useContext, useEffect, useState } from 'react'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Link } from 'react-router-dom';
import { valuesContext } from '../context';
import ReactPlayer from 'react-player/youtube';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const VideoContainer = ({ selectedFilter }) => {
    const [showSideBar] = useContext(valuesContext)

    const [playlistVideos, setPlaylistVideos] = useState([])
    const [shorts, setShorts] = useState([])
    const [tejasVideos, setTejasVideos] = useState([])

    useEffect(() => {
        // Depending on the filter clicked, api calls can be made here
    }, [selectedFilter])

    const fetchPlaylistVideos = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_PLAYLIST_AKSHAY + process.env.REACT_APP_YOUTUBE_API_KEY)
            const data = await response.json()
            console.log('playlist data: ', data)
            if (data?.error) {
                alert('Youtube api issue please try after sometime')
            }
            else {
                setPlaylistVideos([...data?.items])
            }
        } catch(error) {
            alert('Error: ', error.message)
        }
    }

    const fetchShorts = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_SHORTS_URL)
            const data = await response.json()
            console.log('shorts data: ', data.items[0].shorts)
            if (data?.error) {
                alert('Youtube api issue please try after sometime')
            }
            else {
                setShorts([...data?.items[0]?.shorts])
            }
        } catch(error) {
            alert('Error: ', error.message)
        }
    }

    const fetchTejasVideos = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_PLAYLIST_TEJAS)
            const data = await response.json()
            console.log('tejas videos: ', data)
            if (data?.error) {
                alert('Youtube api issue please try after sometime')
            }
            else {
                setTejasVideos([...data?.items])
            }
        } catch(error) {
            alert('Error: ', error.message)
        }
    }

    useEffect(() => {
        fetchPlaylistVideos()
        fetchShorts()
        fetchTejasVideos()
    }, [])

    if (playlistVideos.length === 0 || shorts.length === 0) {
        console.log('hi there')
        return (
            <div className='mt-[200px] w-full h-[100vh] bg-black' style={{marginLeft: showSideBar ? '290px' : '75px'}}>
                <div class="flex p-4 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-bounce">Loading...</div>
            </div>
        );
    }

    return (
        <main className='mr-4 mt-[160px] ml-4 relative' style={{marginLeft: showSideBar ? '280px' : '45px'}}>
            <section className='flex gap-x-4 ml-10 flex-wrap items-center justify-normal'>
                {
                    playlistVideos.slice(0, 8).map(item => {
                        // {console.log(item)}
                        return (
                            <div key={item.contentDetails.videoId} className='relative flex flex-col'
                            style={{width: showSideBar ? '350px' : '330px'}}
                            >
                                <Link to={`/watch/v=${item?.contentDetails?.videoId}`}>
                                    {/* <iframe class='rounded-full w-[330px] bg-white p-0.5  cursor-pointer hover:rounded-none transition-all 0.5s' src={`https://www.youtube.com/watch?v=${item.contentDetails?.videoId}`} /> */}
                                    {/* <ReactPlayer class='rounded-xl w-[33px] bg-white p-0.5  cursor-pointer hover:rounded-none transition-all 0.5s' url={`https://www.youtube.com/watch?v=${item.contentDetails?.videoId}`} /> */}
                                    <img class='rounded-xl w-[330px] bg-white p-0.5  cursor-pointer hover:rounded-none transition-all 0.5s' src={item.snippet.thumbnails?.standard?.url || item.snippet.thumbnails?.maxres?.url} alt='thumbnail' />
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

            <section className='flex mb-6 mt-4 ml-10 gap-y-4 gap-x-8 flex-wrap items-center justify-around'>
                {
                    shorts.slice(0, 6).map(item => {
                        return (
                            <div key={item.videoId} className='flex w-[14%] flex-col justify-center flex-wrap relative'>
                                <img className='rounded-md h-1/5 w-full cursor-pointer' src={item.thumbnails[0].url} alt='shorts pic' />
                                <span className='text-white align-middle max-w-max px-1 py-1 line-clamp-2'> {item.title} </span>
                                <span className='text-gray-300 px-1 align-middle'> {item.viewCount} views </span>
                            </div>
                        )
                    })
                }
            </section>

            <section className='flex gap-x-4 ml-10 flex-wrap items-center justify-normal'>
                {
                    tejasVideos.slice(0, 20).map(item => {
                        // {console.log(item)}
                        return (
                            <div key={item?.id?.videoId} className='relative flex flex-col'
                            style={{width: showSideBar ? '350px' : '330px'}}
                            >
                                <Link to={`/watch/v=${item?.id?.videoId}`}>
                                    {/* <iframe class='rounded-full w-[330px] bg-white p-0.5  cursor-pointer hover:rounded-none transition-all 0.5s' src={`https://www.youtube.com/watch?v=${item.contentDetails?.videoId}`} /> */}
                                    {/* <ReactPlayer class='rounded-xl w-[33px] bg-white p-0.5  cursor-pointer hover:rounded-none transition-all 0.5s' url={`https://www.youtube.com/watch?v=${item.contentDetails?.videoId}`} /> */}
                                    <img class='rounded-xl bg-white p-0.5 object-cover w-full cursor-pointer hover:rounded-none transition-all 0.5s' src={item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.maxres?.url} alt='thumbnail' />
                                </Link>
                                <span className='text-white align-middle max-w-max  px-1 py-2 line-clamp-2'> {item?.snippet?.title} </span>
                                <span className='text-gray-300 px-1 mb-6'> {item?.snippet?.channelTitle} </span>
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