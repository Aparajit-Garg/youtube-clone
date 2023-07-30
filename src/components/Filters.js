import React, { useState } from 'react'

const Filters = () => {

    const [selectedFilter, setSelectedFilter] = useState('')

    return (
        <div class='w-full flex gap-4 items-center flex-nowrap h-10 overflow-x-scroll scroll no-scrollbar whitespace-nowrap scroll-smooth'>
            <span class='bg-white/[0.5] text-white px-4 py-2 rounded-md cursor-pointer'>
                All
            </span>
            <span class='bg-slate-50 text-black px-4 py-2 rounded-md cursor-pointer'>
                Akshay Saini
            </span>
            <span class='bg-white text-black px-4 py-2 w-fit rounded-md cursor-pointer'>
                Mixes
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Dramedy
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Bollywood Music
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                CSS
            </span>
            <span class='bg-white text-black w-auto px-4 py-2 rounded-md cursor-pointer flex flex-nowrap'>
                Computer programming
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Body-Building
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Live
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Chandler Bing
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Game Shows
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Laptops
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Podcasts
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Gadgets
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                React tutorials
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Tourist Destinations
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                INDIA
            </span>
            <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer'>
                Bombay Silk Store
            </span>
        </div>
    )
}

export default Filters;