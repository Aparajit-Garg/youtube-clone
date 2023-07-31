import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MicNoneIcon from '@mui/icons-material/MicNone'
import MicIcon from '@mui/icons-material/Mic'
import VideoIcon from '@mui/icons-material/VideoCall'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Person2Icon from '@mui/icons-material/Person2'
import { valuesContext } from '../context'

const Header = () => {
    const [showSideBar, setShowSideBar] = useContext(valuesContext)
    // return (
    //     <header>
    //         <div class='flex p-4 px-4 pe-10 justify-between align-middle fixed'>
    //             <div class='flex align-middle justify-center gap-4 relative'>
    //                 <MenuIcon class='h-9 p-1 fill-white hover:bg-slate-600 rounded-full cursor-pointer'  />
    //                 <YouTubeIcon class='h-9 cursor-pointer bg-black fill-white' />
    //             </div>
    //             <div class='middle w-[36rem] h-10 flex align-middle'>
    //                 <input class="border-[1px] border-[#d3d3d3] outline-none rounded-l-full p-4 h-10 w-[30rem] focus:border-[#065fd4] focus:outline-none" type="text" placeholder='Search'/>
    //                 <SearchIcon style={{color: 'white'}} class="border-[1px] rounded-r-full h-10 w-20 px-3 py-1.5 cursor-pointer fill-white"/>
    //                 <MicIcon class='cursor-pointer fill-white p-1 mt-1 h-8 ml-4 hover:bg-slate-600 rounded-full' />
    //             </div>
    //             <div class='flex gap-4 h-9'>
    //                 <VideoIcon class='p-1 rounded-full fill-white hover:bg-slate-600 cursor-pointer' />
    //                 <NotificationsNoneIcon class='p-1 rounded-full hover:bg-slate-600 cursor-pointer fill-white' />
    //                 <Person2Icon class='rounded-full hover:cursor-pointer fill-white' />
    //             </div>
    //         </div>
    //     </header>
    // )

    return (
        <header className='w-full fixed top-0 z-10 left-0 bg-black flex align-middle justify-between' style={{height: '80px'}}>
            <div className='flex gap-4 p-5 align-middle'>
                <MenuIcon onClick={() => setShowSideBar(prev => !prev)} class='fill-white p-1 hover:bg-slate-600 rounded-full cursor-pointer' />
                <YouTubeIcon class='cursor-pointer p-1 bg-black fill-white' />
            </div>
            <div className='middle w-[36rem] flex align-middle p-5'>
                <input className="border-2 border-white/[0.3] text-white rounded-l-full px-4 w-[30rem] bg-black focus:outline-none" type="text" placeholder='Search'/>
                <SearchIcon class="border-2 border-l-0 border-white/[0.3] p-1 rounded-r-full px-3 cursor-pointer fill-white"/>
                <MicIcon class='cursor-pointer fill-white p-1 ml-4 hover:bg-slate-600 rounded-full' />
            </div>
            <div className='flex gap-4 py-5 align-middle pr-4'>
                <VideoIcon class='rounded-full p-1 fill-white hover:bg-slate-600 cursor-pointer' />
                <NotificationsNoneIcon class='rounded-full p-1 hover:bg-slate-600 cursor-pointer fill-white' />
                <Person2Icon class='rounded-full hover:cursor-pointer p-1 fill-white' />
            </div>
        </header>
    )
}

export default Header;