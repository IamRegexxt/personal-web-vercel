import React from 'react';
import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

export const Social = () => {
  return (
    <Stack direction="column" spacing={3} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <a href="https://github.com/IamRegexxt" target="_blank" rel="noopener noreferrer">
        <Avatar sx={{ bgcolor: 'black', fontSize: '2rem' }}>
          <GitHubIcon />
        </Avatar>
      </a>
      <a href="mailto:example@example.com">
        <Avatar sx={{ bgcolor: blue[700], color: '#fff', fontSize: '2rem' }}>
          <EmailIcon />
        </Avatar>
      </a>
      <a href="https://www.facebook.com/jesreel.amorganda.52" target="_blank" rel="noopener noreferrer">
        <Avatar sx={{ bgcolor: blue[700], fontSize: '2rem' }}>
          <FacebookIcon />
        </Avatar>
      </a>
    </Stack>
  );
};
