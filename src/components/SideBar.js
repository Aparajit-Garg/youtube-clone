import React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheatersIcon from '@mui/icons-material/Theaters';
import StreamIcon from '@mui/icons-material/Stream';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AlbumIcon from '@mui/icons-material/Album';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CopyrightIcon from '@mui/icons-material/Copyright';

const SideBar = ({ showSideBar }) => {

    // if (!showSideBar)
    //     return <></>

    if (showSideBar) {

        return (
            <div className= 'h-full fixed left-0 top-20 bg-black flex flex-col justify-start \
                         gap-2 px-2 overflow-y-scroll scroll scroll-smooth'
                         style={{ width: showSideBar ? '240px' : '70px', transition: '0.2s'}}>
                <span className='px-4 mt-2 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <HomeIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Home </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <SlowMotionVideoIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Shorts </span>
                </span>
                <span className='px-4 flex gap-4 items-center h-9 py-2 cursor-pointer hover:bg-black/[0.1]'>
                    <SubscriptionsIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Subscriptions </span>
                </span>
                <span className='py-1 border-b-2'></span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <VideoLibraryIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Library </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <HistoryIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> History </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <SlideshowIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Your Videos </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <WatchLaterIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Watch Later </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <DownloadForOfflineIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Downloads </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <ThumbUpIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Liked Videos </span>
                </span>
                <span className='px-2 flex gap-1 h-9 pt-2 border-t-2 justify-start text-white'>
                    Subscriptions
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <PersonOutlineIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Akshay Saini</span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <PersonOutlineIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Tejas Kumar </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <PersonOutlineIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Web dev simplified</span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <PersonOutlineIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> GreatStack </span>
                </span>
                <span className='px-2 pt-2 border-t-2 gap-1 h-9 flex text-white'>
                    Explore
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <WhatshotIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Trending </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <AddShoppingCartIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Shopping </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <MusicNoteIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Music </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <TheatersIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Films </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <StreamIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Live </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <SportsEsportsIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Gaming </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <NewspaperIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> News </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <EmojiEventsIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Sport </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <LocalLibraryIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Learning </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <CheckroomIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> Fashion & Beauty </span>
                </span>
                <span className='px-2 flex gap-4 py-2 items-center h-9 pt-2 border-t-2 text-white'>
                    More from YouTube
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <YouTubeIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> YouTube Premium </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <LibraryMusicIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> YouTube Music </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <AlbumIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> YouTube Studio </span>
                </span>
                <span className='px-4 flex gap-4 py-2 items-center h-9 cursor-pointer hover:bg-black/[0.1]'>
                    <ChildCareIcon class='h-6 fill-white' />
                    <span className='p-0.5 text-white'> YouTube Kids </span>
                </span>
                <span className='px-2 flex gap-4 py-2 items-center h-9'>
                    <CopyrightIcon class='h-6 fill-white' />
                    <span className='font-light text-sm text-white'> 2023 Aparajit Garg </span>
                </span>
            </div>
        )
    }
    else {
        return (
            <aside className='h-full bg-black flex flex-col justify-start \
            gap-6 px-2 mt-[80px] pt-4 overflow-y-scroll scroll scroll-smooth no-scrollbar hover:overflow-y-scroll'
            style={{ width: showSideBar ? '240px' : '70px', transition: '0.2s'}}>
                <HomeIcon class='h-10 hover cursor-pointer hover:bg-white/[0.2] p-2 fill-white' />
                <SlowMotionVideoIcon class='h-10 cursor-pointer hover:bg-white/[0.2] p-2 fill-white' />
                <SubscriptionsIcon class='h-10 cursor-pointer hover:bg-white/[0.2] p-2 fill-white' />
                <VideoLibraryIcon class='h-10 cursor-pointer hover:bg-white/[0.2] p-2 fill-white' />
                <DownloadForOfflineIcon class='h-10 cursor-pointer hover:bg-white/[0.2] p-2 fill-white' />
            </aside>
        )
    }

}

export default SideBar