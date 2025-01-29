import * as React from 'react';
import 'aos/dist/aos.css';
import Typography from '@mui/material/Typography';

export default function HeadinStyleSM({children}) {
    return (
          <Typography
            data-aos="fade-down"
            data-aos-delay='100'
            width='100%'
            backgroundColor='#6c58a3'
            sx={{ fontSize: { xs: '15px', md: '20px' }, width: { xs: '100%', md: '100%' },textAlign: 'center'  }}
            color={'rgba(255, 255, 255, 0.856)'}
            variant="h3"
            fontStyle='italic'
            marginBottom={'35px'}
            fontFamily='Helvetica, Arial'
          >
           {children}
          </Typography>
    );
  }
  