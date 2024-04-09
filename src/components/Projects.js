import * as React from 'react';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';
import ProjectSM from './Project/ProjectsSM';
import ProjectMD from './Project/ProjectsMD';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import HeadinStyleSM from './Styles/HeadingStyleSM';
import LayoutStyle from './Styles/LayoutStyle';
import DividerStyle from './Styles/DividerStyle';
import { Divider } from '@chakra-ui/react'
export default function Projects() {
  return (
<LayoutStyle id='project'>
<DividerStyle>
<HeadinStyleMD>
          My Web Projects
          </HeadinStyleMD>
<HeadinStyleSM>
          Projects done successfully for my Clients.
          </HeadinStyleSM>
 </DividerStyle>
        <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent:'center',
        }}
      >  
        <ProjectSM />
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent:'center',
          flexDirection: 'column'
        }}
      >

        <ProjectMD />
      </Box>
      </LayoutStyle>
  );
}
