import React from "react";
import { MainLayout } from "../../layout";
import { Box, Divider } from "@mui/material";
import { CategorySlider } from "../../components";
import { recommendVideos } from '../../sample-data/video-data';
import { VideoCard } from "../../components";

export default function HomePage() {
  return (
    <MainLayout>
      <Divider sx={{borderColor: '#373737', width: '100%', margin: '5px 0'}} />
      <Box sx={{width: '100%', backgroundColor: 'transparent'}}>
        <CategorySlider />
      </Box>
      <Divider sx={{borderColor: '#373737', width: '100%', margin: '5px 0'}} />
      <Box 
        className={`flex flex-wrap justify-content-center align-item-center`} 
        sx={{maxHeight: '85%', overflowY: 'auto', scrollbarWidth: 'thin'}}
      >
        {recommendVideos.map((video, index) => {
          return <VideoCard key={index} video={video} />
        })}
      </Box>
    </MainLayout>
  )
}