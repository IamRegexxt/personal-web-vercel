import React from 'react';
import { Avatar, Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          About Me
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
          My Introduction
        </Typography>
      </Box>
      <Box sx={{ height: 'auto', width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', mt: 2, gap: '20px' }}>
        <Box sx={{ maxWidth: '250px', padding: '20px' }}>
          <Avatar alt="Remy Sharp" src="portfolio.png" sx={{ width: '250px', height: '250px' }} variant="rounded" />
        </Box>
        <Box sx={{ maxWidth: '700px', padding: '10px' }}>
          <CardContent sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins' }}>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ maxWidth: { md: '600px', xs: '350px', sm: '500px' }, ml: { xs: '15px' } }}>
              "🚀I am Jesreel Amorganda, a 3rd Year Student of Naga College Foundation taking the course of Bachelor Science of Computer Science. Enthusiastic student with a strong dedication to academic excellence and personal growth. Eager to explore the intersections of knowledge and creativity, I am passionate about building new things that are connected to technology. Through my studies and extracurricular experiences, I aim to contribute my unique perspective and skills to make a positive impact on the world. ✨"
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Box>
  );
};

export default About;