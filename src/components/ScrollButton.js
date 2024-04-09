import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { ChevronUpIcon } from '@chakra-ui/icons';
import './css/ScrollButton.css'


const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    window.addEventListener('scroll', toggleVisibility);
  
    return (
      <div>
        {isVisible && (
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="scroll-to-top-button"
            onClick={scrollToTop}
          >
                <ChevronUpIcon />
          </Link>
        )}
      </div>
    );
  };
  
  export default ScrollToTopButton;
  