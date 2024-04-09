import React from 'react';
import {  ChakraProvider, Code } from '@chakra-ui/react';

export default function TagLine() {
  return (
    <ChakraProvider>
  <Code backgroundColor='#6c58a3' color='white' children='console.log(welcome!)' />
    </ChakraProvider>
  );
}
