import React, { useState } from 'react'
import MenuIcon from '../../../public/assets/hamburger.png'
import YoutubeIcon from '../../../public/assets/youtube-logo.png'
import SearchIcon from '../../../public/assets/search-icon-2.png'
import MicIcon from '../../../public/assets/mic.png'

const Header = () => {

    return (
        <header>
            <div class='flex p-4 justify-between'>
                <div class='flex align-middle justify-center gap-4 relative'>
                    <img class='h-8 p-2 hover:bg-[#d3d3d3] rounded-full cursor-pointer' src={MenuIcon} alt='Menu icon' />
                    <img class='h-8 cursor-pointer' src={YoutubeIcon} alt='Youtube icon' />
                </div>
                <div class='middle w-[36rem] h-8 flex align-middle'>
                    <span><input class='border-2 rounded-l-full p-4 h-8 w-[30rem]' type="text" placeholder='Search'/></span>
                    <span><img class='border-2 rounded-r-full h-9 w-20 cursor-pointer' src={SearchIcon} alt='search icon' /></span>
                    <span><img class='cursor-pointer p-2 mt-1 h-8 ml-4 hover:bg-[#d3d3d3] rounded-full' src={MicIcon} alt='mic icon' /></span>
                </div>
                <div>
                    This also
                </div>
            </div>
        </header>
    )
}

export default Header;