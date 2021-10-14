import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

import './footer.styles.scss';

function Footer() {
  return (
    <Box className="footer">
      <Box className="footer-section-top">
        <Box className="container">
          <Box className="row">
            <Box className="col-xs-12 col-sm-12 col-md-5">
              <Box className="footer-section-info">
                <Box className="footer-section-newsletter">
                  <Typography variant="h6">OUR NEWSLETTER</Typography>
                  <Typography>
                    Be the First to hear about the latest product releases,
                    collaborations and online exclusives. Join the Elisrun email
                    list.
                  </Typography>
                  <form action="" id="email-us" className="d-flex">
                    <input
                      className="form-control my-2 mr-2"
                      aria-label="Enter the name"
                      type="text"
                      placeholder="Enter  the Name"
                      name="name"
                      pattern="^([a-zA-Z]{3,16})$"
                      required="required"
                      spellcheck="false"
                      data-ms-editor="true"
                    />
                    <input
                      className="form-control m-2"
                      aria-label="Enter the email"
                      type="email"
                      placeholder="Enter  the Email"
                      name="email"
                      pattern="[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                      required="required"
                    />
                    <button className="btn m-2">Subscribe</button>
                  </form>
                </Box>
                <Box class="social-links">
                  <h4>Social Links</h4>
                  <a
                    href="https://www.youtube.com/channel/UCS7u3UcBwbD-UE2wugBoWnw/featured?view_as=subscriber"
                    aria-label="Link to the youtube site"
                    class="youtube"
                  >
                    <em class="icon-vr-youtube"></em>
                  </a>
                  <a
                    href="https://www.facebook.com/Elisrun-Technologies-114487873247515/posts/?ref=page_internal"
                    aria-label="Link to the facebook site"
                    class="facebook"
                  >
                    <em class="icon-vr-facebook"></em>
                  </a>
                  <a
                    href="https://www.instagram.com/elisrun__technologies/"
                    aria-label="Link to the instagram site"
                    class="instagram"
                  >
                    <em class="icon-vr-instagram"></em>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/elisrun-technologies-66a1b8192/"
                    aria-label="Link to the linkedin site"
                    class="linkedin"
                  >
                    <em class="icon-vr-linkedin"></em>
                  </a>
                </Box>
              </Box>
            </Box>
            <div
              class="col-xs-6 half-width col-sm-6 col-md-2"
              data-aos="fade-right"
              data-aos-duration="1300"
            >
              <div class="footer-section_links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#ourServices-section">Services</a>
                  </li>
                  <li>
                    <a href="#elisrunVR-section">Elisrun-VR</a>
                  </li>
                  <li>
                    <a href="https://training.elisrun.com">Training</a>
                  </li>
                  <li>
                    <a href="#aboutUs-section">About US</a>
                  </li>
                  <li>
                    <a data-toggle="modal" data-target="#careers">
                      Career
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-xs-6 half-width  col-sm-6 col-md-2"
              data-aos="fade-right"
              data-aos-duration="1600"
            >
              <div class="footer-section_links">
                <h4>policies</h4>
                <ul>
                  <li>
                    <a data-toggle="modal" data-target=".disclaimer">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <a data-toggle="modal" data-target=".terms">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a data-toggle="modal" data-target=".privacy">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a data-toggle="modal" data-target=".cookie-policy">
                      Cookie policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-xs-12 col-sm-12 col-md-3 p-sm-0"
              data-aos="fade-right"
              data-aos-duration="2100"
            >
              <div class="footer-section_links">
                <h4>Contact Us</h4>
                <table class="table-responsive">
                  <caption class="d-none">Contact Details</caption>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                    </tr>
                    <tr>
                      <td>
                        <em class="icon-vr-marker" aria-hidden="true"></em>
                      </td>
                      <td>:</td>
                      <td>
                        <a href="https://www.google.com/maps/place/Elisrun+Technologies+Private+Limited/@12.9236415,77.543807,15z/data=!4m5!3m4!1s0x0:0x82d26f4804ee9fa6!8m2!3d12.9236415!4d77.543807">
                          ELISRUN TECHNOLOGIES PRIVATE LIMITED <br />
                          TG Layout Ittamadu, BSK 3<sup>rd</sup> Stage,
                          Bangalore, Karnataka India - 560085
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em class="icon-vr-email" aria-hidden="true"></em>
                      </td>
                      <td>:</td>
                      <td>
                        <a href="mailto:contact@elisrun.com">
                          contact@elisrun.com
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <em class="icon-vr-smartphone" aria-hidden="true"></em>
                      </td>
                      <td>:</td>
                      <td>
                        <a href="tel:+91-7760755250">+91 7760755250</a> <br />
                        <a href="tel:+91-9632701718">+91 9632701718</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
