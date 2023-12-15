import React from 'react'
import { Box, Button, Card, CardContent,Typography } from '@mui/material'
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const info=[
    {icon:<MdOutlineMail/>,name:'Email',contact:'jesreel2019@gmail.com'},
    {icon:<RiMessengerLine/>,name:'Messenger',contact:'Jesreel Amorganda'}
  ]

const QuickContact = () => {
  return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, maxWidth: '500px' }}>
          <Typography gutterBottom variant="h1" component="div" sx={{ fontSize: '30px', textAlign: 'center',mb:5,fontFamily:'Poppins' }}>
            Talk to me
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5 }}>
            {
              info.map((data,index)=>(
                <Card key={index} sx={{ minWidth: '320px', textAlign: 'center' }}>
                    <CardContent>
                      {data.icon}
                      <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '15px' },fontFamily:'Poppins' }}>
                        {data.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{fontFamily:'Poppins'}}>
                        {data.contact}
                      </Typography>
                    </CardContent>
                  <Button variant="contained" 
                    sx={{textTransform:'none',bgcolor:'transparent',fontFamily:'Poppins',boxShadow:'none',color:'grayText',
                    '&:hover': {
                    bgcolor: 'transparent',
                    boxShadow:'none'
                    }}} endIcon={<FaLongArrowAltRight />}>
                      Message me or Email
                  </Button>
                </Card>
              ))
            }
          </Box>
        </Box>
  )
}

export default QuickContact