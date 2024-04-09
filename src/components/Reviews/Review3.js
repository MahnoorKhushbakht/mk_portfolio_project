import React, { useState } from 'react';
import { CardHeader, CardBody, IconButton, Box,Avatar, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'aos/dist/aos.css';
import Reviews from '../Styles/ReviewStyle';
import VK from '../images/VK.jpeg'
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
          <Avatar size={{ base: "sm", md: "sm", lg: "md" }} name='Vivek Kumar' src={VK} />
            <Box>
              <Heading size='sm' textAlign='left' fontFamily='Helvetica, Arial'>Vivek Kumar</Heading>
              <Text textAlign='left'fontFamily='Helvetica, Arial'fontSize={{ base: "12px", md: "12px", lg: "16px" }}>Digital Marketer, India</Text>
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
        It's been a pleasure to work with Mahnoor Khushbakht over the past some months. As a website developer, She has consistently impressed me with his ability to translate complex client requirements into seamless, functional websites. 
          {showMore && ( 
            <>
             And she have great experience in front end developement. Highly recommended...
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
