import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Loader  from "./Loader";
import VideoCard  from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || "row"} gap={2} justifyContent="center" flexWrap="wrap">
      {videos.map((item, i) => (
        <Box key={i}>
          {item.id.videoId && <VideoCard video={item}/> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;