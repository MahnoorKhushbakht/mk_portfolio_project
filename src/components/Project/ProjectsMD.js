import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    image: require('../images/project1.jpeg'),
    liveLink: 'https://promiseemmanuel.onrender.com/',
    githubLink: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website',
  },
  {
    id: 2,
    title: 'Marketing Agency',
    image: require('../images/project2.jpeg'),
    liveLink: 'https://neskomedia.onrender.com/',
    githubLink: 'https://github.com/MahnoorKhushbakht/marketing-agency',
  },
  {
    id: 3,
    title: 'Tailored Gents',
    image: require('../images/project3.JPG'),
    liveLink: 'https://mens-clothing.vercel.app/',
    githubLink: 'https://github.com/MahnoorKhushbakht/mens-clothing.git',
  },
  {
    id: 4,
    title: 'Market Minds',
    image: require('../images/project4.JPG'),
    liveLink: 'https://marketminds.vercel.app/',
    githubLink: 'https://github.com/MahnoorKhushbakht/BSolutions.git',
  },
  {
    id: 5,
    title: 'Echoes of Thoughts',
    image: require('../images/project5.JPG'),
    liveLink: 'https://echo-of-thoughts.vercel.app/',
    githubLink: 'https://github.com/MahnoorKhushbakht/blog.git',
  },
];

export default function ProjectMD() {
  return (
    <Carousel controls={false} indicators={true} style={{ width: '100%' }}>
      {projects.map((project, index) => (
        <Carousel.Item key={project.id}>
          <Card
            data-aos="fade-down"
            data-aos-delay={`${100 + index * 50}`}
            sx={{
              maxWidth: '60%',
              backgroundColor: index % 2 === 0 ? '#ccccd8' : '#ebc521',
              margin: 'auto',
              position: 'relative',
            }}
          >
            <CardMedia
              component="img"
              alt={project.title}
              height="240"
              image={project.image}
            />
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
                <Button
                  sx={{
                    background: '#593ea3',
                    color: 'white',
                    '&:hover': {
                      background: 'white',
                      color: '#593ea3',
                    },
                    fontFamily: 'Helvetica, Arial',
                  }}
                  size="large"
                  variant="contained"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  View
                </Button>
                <Button
                  sx={{
                    background: '#593ea3',
                    color: 'white',
                    '&:hover': {
                      background: 'white',
                      color: '#593ea3',
                    },
                    fontFamily: 'Helvetica, Arial',
                  }}
                  size="large"
                  variant="contained"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  Learn More
                </Button>
              </CardActions>
            </div>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
