import React from 'react';
import { green, blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

export const Social = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button>
        <Avatar sx={{ bgcolor: 'black' }}>
          <GitHubIcon />
        </Avatar>
      </Button>
      <Button>
        <Avatar sx={{ bgcolor: blue[700], color: '#fff' }}>
          <EmailIcon />
        </Avatar>
      </Button>
      <Button>
        <Avatar sx={{ bgcolor: blue[700] }}>
          <FacebookIcon />
        </Avatar>
      </Button>
    </Stack>
  );
};
