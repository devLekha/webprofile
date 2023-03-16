// import {Link} from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Box} from '@mui/material'
const Contact = ()=>{
    return(<Box style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItem:'center'}}>
        <h1>Contact</h1>
       <Box><SmartphoneIcon/>91+ 9424624464</Box> 
        <Box><EmailIcon/>lekhasaraf09@gmail.com</Box>
        <a href="https://www.linkedin.com/in/lekha-saraf-524907187" target="_blank" rel="noreferrer">
        <LinkedInIcon/>
        </a>
        <h3>Work Refrence</h3>
        <a href="https://stackoverflow.com/users/10380319/crypto-s?tab=profile" target="_blank" rel="noreferrer">stackoverflow</a>
        <a href="https://github.com/devLekha" target="_blank" rel="noreferrer">
        <GitHubIcon/>
        </a>
        </Box>
    )
}
export default Contact;