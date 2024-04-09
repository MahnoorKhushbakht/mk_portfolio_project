import React, { useState } from 'react';
import { CardHeader, CardBody, IconButton,Avatar, Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'aos/dist/aos.css';
import Reviews from '../Styles/ReviewStyle';
import PE from '../images/ClientImage.jpeg'
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
          <Avatar size={{ base: "sm", md: "sm", lg: "md" }} name='Promise Emmanuel' src={PE} />
            <Box>
              <Heading size='sm' textAlign='left' fontFamily='Helvetica, Arial'>Promise Emmanuel</Heading>
              <Text textAlign='left'fontFamily='Helvetica, Arial'fontSize={{ base: "12px", md: "12px", lg: "16px" }}>Digital Marketer, Nigeria</Text>
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
          I'd like to give a special shout-out to Mahnoor khushbakht, who created a professional and eye-catching portfolio website. Her expertise and attention to detail were invaluable in creating a site that truly reflects my work and style.
          {showMore && ( 
            <>
              I'm so grateful for her help and I highly recommend her to anyone looking for website developer services.
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
