import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/our-story_image.jpg';
import './ourstorysection.styles.scss';

function OurStorySection() {
  return (
    <Box className="ourstory-section text-justify row">
      <Box className="section-wrapper d-flex flex-row justify-content-center align-items-center ">
        <Box className="left-section col-md-6 col-sm-6 col-xs-12">
          <Box className="image-wrapper">
            <Box className="image">
              <img src={Image} alt="our story image" />
            </Box>
          </Box>
        </Box>
        <Box className="right-section col-md-6 col-sm-6 col-xs-12">
          <Box className="content">
            <Typography variant="h6" className="text-info">
              Our Story
            </Typography>
            <Typography variant="h3" className="fw-normal text-info heading">
              A WORLD-LEADING DESIGN, ENGINEERING AND PROJECT-MANAGEMENT
              CONSULTANCY
            </Typography>
            <Typography className="text-secondary">
              Our lived environment is facing rapid change; to face these
              challenges, we are radically transforming the way infrastructure
              is designed, delivered and operated. Our aim is to help create a
              world that is diverse, sustainable, full of thriving communities
              and working better for all.
            </Typography>
            <Link to="/" className="link pt-5">
              Find out more
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OurStorySection;
