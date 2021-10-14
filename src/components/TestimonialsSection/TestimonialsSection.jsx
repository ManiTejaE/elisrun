import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

import PlaceholderImage from '../../assets/profile placeholder.jpg';
import './testimonialssection.styles.scss';

const testimonialsData = [
  {
    image: PlaceholderImage,
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qula non numquam.',
    name: 'Jack Johnson',
  },
  {
    image: PlaceholderImage,
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qula non numquam.',
    name: 'Jessica Robinson',
  },
  {
    image: PlaceholderImage,
    body: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qula non numquam.',
    name: 'Edward Klarson',
  },
];

function TestimonialsSection() {
  return (
    <Box className="testimonials-section p-5">
      <Box className="testimonials-section-wrapper">
        <Box className="top-section pb-5">
          <Typography className="text-info p-3" variant="h6">
            Clients Testimonials
          </Typography>
          <Typography variant="h2">What Our Clients Say</Typography>
          <p className="lead text-secondary">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus quod maxime placeat facere possimus, omnis
            voluptas assumenda.
          </p>
        </Box>
        <Box className="bottom-section px-5 pb-5">
          <Box className="testimonials-wrapper">
            {testimonialsData.map((each, index) => {
              return (
                <Box className="testimonial" key={index}>
                  <img
                    src={each.image}
                    alt=""
                    className="img-fluid profile-img"
                  />
                  <Card sx={{ maxWidth: '30%' }} key={index}>
                    <CardContent className="testimonial-body">
                      <Typography
                        className="text-secondary fs-6 testimonial-text"
                        variant="body2"
                      >
                        {each.body}
                      </Typography>
                      <Typography className="fs-6 p-2 text-end testimonial-name">
                        {each.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialsSection;
