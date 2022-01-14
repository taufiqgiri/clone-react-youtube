import React from "react";
import { Box, Divider } from "@mui/material";
import { SideMenu, SubscriptionBar, OthersFromYoutube, Footer } from "../..";
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: '18%', 
    height: '100%', 
    overflow: 'hidden',
    '&:hover': {
      overflowY: 'auto',
      scrollbarWidth: 'thin'
    }
  }
})

export default function SideBar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <SideMenu icon={<HomeIcon />} title={'Beranda'} />
      <SideMenu icon={<ExploreOutlinedIcon />} title={'Eksplorasi'} />
      <SideMenu icon={<SubscriptionsOutlinedIcon />} title={'Subscription'} />

      <Divider sx={{borderColor: 'hsla(0, 0%, 53.3%, 0.4)'}} />

      <SideMenu icon={<VideoLibraryOutlinedIcon />} title={'Koleksi'} />
      <SideMenu icon={<HistoryOutlinedIcon />} title={'Histori'} />
      <SideMenu icon={<OndemandVideoOutlinedIcon />} title={'Video Anda'} />
      <SideMenu icon={<WatchLaterOutlinedIcon />} title={'Lihat Nanti'} />
      <SideMenu icon={<ThumbUpOutlinedIcon />} title={'Video yang disukai'} />
      <SideMenu icon={<PlaylistPlayOutlinedIcon />} title={'Daftar Putar'} />

      <Divider sx={{borderColor: 'hsla(0, 0%, 53.3%, 0.4)'}} />

      <SubscriptionBar />

      <Divider sx={{borderColor: 'hsla(0, 0%, 53.3%, 0.4)'}} />

      <OthersFromYoutube />

      <Divider sx={{borderColor: 'hsla(0, 0%, 53.3%, 0.4)'}} />

      <SideMenu icon={<SettingsOutlinedIcon />} title={'Setelan'} />
      <SideMenu icon={<FlagOutlinedIcon />} title={'Histori laporan'} />
      <SideMenu icon={<HelpOutlineOutlinedIcon />} title={'Bantuan'} />
      <SideMenu icon={<FeedbackOutlinedIcon />} title={'Kirim masukan'} />

      <Divider sx={{borderColor: 'hsla(0, 0%, 53.3%, 0.4)'}} />

      <Footer />
    </Box>
  )
}