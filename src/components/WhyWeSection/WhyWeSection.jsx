import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import TrackChangesTwoToneIcon from '@mui/icons-material/TrackChangesTwoTone';
// import * as MuiIcons from '@mui/icons-material';

import './whywesection.styles.scss';

const bulletData = [
  {
    icon: <LaptopMacTwoToneIcon sx={{ fontSize: 50 }} />,
    heading: 'Consulting',
    body: 'A quality audit begins with leading professionals and technology.',
  },
  {
    icon: <AnalyticsTwoToneIcon sx={{ fontSize: 50 }} />,
    heading: 'Analytics',
    body: 'A wide range of complex famulus and restructing-related matters.',
  },
  {
    icon: <TrackChangesTwoToneIcon sx={{ fontSize: 50 }} />,
    heading: 'Strategy',
    body: 'The process of valuing your estate and the right documents in place.',
  },
  {
    icon: <LaptopMacTwoToneIcon sx={{ fontSize: 50 }} />,
    heading: 'Creative',
    body: 'Making decisions on allocating resources pursue the strategy.',
  },
  {
    icon: <LaptopMacTwoToneIcon sx={{ fontSize: 50 }} />,
    heading: 'Production',
    body: 'The essential accounting for income taxes and recognize-tax liabilities.',
  },
  {
    icon: <LaptopMacTwoToneIcon sx={{ fontSize: 50 }} />,
    heading: 'Promotion',
    body: 'Pertain to buyers who purchase services for consumption than resale.',
  },
];

function WhyWeSection() {
  return (
    <Box className="whywe-section pt-5 pb-5">
      <Box className="top-section pb-2">
        <Typography className="whywe-title text-info" variant="h6">
          Why We
        </Typography>
        <Typography variant="h2">We help you to go ahead</Typography>
        <p className="lead introduction text-secondary">
          We transform the in which working capital solutions are delivered to
          large opportunities. Our team combines technology and financial
          services expertise to deliver for our customers.
        </p>
      </Box>
      <Box className="grid-section d-grid gap-3 px-4 mx-4 p-2">
        <Box className="row row-cols-3">
          {bulletData.map((each, index) => {
            return (
              <Box
                className=" d-flex p-4  justtify-content-center align-items-center"
                key={index}
              >
                <Box className="icon-div w-50">{each.icon}</Box>
                <Box className="text-div text-start">
                  <Typography className="text-dark fs-3" variant="h6">
                    {each.heading}
                  </Typography>
                  <Typography className="text-secondary fw-normal">
                    {each.body}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default WhyWeSection;
