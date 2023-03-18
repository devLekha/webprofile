import {Box} from '@mui/material'
const Education=()=>{
    return(<Box >
    <h1>Education</h1>
    <Box sx={{
        backgroundColor: 'orange',
      }}>
        <h4>Year: 2012-16</h4>
        BE-EC<br/>
        CGPA: 7.87<br/>
        Rajeev gandhi prodyogiki vishv vidyalaya
        </Box>
        <Box  sx={{
        backgroundColor: 'orange',
      }}>
        <h4>Year: 2011-12</h4>
        XII-Maths, Science<br/>
        Percentage: 65<br/>
        CBSC Boards
        </Box>
        <Box  sx={{
        backgroundColor: 'orange',
      }}>
        <h4>Year: 2009-10</h4>
        X<br/>
        CGPA: 9<br/>
        CBSC Boards
        </Box>
        </Box>
    )
}
export default Education;