import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Filters = () => {

    const [selectedFilter, setSelectedFilter] = useState('')

    return (
        <div class='w-full mx-8 overflow-x-scroll scroll no-scrollbar h-10'>
            <div class='flex gap-4 items-center flex-nowrap h-16 whitespace-nowrap'>
                <span class='bg-white/[0.5] text-white px-4 py-2 rounded-md cursor-pointer flex'>
                    All
                </span>
                <span class='bg-slate-50 text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Akshay Saini
                </span>
                <span class='bg-white text-black px-4 py-2 w-fit rounded-md cursor-pointer flex'>
                    Mixes
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Dramedy
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Bollywood Music
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    CSS
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Computer programming
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Body-Building
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Live
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Chandler Bing
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Game Shows
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Laptops
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Podcasts
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Gadgets
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    React tutorials
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Tourist Destinations
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    INDIA
                </span>
                <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
                    Bombay Silk Store
                </span>
            </div>
        </div>
    )
}

export default Filters;