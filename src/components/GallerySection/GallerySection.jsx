import React from 'react';
import { Box } from '@mui/system';
import { Slide } from 'react-slideshow-image';
import slide1 from '../../assets/slideshow1.jpg';
import slide2 from '../../assets/slideshow2.jpg';
import slide3 from '../../assets/slideshow3.jpg';
import './gallerysection.styles.scss';
import 'react-slideshow-image/dist/styles.css';
import { Typography } from '@material-ui/core';

function GallerySection() {
  const slideRef = React.createRef();
  const [state, setState] = React.useState();

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const slideImages = [slide1, slide2, slide3];
  const slideInfo = [
    {
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: true,
    infinite: true,
    easing: 'ease',
    indicators: (index) => (
      <Box className="indicator text-wrap">
        <Typography className="pt-2 px-2 m-0 fs-5" variant="h6">
          {slideInfo[index].heading}
        </Typography>
        <Typography className="pt-2 px-2 m-0 fs-6">
          {slideInfo[index].body}
        </Typography>
        <Box className="slider"></Box>
      </Box>
    ),
  };

  return (
    <Box className="slideshow">
      <Box className="slide-container">
        <Slide ref={slideRef} {...properties}>
          {slideImages.map((each, index) => (
            <Box key={index} className="each-slide">
              <img className="lazy" src={each} alt="slide" />
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
}

export default GallerySection;
