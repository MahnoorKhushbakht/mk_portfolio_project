import * as React from 'react';
import 'aos/dist/aos.css';
import Typography from '@mui/material/Typography';

export default function HeadinStyleSM({children}) {
    return (
          <Typography
            data-aos="fade-down"
            data-aos-delay='100'
            width='80%'
            sx={{ fontSize: { xs: '15px', md: '20px' }, width: { xs: '80%', md: '50%' },textAlign: 'center'  }}
            color={'rgba(255, 255, 255, 0.856)'}
            variant="h4"
            fontStyle='italic'
            marginBottom={'35px'}
            fontFamily='Helvetica, Arial'
          >
           {children}
          </Typography>
    );
  }
  