import Resume from '../Docs/MahnoorKhushbakht_CV.pdf';
import { Button, CircularProgress, Box } from '@chakra-ui/react';
import * as React from 'react';

export default function Btn() {
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Box  display={'flex'} flexDirection={'row'} margin='0 5px'>
      <a href={Resume} download>
        <Button
          onClick={handleDownload}
          size={{ base: 'md', md: 'lg' }}
          display='flex'
          justifyContent='left'
          marginBottom='20px'
          fontFamily="Helvetica, Arial"
          sx={{
            background: 'white',
            color: '#6c58a3',
            '&:hover': {
              background: '#6c58a3',
              color: 'white',
            },
          }}
          variant='contained'
          disabled={loading}
        >
          {!loading && (
            <>
              Resume
             
            </>
          )}
          {loading && (
            <Box ml='2'>
              <CircularProgress size='30px' color='#6c58a3' value={progress} thickness={6} />
            </Box>
          )}
        </Button>
      </a>
      <Button
        size={{ base: 'md', md: 'lg' }}
          display='flex'
          justifyContent='left'
          marginLeft='8px'
          fontFamily="Helvetica, Arial"
          sx={{
            background: 'white',
            color: '#6c58a3',
            '&:hover': {
              background: '#6c58a3',
              color: 'white',
            },
          }}
        >
  <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
    Contact Me
    </a>
        </Button>
    </Box>
  );
}
