// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Box } from '@mui/material'
import Heading from './components/Heading'
import Profile from './components/Profile'
import Footer from './components/Footer'
// import About from './Pages/About'
// import Education from './Pages/Education'
// import Experience from './Pages/Experience'
// import Contact from './Pages/Contact'

import './App.css';

function App() {
  return (
    <div className="App">
      <Heading />
      <Profile />
      <Box style={{ marginTop: 142 }}>
      <Footer />
      </Box>
    </div>
  );
}

export default App;
