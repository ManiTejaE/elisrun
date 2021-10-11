import React from 'react';
import { Box } from '@mui/system';
import GallerySection from '../../components/GallerySection/GallerySection';
import WhyWeSection from '../../components/WhyWeSection/WhyWeSection';

import './homepage.styles.scss';
import OurClientsSection from '../../components/OurClientsSection/OurClientsSection';
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection';

function HomePage() {
  return (
    <Box className="home-page">
      <GallerySection />
      <WhyWeSection />
      <OurClientsSection />
      <TestimonialsSection />
    </Box>
  );
}

export default HomePage;
