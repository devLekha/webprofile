import {useState} from 'react'
import {Box} from '@mui/material'
import Sidebar from '../Sidebar'
import About from '../../Pages/About'
import Education from '../../Pages/Education'
import Experience from '../../Pages/Experience'
import Contact from '../../Pages/Contact'
const Profile = ()=>{
  const [num, setNum]= useState(0)
  const changeNum = (newnum)=>{
    setNum(newnum)
  }
  console.log("value of num", num)
const myTab = ()=>{
  if(num === 0)
  return   <About/>
  else if(num === 1)
  return <Education/>
  else if(num === 2)
  return <Experience/>
  else if(num === 3)
  return <Contact/>
  else
  return <About/>
}
return(
  <Box style={{display:'flex', marginLeft:200}}>
    <Sidebar changeNum={changeNum}/>
    <Box style={{height:500, border:'1px solid blue', width:1000}}>
     <Box  component="img"
        sx={{
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        style={{float:'left', margin:20}}
        alt="The house from the offer."
        src="./157.jpg"
      />  
      {myTab()}
    
    </Box>
    </Box>
)
}

export default Profile;