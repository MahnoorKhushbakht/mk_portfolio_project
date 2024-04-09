import * as React from 'react';
import { Box, ChakraProvider, Heading, Text, Button } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';

export default function BackgroundExp() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', height: '80%', marginLeft: '10px' ,marginTop:'5px',marginBottom:'5px'}}>
      <ChakraProvider>
        <Box textAlign={{ base: 'center', md: 'center' }}>
          <Text fontSize='md' color={'white'} fontFamily='Helvetica, Arial'>
           I can help enhance your online presence and create a seamless, user-friendly experience for your customers. I am dedicated to staying updated with the latest industry trends and technologies.
          </Text>


        </Box>
      </ChakraProvider>
    </div>
  );
}
