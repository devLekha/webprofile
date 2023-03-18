import * as React from "react";
// import{Link} from "react-router-dom"
import {Box, Button} from '@mui/material'
const Mobilesidebar = ({changeNum})=>{
// console.log("props in sidebar", changeNum)
return(
    <Box >
        <Button variant="contained" size="small" style={{marginRight:5}} onClick={()=>changeNum(0)}>About
       
            </Button>
        <Button variant="contained" size="small" style={{marginRight:5}} onClick={()=>changeNum(1)}>Education
           
            </Button>
        <Button variant="contained"size="small" style={{marginRight:5}} onClick={()=>changeNum(2)}>Experience
           
             </Button>
        <Button variant="contained" size="small" style={{marginRight:5}} onClick={()=>changeNum(3)}>Contact
           
        </Button>
    </Box>
)
}

export default Mobilesidebar;