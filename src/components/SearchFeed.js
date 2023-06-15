import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mt={3} mb={3} sx={{display:'flex', justifyContent:'center'}}>
        Search Results for <span style={{margin:'0px 6px',color: "#FC1503"}}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        {<Videos videos={videos}/>}
      </Box>
    </Box>
  );
};

export default SearchFeed;