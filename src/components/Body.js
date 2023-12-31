import React, { useContext, useState } from 'react'
import Filters from './Filters'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VideoContainer from './VideoContainer';
import { valuesContext } from '../context';

const Body = () => {
    const [showSideBar, setShowSideBar] = useContext(valuesContext)
    const [selectedFilter, setSelectedFilter] = useState('All')

    return (
        // <div class='relative w-full overflow-x-scroll scroll no-scrollbar'>
        //     <div class='w-full mx-8 flex gap-4 overflow-x-scroll scroll no-scrollbar'>
        //         <Filters />
        //     </div>

        // </div>
        <div className='bg-black'>
            <Filters showSideBar={showSideBar} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            <VideoContainer selectedFilter={selectedFilter} />
        </div>
    )
}

export default Body