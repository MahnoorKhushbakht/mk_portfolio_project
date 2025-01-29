import 'animate.css';
import React from 'react';
import { Box, Highlight, Heading, Text, ChakraProvider } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
import Btn from './Btn';
import TagBar from './TagBar';
import 'aos/dist/aos.css';
import TagLine from './TagLine';



export default function HomePage() {
  return (
    <ChakraProvider>
     
      <div id='home'
            style={{
              height:'100vh'
            }}>

        <Box
          sx={{
            maxWidth: '100%',
            display: "flex",
            textAlign: "left",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: 'column',
            marginLeft: { base: '25px', md: '110px' },
            marginTop: { base: '50px', md: '80px' }, // Increased spacing
            marginBottom: { base: '50px', md: '80px' }, // Added bottom spacing
          }}
          data-aos="fade-down"
          data-aos-delay='100'
        >
        
         
          <Box sx={{ width: { base: '95%', md: '70%' }, marginTop: ['5%', '5%'] }}>
            <TagLine />
            <Heading
              sx={{ fontSize: { base: '25px', md: '45px' }, textAlign: 'left', fontFamily: 'Helvetica, Arial' }}
              lineHeight="tall"
              className="animate__animated animate__fadeInUp"
              color='white'
            >
              Hi there,
              <br />
              <Highlight
                query={['Mahnoor Khushbakht']}
                styles={{ color: '#6c58a3', px: '1', py: '1', bg: 'white' }}
                className="animate__animated animate__bounce"
              >
                I'm Mahnoor Khushbakht
              </Highlight>
            </Heading>
            <Text
              sx={{ fontSize: { base: '25px', md: '50px' }, fontFamily: 'Helvetica, Arial' }}
              className="animate__animated animate__fadeInUp"
              color='white'
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Website Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Let's Grow Together!!")
                    .start();
                }}
              />
            </Text>
            <Btn />
            <TagBar />
          </Box>
        </Box>
      </div>
    </ChakraProvider>
  );
}
