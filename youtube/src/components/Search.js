import React,{ useState } from 'react';
import { Grid, Paper,TextField } from "@material-ui/core";
import axios from 'axios';
import youtube from '../api/youtube';

export default function Search({getVideoList}){

    const searchTerm=useTextInput('',getVideoList);
   

    return(
       <Paper elevation={6} style={{ padding: "25px" }}>
          <TextField 
            fullWidth
            label="Search..."
            {...searchTerm}
            />
       </Paper>
    )

}

function useTextInput(initialValue,getVideoList){

   const  [value,setValue]=useState(initialValue)
 //  const  [videos,setVideos]=useState('')

    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    const getList=(videos)=>{
        getVideoList(videos)
    }

    const onKeyPress=async()=>{
        const { data: { items: videos } } = await axios.get("https://www.googleapis.com/youtube/v3/search",  
        {
            params: {
                part: "snippet",
                maxResults: 5,
                key: 'AIzaSyCOU8IDYbLwjEFWV8NiEwb8_bNYhOmE-Bg',
                q: value,
              }
            });
      
       //     setVideos(videos)

            getList(videos)
        }
    

    return {
        value,
     
        onChange:handleChange,
        onKeyPress:onKeyPress
    }

}