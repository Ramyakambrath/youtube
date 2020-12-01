import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from "@material-ui/core";
import Search from './components/Search';
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'


function App() {

  const [videos,setVideos]=useState([])
  const [selectedVideo,setselectedVideo]=useState('')

  const getVideoList=(value)=>{
    setVideos(value);
    setselectedVideo(value[0])
   // console.log('videos',videos)
  }

 
  return (
 
    
      
      <Grid style={{ justifyContent: "center" }}
        container
        spacing={10}>
        <Grid item xs={11}>
        <Grid container spacing={10}>
        <Grid item xs={12}><Search getVideoList={getVideoList}/></Grid>     
        <Grid item xs={8}><VideoDetail video={selectedVideo}/></Grid>
        <Grid item xs={4}><VideoList videos={videos} onVideoSelect={setselectedVideo}/></Grid>
        </Grid>
        </Grid>
        
      </Grid>


 
    
  );
}

export default App;
