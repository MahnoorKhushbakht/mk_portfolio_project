import * as React from 'react';
import 'aos/dist/aos.css';
import Typography from '@mui/material/Typography';

export default function HeadinStyleMD({children}) {
  return (
        <Typography
          data-aos="fade-down"
          data-aos-delay='100'
          sx={{ fontSize: { xs: '25px', md: '30px' }}}
          color={'white'}
          variant="h5"
          fontWeight='bold'
          marginBottom={'10px'}
          fontFamily='Helvetica, Arial'
          textAlign='center'
        >
          {children}
        </Typography>
  );
}
