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

const SideBar = ({}) => {

    return (
        <div class='w-50 bg-white border-white border-solid flex flex-col justify-start gap-2 px-2'>
            <span class='p-4 mt-4 flex gap-1 items-center h-9 cursor-pointer'>
                <HomeIcon class='h-6' />
                <span class='p-0.5'> Home </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <SlowMotionVideoIcon class='h-6' />
                <span class='p-0.5'> Shorts </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 pb-2 border-b-2 cursor-pointer'>
                <SubscriptionsIcon class='h-6' />
                <span class='p-0.5'> Subscriptions </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <VideoLibraryIcon class='h-6' />
                <span class='p-0.5'> Library </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <HistoryIcon class='h-6' />
                <span class='p-0.5'> History </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <SlideshowIcon class='h-6' />
                <span class='p-0.5'> Your Videos </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <WatchLaterIcon class='h-6' />
                <span class='p-0.5'> Watch Later </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <DownloadForOfflineIcon class='h-6' />
                <span class='p-0.5'> Downloads </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <ThumbUpIcon class='h-6' />
                <span class='p-0.5'> Liked Videos </span>
            </span>
            <span class='px-2 flex gap-1 h-9 pt-2 border-t-2 justify-start'>
                Subscriptions
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <PersonOutlineIcon class='h-6' />
                <span> Akshay Saini</span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <PersonOutlineIcon class='h-6' />
                <span> Tejas Kumar </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <PersonOutlineIcon class='h-6' />
                <span> Web dev simplified</span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <PersonOutlineIcon class='h-6' />
                <span> GreatStack </span>
            </span>
            <span class='px-2 pt-2 border-t-2 gap-1 h-9 flex cursor-pointer'>
                Explore
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <WhatshotIcon class='h-6' />
                <span> Trending </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <AddShoppingCartIcon class='h-6' />
                <span> Shopping </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <MusicNoteIcon class='h-6' />
                <span> Music </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <TheatersIcon class='h-6' />
                <span> Films </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <StreamIcon class='h-6' />
                <span> Live </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <SportsEsportsIcon class='h-6' />
                <span> Gaming </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <NewspaperIcon class='h-6' />
                <span> News </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <EmojiEventsIcon class='h-6' />
                <span> Sport </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <LocalLibraryIcon class='h-6' />
                <span> Learning </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <CheckroomIcon class='h-6' />
                <span> Fashion & Beauty </span>
            </span>
            <span class='px-2 flex gap-1 items-center h-9 pt-2 border-t-2'>
                More from YouTube
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <YouTubeIcon class='h-6' />
                <span> YouTube Premium </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <LibraryMusicIcon class='h-6' />
                <span> YouTube Music </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <AlbumIcon class='h-6' />
                <span> YouTube Studio </span>
            </span>
            <span class='px-4 flex gap-1 items-center h-9 cursor-pointer'>
                <ChildCareIcon class='h-6' />
                <span> YouTube Kids </span>
            </span>
            <span class='px-2 flex gap-1 items-center h-9'>
                <CopyrightIcon class='h-6' />
                <span class='font-light text-sm'> 2023 Aparajit Garg </span>
            </span>
        </div>
    )
}

export default SideBar