import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import Clients from '../../assets/clients.png';

import './ourclientssection.styles.scss';

function OurClientsSection() {
  return (
    <Box className="ourclients-section pb-5">
      <Box className="ourclients-section-wrapper">
        <Typography className="text-info p-4" variant="h6">
          Our Clients
        </Typography>
        <img src={Clients} className="img-fluid" alt="Clients Image" />
      </Box>
    </Box>
  );
}

export default OurClientsSection;
