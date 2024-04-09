import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Details from './Details';
import ProfileImage from './images/ProfileImage.png';
import SocialIcon from './SocialIcon';
import Footer from './Footer';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import LayoutStyle from './Styles/LayoutStyle';


const Container = styled('div')({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = styled('img')(({ theme }) => ({
  borderRadius: '50%',
  width: theme.breakpoints.values.xs === '75px' ? '75px' : '150px',
  height: theme.breakpoints.values.xs === '75px' ? '75px' : '150px',
  margin: '5px 5px',
}));


export default function AboutMe() {
  return (
    <>
<LayoutStyle id='about'>
        <Container>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection:'column',
              alignItems: 'center',
              width: { xs: '95%', md: '50%' },
              height: '60%',
            }}
          >
                  <Image src={ProfileImage} alt="Profile Image" marginBottom='5px'/>
       <HeadinStyleMD>
        About Me
   </HeadinStyleMD>
            <Details />
            <SocialIcon/>
          </Box>
        </Container>
        </LayoutStyle>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'#d6d6d6'}}>
         <Footer/>
      </div>
    </>
  );
}
