import React, { useContext, useEffect, useState } from 'react'
import { valuesContext } from '../context'
import { useLocation, useNavigate } from 'react-router-dom'

const WatchVideo = () => {

    let location = useLocation()
    const videoId = location.pathname.split('=')[1]
    const navigate = useNavigate()
    const [showSideBar, setShowSideBar] = useContext(valuesContext)
    const [videoCategory, setVideoCategory] = useState('')
    const [movieDetails, setMovieDetails] = useState()
    const [similarMovies, setSimilarMovies] = useState()
    
    useEffect(() => {
        setShowSideBar(false)
        getVideoDetails()
    }, [])

    useEffect(() => {
        videoCategory && getSimilarMovies()
    }, [videoCategory])

    const getVideoDetails = async () => {
        const response = await fetch(process.env.REACT_APP_VIDEO_FETCH_API + `,${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
        const data = await response.json()
        console.log(data)
        if (data?.error) {
            alert('Problem with api data fetching: ', data?.error.errors[0].message)
            navigate('/')
        }
        setMovieDetails(data?.items[0])
        setVideoCategory(data?.items[0]?.snippet?.categoryId)
    }

    const getSimilarMovies = async () => {
        const response = await fetch(process.env.REACT_APP_SIMILAR_DATA_API + `${videoCategory}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=20`)
        const data = await response.json()
        console.log('similar movies: ', data)
    }

    return(
        <main className='bg-red-200 w-full h-full -mt-16 relative' style={{marginLeft: showSideBar ? '290px' : '55px'}}>
            <section className='flex'>
                <iframe class='w-4/5' height="811" src="https://www.youtube.com/embed/5i0Z0E5yaYI" title="Work Music For Concentration and Focus — Noir Chillstep Playlist" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <aside className='text-white w-1/5 bg-black'>
                    <span className='text-white'> Hi there </span>
                </aside>
            </section>
            <section>
            
            </section>
        </main>
    )
}

export default WatchVideo