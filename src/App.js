import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'
import Feed from './components/Feed'
function App() {
  return (
   <>
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar/>
        <Routes>
          <Route exact path='/' element = {<Feed/>}/>
          <Route exact path='/video/:id' element = {<VideoDetail/>}/>
          <Route exact path='/channel/:id' element = {<ChannelDetail/>}/>
          <Route exact path='/search/:searchTerm' element = {<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
   </>
  );
}

export default App;
