import React,{useState} from 'react';
import VideoItem from '../components/VideoItem';
import { Grid } from "@material-ui/core";

const VideoList=({videos,onVideoSelect})=>{

   
    return(
    <Grid container spacing={10}>
        {videos.map(video=>
        <VideoItem video={video} key={video.id.videoId} onVideoSelect={onVideoSelect}/>)}
    </Grid>
    )
}

export default VideoList