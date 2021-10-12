import { Box } from '@mui/system';
import React from 'react';

import './footer.styles.scss';

const footerData = [
  {
    heading: 'IXON Cloud',
    headingLink: '/',
    children: [
      {
        name: 'All features',
        link: '/',
      },
      {
        name: 'Connectivity products',
        link: '/',
      },
      {
        name: 'Cloud infrastructure',
        link: '/',
      },
      {
        name: 'Platform status',
        link: '/',
      },
      {
        name: 'Security & ISO 27001 ISMS',
        link: '/',
      },
      {
        name: 'Release notes',
        link: '/',
      },
    ],
  },
  {
    heading: 'Get started',
    headingLink: '/',
    children: [
      {
        name: 'Step by step guide',
        link: '/',
      },
      {
        name: 'Interactive product tour',
        link: '/',
      },
      {
        name: 'Request a live demo',
        link: '/',
      },
      {
        name: 'Find a distributor',
        link: '/',
      },
      {
        name: 'Request expert consultation',
        link: '/',
      },
      {
        name: 'Contact us',
        link: '/',
      },
    ],
  },
  {
    heading: 'Technical Support',
    headingLink: '/',
    children: [
      {
        name: 'Support portal',
        link: '/',
      },
      {
        name: 'Developer portal',
        link: '/',
      },
      {
        name: 'IXON Community forum',
        link: '/',
      },
      {
        name: 'Knowledge articles',
        link: '/',
      },
      {
        name: 'Videos',
        link: '/',
      },
    ],
  },
  {
    heading: 'Join IXON',
    headingLink: '/',
    children: [
      {
        name: 'Create your free account',
        link: '/',
      },
      {
        name: 'Request IXrouter trial kit',
        link: '/',
      },
    ],
  },
];

function Footer() {
  return <Box className="footer">
    {footerData.map((each, index)=> {

        return (
            <Box className="footer-col">
            
            </Box>
        )
    })

    }
  </Box>;
}

export default Footer;
