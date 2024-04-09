import { IconButton,Box } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function SocialIcon() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/mahnoor.khushbakht?mibextid=ZbWKwL', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/noor_khushbakht?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('http://www.linkedin.com/in/mahnoorkhushbakht', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:mahnoorkhushbakht@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/MahnoorKhushbakht', '_blank');
  };

  return (
    <Box  display={'flex'} justifyContent={'left'}>
      <IconButton
        variant='outlined'
        aria-label='Facebook'
        color='white'
        fontSize='20px'
        margin='0 6px'
        size='md'
        icon={<FaFacebook />}
        onClick={handleFacebookClick}
      />

      <IconButton
        variant='outlined'
        color='white'
        aria-label='Instagram'
        fontSize='20px'
        margin='0 6px'
        size='md'
        icon={<FaInstagram />}
        onClick={handleInstagramClick}
      />

      <IconButton
        variant='outlined'
        color='white'
        aria-label='LinkedIn'
        fontSize='20px'
        margin='0 6px'
        size='md'
        icon={<FaLinkedin />}
        onClick={handleLinkedinClick}
      />

      <IconButton
        variant='outlined'
        color='white'
        aria-label='Github'
        fontSize='20px'
        margin='0 6px'
        size='md'
        icon={<FaGithub />}
        onClick={handleGithubClick}
      />

      <IconButton
        variant='outlined'
        color='white'
        aria-label='Mail'
        margin='0 6px'
        fontSize='20px'
        size='md'
        icon={<FaEnvelope />}
        onClick={handleMailClick}
      />
</Box>
  );
}
