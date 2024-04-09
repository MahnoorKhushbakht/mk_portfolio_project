import { HStack, ChakraProvider, Tag, Box } from '@chakra-ui/react';

export default function TagBar() {


  return (
    <ChakraProvider>
      <Box maxWidth='100%' overflowX='auto'>
        <HStack spacing={1} flexWrap="wrap" width={{ base: '100%', md: '70%' }}  justifyContent='flex-start'>
          {['HTML', 'CSS', 'Javascript', 'React', 'NodeJs','MongoDB' ,'ResponsiveDesign', 'WebDevelopement', 'WebDesign', 'DeveloperPortfolio'].map((name) => (
            <Tag
              size={{ base: 'sm', md: 'md' }}
              key={name}
              variant='solid'
              fontFamily='Helvetica, Arial'
              sx={{
                color: 'white',
                px: '4',
                py: '3',
                rounded: 'full',
                bg: '#6c58a3',
              }}
            >
              {name}
            </Tag>
          ))}
        </HStack>
      </Box>
    </ChakraProvider>
  );
}
