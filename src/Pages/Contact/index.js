// import {Link} from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import {Box} from '@mui/material'
const Contact = ()=>{
    return(<Box>
        <h1>Contact</h1>
        <LinkedInIcon/>
        <SmartphoneIcon/>
        <EmailIcon/>
        <h3>Work Refrence</h3>
        <GitHubIcon/>
        <a href="https://stackoverflow.com/users/10380319/crypto-s?tab=profile" target="_blank" rel="noreferrer">stackoverflow</a>
        </Box>
    )
}
export default Contact;