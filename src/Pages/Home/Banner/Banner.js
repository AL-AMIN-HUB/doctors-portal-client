import React from "react";
import Typewriter from "typewriter-effect";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";

const BannerImg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  height: "800px",
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Box style={BannerImg}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{ ...verticalCenter, textAlign: "left" }} item xs={12} md={6}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: "500", color: "#100549", mb: 5 }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Medical Doctors Portal").pauseFor(1000).deleteAll().typeString(" Your New Smile Starts Here").start();
                  }}
                />
              </Typography>
              <Typography variant="p" sx={{ display: "block", my: 3 }} color="text.secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis sequi necessitatibus in minus eligendi rerum eveniet. Eligendi
                dolorum repellat odio autem aut omnis sint, earum architecto! Temporibus sunt modi officia.
              </Typography>
              <MuiButton>GET APPOINTMENT</MuiButton>
              {/*  <Button className="btn-custom" sx={{ px: 4, py: 2 }} variant="contained">
                Get Appointment
              </Button> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{ width: "100%" }} src={chair} alt="Chair" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
