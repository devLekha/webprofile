import {Box, Typography} from '@mui/material'
import ReactECharts from 'echarts-for-react';
const About = ()=>{
    const option = {
        xAxis: {
          type: 'category',
          data: ['Solidity', 'NodeJs', 'ReactJs']
        },
        yAxis: {
          type: 'value'
        },
        color: [ '#dd6b66'],
        series: [
          {
            data: [7, 6, 5],
            type: 'bar'
          }
        ]
      };
    return(
        <Box>
    <h1>About</h1>
    <Typography>My name is Lekha Saraf. I am from Jabalpur(MP). I have 3+ years of experience in Software Development. My main skills are Solidity, Nodejs and Reactjs. I have interset in learning new Technologies and I am an enthusiastic learner.</Typography>
  <ReactECharts option={option} />
    </Box>
    )
}
export default About;