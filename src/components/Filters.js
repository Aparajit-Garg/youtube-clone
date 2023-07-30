import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Filters = ({ showSideBar, selectedFilter, setSelectedFilter }) => {

    // const [selectedFilter, setSelectedFilter] = useState('All')
    const tags = ['All', 'Akshay Saini', 'Mixes', 'Dramedy', 'Bollywood Music', 'CSS', 'React', 'Computer programming',
                  'Body building', 'Live', 'Chandler Bing', 'Podcasts', 'Laptops', 'Game shows', 'Gadgets', 'INDIA',
                'Tourist destinations', 'Bombay Silk Store', 'Bajrangbali']
    
    useEffect(() => {}, [selectedFilter])
    
    return (
        <div className='fixed top-[80px] pl-4 bg-black overflow-x-scroll scroll flex flex-nowrap gap-4 items-center h-16 whitespace-nowrap scroll-smooth no-scrollbar'
            style={{marginLeft: showSideBar ? '240px' : '70px', width: '100vw'}}
        >
            {
                tags.map((item, index) => {
                    return (
                        <span key={index} className='bg-slate-50 px-4 py-2 rounded-md cursor-pointer flex' onClick={() => setSelectedFilter(item)}
                            style={{
                                backgroundColor: selectedFilter === item ? 'rgba(255, 255, 255, 0.5)': 'rgb(248, 250, 252)',
                                color: selectedFilter === item ? '#fff' : '#000'}}>
                            {item}
                        </span>
                    )
                })
            }
        </div>
    )
    
    // return (
    //     <div class='w-full mx-8 overflow-x-scroll scroll no-scrollbar h-10'>
    //         <div class='flex gap-4 items-center flex-nowrap h-16 whitespace-nowrap'>
    //             <span class='bg-white/[0.5] text-white px-4 py-2 rounded-md cursor-pointer flex'>
    //                 All
    //             </span>
    //             <span class='bg-slate-50 text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Akshay Saini
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 w-fit rounded-md cursor-pointer flex'>
    //                 Mixes
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Dramedy
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Bollywood Music
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 CSS
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Computer programming
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Body-Building
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Live
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Chandler Bing
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Game Shows
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Laptops
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Podcasts
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Gadgets
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 React tutorials
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Tourist Destinations
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 INDIA
    //             </span>
    //             <span class='bg-white text-black px-4 py-2 rounded-md cursor-pointer flex'>
    //                 Bombay Silk Store
    //             </span>
    //         </div>
    //     </div>
    // )
}

export default Filters;