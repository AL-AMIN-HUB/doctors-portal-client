import React from "react";
import Box from "@mui/material/Box";
import { Grid, Container, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} color="text.secondary" columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={4} md={3}>
            <Box sx={{ pt: 5 }}>
              <li>Emergency Dental Container</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases</li>
              <li>Tooth Extractions</li>
              <li>Check Up</li>
            </Box>
          </Grid>{" "}
          <Grid item xs={4} sm={4} md={3}>
            <Box>
              <Typography sx={{ color: "#09E585 " }} variant="h6">
                Services
              </Typography>
              <li>Emergency Dental Container</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases</li>
              <li>Tooth Extractions</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>About</li>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={3}>
            <Box>
              <Typography sx={{ color: "#09E585 " }} variant="h6">
                Oral Health
              </Typography>
              <li>Emergency Dental Container</li>
              <li>Check Up</li>
              <li>Treatment of Personal Diseases</li>
              <li>Tooth Extractions</li>
              <li>Appointment</li>
              <li>Emergency Doctors</li>
              <li>Ambulance</li>
            </Box>
          </Grid>{" "}
          <Grid item xs={4} sm={4} md={3}>
            <Box>
              <Typography sx={{ color: "#09E585 " }} variant="h6">
                Our Address
              </Typography>
              <Typography variant="p">New Market - 1045 Hudson, Khulna</Typography>
              <Typography sx={{ display: "block", mt: 5, pt: 3 }} variant="p">
                <i className="fab  footer-icon fa-facebook-f"></i>
                <i className="fab footer-icon fa-twitter"></i>
                <i className="fab footer-icon fa-google"></i>
              </Typography>
              <Box sx={{ mt: 5, pt: 5 }}>
                <Typography sx={{ mt: 5, display: "block" }} color="text.secondary" variant="h6">
                  Call Now
                </Typography>{" "}
                <Typography sx={{ background: "#09E585 ", color: "white", display: "inline-block", py: 1, px: 2 }} variant="h6">
                  +8801906221552
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Typography color="text.secondary" sx={{ textAlign: "center", my: 5 }} variant="h6">
          &copy;copyright 2021, all right reserved by Al Amin
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
