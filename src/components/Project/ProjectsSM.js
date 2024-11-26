import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import 'aos/dist/aos.css';

import project1 from '../images/project1.jpeg';
import project2 from '../images/project2.jpeg';
import project3 from '../images/project3.JPG';
import project4 from '../images/project4.JPG';
import project5 from '../images/project5.JPG';

export default function ProjectSM() {
  const projects = [
    {
      image: project1,
      viewLink: 'https://promiseemmanuel.onrender.com/',
      gitLink: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website',
    },
    {
      image: project2,
      viewLink: 'https://neskomedia.onrender.com/',
      gitLink: 'https://github.com/MahnoorKhushbakht/marketing-agency',
    },
    {
      image: project3,
      viewLink: 'https://mens-clothing.vercel.app/',
      gitLink: 'https://github.com/MahnoorKhushbakht/mens-clothing.git',
    },
    {
      image: project4,
      viewLink: 'https://marketminds.vercel.app/',
      gitLink: 'https://github.com/MahnoorKhushbakht/BSolutions.git',
    },
    {
      image: project5,
      viewLink: 'https://echo-of-thoughts.vercel.app/',
      gitLink: 'https://github.com/MahnoorKhushbakht/blog.git',
    },
  ];

  const buttonStyles = {
    background: '#593ea3',
    color: 'white',
    '&:hover': {
      background: 'white',
      color: '#593ea3',
    },
    fontFamily: 'Helvetica, Arial',
  };

  const ProjectCard = ({ project, delay }) => (
    <Card
      data-aos="fade-down"
      data-aos-delay={delay}
      sx={{
        maxWidth: '100%',
        maxHeight: '100%',
        backgroundColor: '#ebc521',
        margin: '20px auto',
        position: 'relative',
      }}
    >
      <CardMedia component="img" alt="project image" height="240" image={project.image} />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardActions style={{ zIndex: 1 }}>
          <Button sx={buttonStyles} size="small" variant="contained" onClick={() => window.open(project.viewLink, '_blank')}>
            View
          </Button>
          <Button sx={buttonStyles} size="small" variant="contained" onClick={() => window.open(project.gitLink, '_blank')}>
            Github
          </Button>
        </CardActions>
      </div>
    </Card>
  );

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} delay={100 + index * 50} />
      ))}
    </>
  );
}
