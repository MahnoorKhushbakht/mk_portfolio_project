
  import React, { useState } from 'react';
import { CardHeader, CardBody, IconButton,Avatar, Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'aos/dist/aos.css';
import Reviews from '../Styles/ReviewStyle';
export default function Reviews3() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Reviews>
      <CardHeader>
        <Flex spacing='2'>
          <Flex flex='1' gap='2' alignItems='left' flexWrap='wrap'>
          <Avatar size={{ base: "sm", md: "sm", lg: "md" }} src='https://bit.ly/broken-link' />
            <Box>
              <Heading size='sm' textAlign='left' fontFamily='Helvetica, Arial'>Abdullah Ali Khan</Heading>
              <Text textAlign='left'fontFamily='Helvetica, Arial'fontSize={{ base: "12px", md: "12px", lg: "16px" }}>Nesko Media</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            icon={<BsThreeDotsVertical style={{ color: 'white' }} />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text fontSize={{ base: "14px", md: "14px", lg: "18px" }} fontFamily='Helvetica, Arial'  display='flex' alignContent='left' textAlign='left' >
        I had the pleasure of working with Mahnoor on a website project for my Digits Marketing Agency, and I highly recommend her services. Mahnoor's ability to create amazing websites is evident in the project she completed for us. 
          {showMore && ( 
            <>
             Her professionalism and attention to detail ensured that the website not only met but exceeded our expectations. Mahnoor's expertise in website development is impressive, and her dedication to delivering exceptional results is commendable. It was a pleasure working with her, and I look forward to future collaborations.
            </>
          )}
        </Text>
        <Button fontSize={{ base: "12px", md: "12px", lg: "14px" }} fontFamily='Helvetica, Arial'  display='flex' alignItems='left' color='white' fontStyle='underline'onClick={toggleShowMore} variant="link">
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </CardBody>
    </Reviews>
  );
}
