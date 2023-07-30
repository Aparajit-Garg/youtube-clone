import React from 'react'
import Filters from './Filters'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VideoContainer from './VideoContainer';

const Body = () => {

    return (
        // <div class='relative w-full overflow-x-scroll scroll no-scrollbar'>
        //     <div class='w-full mx-8 flex gap-4 overflow-x-scroll scroll no-scrollbar'>
        //         <Filters />
        //     </div>

        // </div>
        <div class='w-full'>
            <Filters />
            {/* <VideoContainer /> */}
        </div>
    )
}

export default Body