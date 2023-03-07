import * as React from "react";
// import{Link} from "react-router-dom"
import {Box, Button} from '@mui/material'
const Sidebar = ({changeNum})=>{
// console.log("props in sidebar", changeNum)
return(
    <Box style={{width:120, border:'2px solid Blue', padding:'70px 10px'}}>
        <Button variant="contained" size="small" style={{marginTop:40}} onClick={()=>changeNum(0)}>About
            {/* <Link to="/">About</Link> */}
            </Button>
        <Button variant="contained" size="small" style={{marginTop:40}} onClick={()=>changeNum(1)}>Education
            {/* <Link to="/edu">Education</Link> */}
            </Button>
        <Button variant="contained"size="small" style={{marginTop:40}} onClick={()=>changeNum(2)}>Experience
            {/* <Link to="/exp">Experience</Link> */}
             </Button>
        <Button variant="contained" size="small" style={{marginTop:40}} onClick={()=>changeNum(3)}>Contact
            {/* <Link to="/contact">Contact</Link> */}
        </Button>
    </Box>
)
}

export default Sidebar;