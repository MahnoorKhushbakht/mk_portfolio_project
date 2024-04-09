import * as React from 'react';
import Stack from '@mui/material/Stack';
import HeadinStyleSM from './Styles/HeadingStyleSM';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import LayoutStyle from './Styles/LayoutStyle';
import DividerStyle from './Styles/DividerStyle';
import Cardcontent from './CardContent';

export default function Skills() {
  return (
<LayoutStyle id="skills">
      <DividerStyle>
      <HeadinStyleMD>
        Skills
      </HeadinStyleMD>
      <HeadinStyleSM>         
       I possess a diverse skills including 
       </HeadinStyleSM>  
       </DividerStyle>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
<Cardcontent/>
        </Stack>
        </LayoutStyle>
  );
}
