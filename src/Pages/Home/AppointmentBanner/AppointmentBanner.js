import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import { Container, Typography } from "@mui/material";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundColor: "rgba(57, 84, 124, 0.8)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: "200px",
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container style={appointmentBanner}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{ width: "600px", marginTop: "-150px" }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography sx={{ mb: 5 }} variant="h6" style={{ color: "#00FFD4", fontWeight: "bold" }}>
                APPOINTMENT
              </Typography>{" "}
              <Typography variant="h4" sx={{ color: "white", mb: 5 }}>
                {" "}
                Make an Appointment today
              </Typography>{" "}
              <Typography variant="h6" sx={{ color: "white", fontSize: "20px", fontWeight: "400", my: 5 }}>
                {" "}
                It is long established fact that a reader will be distractedly the readable content of a page when looking at its
              </Typography>
              <MuiButton>Learn More</MuiButton>
              {/*  <Button className="btn-custom" sx={{ px: 4, py: 2 }} variant="contained">
                Learn More
              </Button> */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
