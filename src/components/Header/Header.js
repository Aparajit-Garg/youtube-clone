import React, { useState } from 'react'
import MenuIcon from '../../../public/assets/hamburger.png'
import YoutubeIcon from '../../../public/assets/youtube-logo.png'
import SearchIcon from '../../../public/assets/search-icon-2.png'
import MicIcon from '../../../public/assets/mic.png'
import cameraIcon from '../../../public/assets/video-camera.png'
import notificationsIcon from '../../../public/assets/bell.png'
import profileIcon from '../../../public/assets/profile.png'

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(true)

    return (
        <header>
            <div class='flex p-4 px-4 pe-10 justify-between align-middle'>
                <div class='flex align-middle justify-center gap-4 relative'>
                    <img class='h-9 p-1 hover:bg-slate-600 rounded-full cursor-pointer' src={MenuIcon} alt='Menu icon' />
                    <img class='h-9 cursor-pointer' src={YoutubeIcon} alt='Youtube icon' />
                </div>
                <div class='middle w-[36rem] h-10 flex align-middle'>
                    <span><input class="border-[1px] border-[#d3d3d3] rounded-l-full p-4 h-10 w-[30rem] focus:border-[#065fd4] focus:outline-none" type="text" placeholder='Search'/></span>
                    {/* <span><input class="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:outline-none" type='text' /></span> */}
                    <span><img class='border-[1px] rounded-r-full h-10 w-20 px-3 py-1.5 cursor-pointer' src={SearchIcon} alt='search icon' /></span>
                    <span><img class='cursor-pointer p-1 mt-1 h-8 ml-4 hover:bg-slate-600 rounded-full' src={MicIcon} alt='mic icon' /></span>
                </div>
                <div class='flex gap-4 h-9'>
                    <img class='p-1 rounded-full hover:bg-slate-600 cursor-pointer' src={cameraIcon} alt='camera icon' />
                    <img class='p-1 rounded-full hover:bg-slate-600 cursor-pointer' src={notificationsIcon} alt='notifications icon' />
                    <img class='rounded-full hover:cursor-pointer' src={profileIcon} alt='profile icon' />
                </div>
            </div>
        </header>
    )
}

export default Header;