import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MicNoneIcon from '@mui/icons-material/MicNone'
import MicIcon from '@mui/icons-material/Mic'
import VideoIcon from '@mui/icons-material/VideoCall'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Person2Icon from '@mui/icons-material/Person2'

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(true)

    return (
        <header>
            <div class='flex p-4 px-4 pe-10 justify-between align-middle'>
                <div class='flex align-middle justify-center gap-4 relative'>
                    <MenuIcon class='h-9 p-1 fill-white hover:bg-slate-600 rounded-full cursor-pointer'  />
                    <YouTubeIcon class='h-9 cursor-pointer bg-black fill-white' />
                </div>
                <div class='middle w-[36rem] h-10 flex align-middle'>
                    <input class="border-[1px] border-[#d3d3d3] outline-none rounded-l-full p-4 h-10 w-[30rem] focus:border-[#065fd4] focus:outline-none" type="text" placeholder='Search'/>
                    <SearchIcon style={{color: 'white'}} class="border-[1px] rounded-r-full h-10 w-20 px-3 py-1.5 cursor-pointer fill-white"/>
                    <MicIcon class='cursor-pointer fill-white p-1 mt-1 h-8 ml-4 hover:bg-slate-600 rounded-full' />
                </div>
                <div class='flex gap-4 h-9'>
                    <VideoIcon class='p-1 rounded-full fill-white hover:bg-slate-600 cursor-pointer' />
                    <NotificationsNoneIcon class='p-1 rounded-full hover:bg-slate-600 cursor-pointer fill-white' />
                    <Person2Icon class='rounded-full hover:cursor-pointer fill-white' />
                </div>
            </div>
        </header>
    )
}

export default Header;