// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
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
 <Heading/>
 <Profile/>
 <Box style={{border:'1px solid red', marginTop:140}}>
 {/* <Router>
      <Routes>
  <Route exact path='/' element={<About/>}/>
  <Route exact path='/edu' element={<Education/>}/>
  <Route exact path='/exp' element={<Experience/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  </Routes>
    </Router> */}
  <Footer/>
 </Box>
 
    </div>
  );
}

export default App;
