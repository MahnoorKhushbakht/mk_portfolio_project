import React from 'react';
import { Carousel } from 'react-bootstrap';
import Review1 from './Reviews/Review1';
import Review2 from './Reviews/Review2';
import Review3 from './Reviews/Review3';
import HeadinStyleMD from './Styles/HeadingStyleMD';
import HeadinStyleSM from './Styles/HeadingStyleSM';
import LayoutStyle from './Styles/LayoutStyle';
import DividerStyle from './Styles/DividerStyle';

function ClientReviews() {
  return (
   <LayoutStyle id='review'>
      <DividerStyle>
       <HeadinStyleMD>
       Recent Reviews
       </HeadinStyleMD>
       <HeadinStyleSM>
      What does client says about my work.
      </HeadinStyleSM>
      </DividerStyle>
        <Carousel controls={false} indicators={false} style={{ width: '100%' }}>
          <Carousel.Item>
<Review1/>

          </Carousel.Item>
          <Carousel.Item>
<Review2/>
          </Carousel.Item>
          <Carousel.Item>
<Review3/>
          </Carousel.Item>
        </Carousel>
        </LayoutStyle>
  );
}

export default ClientReviews;