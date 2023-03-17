import {Box} from '@mui/material'
const Experience = ()=>{
    return(<Box style={{overflowY:'scroll', height:500}}>
        <h1>Experience</h1>
        <Box  sx={{
        backgroundColor: '#bf80ff',
      }}>
        <b>Project 1.</b> : Ecommerce Website<br/>
        <b>Description</b> : It is an ecommerce website which is retail product management system<br/>
        <b>Tools/Technology</b> : MongoDB as Database, React.js for Frontend, Node.js and Express for Backend<br/>  
        <b>Role&Responsiblilities</b> : Complete Fullstack development
        </Box>
        <Box  sx={{
        backgroundColor: '#ff99ff',
      }}>
        <b>Project 2.</b> : NIT Chain<br/>
        <b>Description</b> : Open Ethereum based Private Proof of Stake blockchain<br/>
        <b>Tools/Technology</b> : Remix IDE, VS Code, Metamask, Open Ethereum<br/>  
        <b>Role&Responsiblilities</b> : Created private Blockchain, Multisignature and Relayed set contracts creation and implementation for POS Chain
        </Box>
        <Box  sx={{
        backgroundColor: '#bf80ff',
      }}>
        <b>Project 3.</b> : Key Calm<br/>
        <b>Description</b> : It's a Real Estate based project, in which tokens are given to the property holders and the basis of their investment in the property.<br/>
        <b>Tools/Technology</b> : Remix IDE<br/>  
        <b>Role&Responsiblilities</b> : Developed and Tested  Smart contracts and 2 ERC20Tokens contract Silver and Gold, loan contract and staking pool contract. 
        </Box>
        <Box  sx={{
        backgroundColor: '#ff99ff',
      }}>
        <b>Project 4.</b> : Aussie Digital<br/>
        <b>Description</b> : It's a Data driven equity blockchain platform, a game changing ecommerce-ecosystem powered by a Digital Token AUDcoin.<br/>
        <b>Tools/Technology</b> : Remix IDE<br/>  
        <b>Role&Responsiblilities</b> :Developed and tested  erc20 token Smart contract
        </Box>
        <Box  sx={{
        backgroundColor: '#bf80ff',
      }}>
        <b>Project 5.</b> : Crosschain Swap<br/>
        <b>Description</b> : It's a Cryptocurrency exchange platform, a clone of panther swap and pancake Swap.<br/>
        <b>Tools/Technology</b> : Remix IDE<br/>  
        <b>Role&Responsiblilities</b> : Cloned and Tested the cloned Smart contracts
        </Box>
        <Box  sx={{
        backgroundColor: '#ff99ff',
      }}>
        <b>Project 6.</b> : Chart Integration<br/>
        <b>Description</b> : Integration of E-Charts in the VoltusWave platform for representation of data stored.<br/>
        <b>Tools/Technology</b> :  Vue, Vuex, E-Charts.<br/>  
        <b>Role&Responsiblilities</b> : Configuration and Integration of Charts into the VoltusWave platform.
        </Box>
        <Box  sx={{
        backgroundColor: '#bf80ff',
      }}>
        <b>Project 7.</b> : YourOaks<br/>
        <b>Description</b> : It’s an API modification project for the website which is developed using Node.JS.<br/>
        <b>Tools/Technology</b> : MySQL workbench, Nodejs, Postman.<br/>  
        <b>Role&Responsiblilities</b> : Developed and modified API that interacts with backend database.
        </Box>
        <Box  sx={{
        backgroundColor: '#ff99ff',
      }}>
        <b>Project 8.</b> : User Authentication System<br/>
        <b>Description</b> : It is a project to authenticate new user sign-in by sending OTP SMS, once the number gets verified a Welcome email is send to the user. It is developed using Google Cloud Functions which gets triggered when user submits the required registration details. OTP SMS is send using Msg91 and Welcome mail is send using Sendgrid.<br/>
        <b>Tools/Technology</b> : Google Cloud Functions, Sendgrid and Msg91.<br/>  
        <b>Role&Responsiblilities</b> : Developed APIs using third-party tools.
        </Box>
        <Box  sx={{
        backgroundColor: '#bf80ff',
      }}>
        <b>Project 9.</b> : Email Proof<br/>
        <b>Description</b> : This is a Blockchain Project is to store the JSON format of Emails in Ethereum blockchain which will act as a proof of emails. The JSON details obtained using http server are stored with the help of Smart Contract developed using Solidity language which is deployed into blockchain using Mist browser. At the backend Smart Contract functions are called using Web3.JS and Node.JS.<br/>
        <b>Tools/Technology</b> : Ethereum, Smart Contract, Remix IDE, Mist Browser..<br/>  
        <b>Role&Responsiblilities</b> : Developed Smart Contract using Solidity
         Used Truffle framework to perform Unit Testing in testing network Rinkeby  
        </Box>
        </Box>
    )
}
export default Experience;