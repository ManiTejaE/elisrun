import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

import './contactus.styles.scss';

function ContactUs() {
  return (
    <Box className="contact-us ">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12 p-0 px-sm-3">
            <Box className="heading-wrapper">
              <Typography variant="h2" className="">
                CONTACT US
              </Typography>
            </Box>
            <Box className="form-wrapper">
              <form>
                <Box className="contact-row">
                  <Box className="form-group col-md-6 ">
                    <label for="name">First Name</label>
                    <input
                      id="name"
                      className="form-control"
                      type="text"
                      placeholder="Enter your First Name"
                      pattern="^([a-zA-Z]{3,16})$"
                      name="first_name"
                      spellCheck="false"
                      required
                    />
                  </Box>
                  <Box className="form-group col-md-6 ">
                    <label for="last_name">Last Name</label>
                    <input
                      id="last_name"
                      className="form-control"
                      type="text"
                      placeholder="Enter your Last Name"
                      pattern="^([a-zA-Z]{3,16})$"
                      name="last_name"
                      spellCheck="false"
                      required
                    />
                  </Box>
                </Box>
                <Box className="contact-row">
                  <Box className="form-group col-md-6 ">
                    <label for="mobile">Mobile</label>
                    <input
                      id="Mobile"
                      type="text"
                      class="form-control"
                      placeholder="9876543210"
                      pattern="^([0-9]{10,10})$"
                      title="Mobile number"
                      required="required"
                      name="mobile"
                      spellcheck="false"
                      data-ms-editor="true"
                    />
                  </Box>
                  <Box className="form-group col-md-6 ">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      className="form-control"
                      type="text"
                      placeholder="john@jshealth.com"
                      pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                      name="first_name"
                      spellCheck="false"
                      required
                    />
                  </Box>
                </Box>
                <Box className="contact-row">
                  <Box className="form-group col-md-12 ">
                    <label for="Message">Message</label>
                    <textarea
                      class="form-control"
                      rows="4"
                      id="Message"
                      placeholder="Type your message here"
                      name="message"
                      pattern="[\s\S]{6,300}"
                      required="required"
                      spellcheck="false"
                      data-ms-editor="true"
                    ></textarea>
                  </Box>
                </Box>
                <Box class="form-group text-center">
                  <button>Send Message</button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactUs;
