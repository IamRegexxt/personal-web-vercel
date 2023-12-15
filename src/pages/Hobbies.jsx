import React from 'react';
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const services = [
  { label: 'CODING', icon: <CodeIcon fontSize="large" /> },
  { label: 'LISTENING TO MUSIC', icon: <MusicNoteIcon fontSize="large" /> },
  { label: 'Playing Mobile Games and PC games', icon: <SportsEsportsIcon fontSize="large" /> },
  { label: 'Photography', icon: <CameraAltIcon fontSize="large" /> },
];

const Hobbies = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ textAlign: 'center', pb: 7 }}>
        <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          Hobbies
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}>
          ko
        </Typography>
      </Box>
      <Box sx={{ height: 'auto', flexGrow: 1, width: '100vw', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', pb: 20, gap: '1px' }}>
        {services.map((page, index) => (
          <Box sx={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={index}>
            <Card sx={{ width: 350, mb: { xs: 9 }, height: '200px' }}>
              <CardActionArea sx={{ height: '200px' }}>
                <CardContent>
                  <>
                    <Typography gutterBottom variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                      {page.icon} <span>{page.label}</span>
                    </Typography>
                  </>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Hobbies;
