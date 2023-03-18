// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Box } from '@mui/material'
import Heading from './components/Heading'
import Profile from './components/Profile'
import Footer from './components/Footer'
// import About from './Pages/About'
// import Education from './Pages/Education'
// import Experience from './Pages/Experience'
// import Contact from './Pages/Contact'

import './App.css';
import Mobile from './components/Profile/mobile'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })
  return (
    <div className="App">
      <Heading />
      {isDesktopOrLaptop?<Profile />:<Mobile/>}
      <Box style={{ display: 'flex', flexDirection:'column', height: '100vh' }}>
      <Footer />
      </Box>
    </div>
  );
}

export default App;
