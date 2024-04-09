import { Card, CardFooter,Box,Button } from '@chakra-ui/react'
import { BiLike, BiChat,BiShare } from 'react-icons/bi'
import { ChakraProvider } from '@chakra-ui/react';
import 'aos/dist/aos.css';
export default function ReviewStyle( {children}){
  return(
    <ChakraProvider>
  <div id="review" >
  <Box display="flex" marginTop={'15px'} justifyContent="center" alignItems="center" flexDirection="column" >
    <Card data-aos="fade-down" data-aos-delay='150' backgroundColor='#6c58a3' color='white' sx={{width: { base: '90%', sm: '90%', md: '60%', lg: '50%' }}}>
    {children}

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        maxW: '116px'
      },
    }}
  >
<Button _hover={{ textDecoration: 'none' }} style={{ color: 'white', fontFamily: 'Helvetica, Arial', flex: '1' }} variant='ghost' leftIcon={<BiLike style={{ color: 'white' }} />}>
  Like
</Button>
<Button _hover={{ textDecoration: 'none' }} style={{ color: 'white', fontFamily: 'Helvetica, Arial', flex: '1' }} variant='ghost' leftIcon={<BiChat style={{ color: 'white' }} />}>
  Comment
</Button>
<Button _hover={{ textDecoration: 'none' }} style={{ color: 'white', fontFamily: 'Helvetica, Arial', flex: '1' }} variant='ghost' leftIcon={<BiShare style={{ color: 'white' }} />}>
  Share
</Button>




  </CardFooter>
</Card>
</Box>
</div>
</ChakraProvider>
  )
}