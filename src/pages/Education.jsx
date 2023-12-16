import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const education = [
  {
    label: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE',
    description: 'NAGA COLLEGE FOUNDATION',
  },
  {
    label: 'HIGH SCHOOL',
    description: 'UNIVERSIDAD DE STA. ISABEL',
  },
  {
    label: 'ELEMENTARY',
    description: 'CAROYROYAN PILI CAMARINES SUR',
  },
];

const Education = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', mt: 7, fontFamily: 'Poppins' }}>
        <Typography component="div" variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          Education
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div" sx={{ fontFamily: 'Poppins' }}></Typography>
      </Box>
      <Box sx={{ width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', mt: 2, gap: '20px' }}>
        <Box sx={{ maxWidth: 1000, pb: 15, mt: 7, display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: { xs: 'center' } }}>
          {/* --------------------------- Education stepper --------------------------- */}
          <Stepper orientation="vertical" activeStep={-1} sx={{ width: '100%', maxWidth: '500px' }}>
            {education.map((step, index) => (
              <Step key={step.label}>
                <StepLabel sx={{ maxWidth: '350px', width: '100%' }}>
                  <Box sx={{ color: 'black', fontWeight: 'bold' }}>
                    {step.label}
                  </Box>
                  <Box sx={{ fontStyle: 'italic' }}>
                    {step.description}
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* --------------------------- Experience stepper --------------------------- */}
        </Box>
      </Box>
    </>
  );
}

export default Education;
