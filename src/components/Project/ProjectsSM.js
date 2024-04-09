import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import 'aos/dist/aos.css';
import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import Typography from '@mui/material/Typography';

export default function ProjectSM() {
  const handlePortfolioClick = () => {
    window.open('https://promiseemmanuel.onrender.com/', '_blank');
  };

  const handleMarketingClick = () => {
    window.open('https://neskomedia.onrender.com/', '_blank');
  };

  const handleGitPortfolioClick = () => {
    window.open('https://github.com/MahnoorKhushbakht/pe_portfolio_website', '_blank');
  };

  const handleGitMarketingClick = () => {
    window.open('https://github.com/MahnoorKhushbakht/marketing-agency', '_blank');
  };

  return (
    <>
            <Card  data-aos="fade-down" data-aos-delay='100' sx={{ maxWidth: '100%',maxHeight: '100%', backgroundColor: '#ccccd8', margin: 'auto', position: 'relative' }}>
              <CardMedia
                component="img"
                alt="project1"
                height="240"
                image={project1}
              />
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardActions style={{ zIndex: 1 }}>
                  <Button 
                                    sx={{
                                  
                                     background:'#593ea3',
                                      color: 'white',
                                      '&:hover': {
                                        background: 'white',
                                        color: '#593ea3',
                                      },
                                      fontFamily: 'Helvetica, Arial',
                                    }}
                                    size='small'
                                    variant="contained"
                  onClick={handlePortfolioClick}>View</Button>
                  <Button                                 sx={{
                                  
                                  background:'#593ea3',
                                   color: 'white',
                                   '&:hover': {
                                     background: 'white',
                                     color: '#593ea3',
                                   },
                                   fontFamily: 'Helvetica, Arial',
                                 }}
                                 size='small'
                                 variant="contained"  onClick={handleGitPortfolioClick}>Github</Button>
                </CardActions>
              </div>
            </Card>

            <Card data-aos="fade-down" data-aos-delay='150' sx={{maxWidth: '100%',maxHeight: '100%', backgroundColor: '#ebc521', margin: '20px auto', position: 'relative' }}>
              <CardMedia
                component="img"
                alt="project2"
                height="240"
                image={project2}
              />
              <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardActions style={{ zIndex: 1 }}>
                  <Button                                 sx={{
                                  
                                     background:'#593ea3',
                                      color: 'white',
                                      '&:hover': {
                                        background: 'white',
                                        color: '#593ea3',
                                      },
                                      fontFamily: 'Helvetica, Arial',
                                    }}
                                    size='small'
                                    variant="contained"  onClick={handleMarketingClick}>View</Button>
                  <Button                                 sx={{
                                  
                                     background:'#593ea3',
                                      color: 'white',
                                      '&:hover': {
                                        background: 'white',
                                        color: '#593ea3',
                                      },
                                      fontFamily: 'Helvetica, Arial',
                                    }}
                                    size='small'
                                    variant="contained"  onClick={handleGitMarketingClick}>Github</Button>
                </CardActions>
              </div>
            </Card>
            </>
  );
}
