import { Box } from '@mui/system';
import React from 'react';
import GallerySection from '../../components/GallerySection/GallerySection';

import './homepage.styles.scss';

function HomePage() {
  return (
    <Box className="home-page">
      <GallerySection />
    </Box>
  );
}

export default HomePage;
