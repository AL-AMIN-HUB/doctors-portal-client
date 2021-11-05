import { CardMedia, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import queue from "../../../images/qoute.png";
import Patients from "../Patients/Patients";

const Testimonial = () => {
  const bg = {
    backgroundColor: "#F6F6F6",
    padding: "50px 0 100px 0",
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ ...bg, margin: "100px 0" }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mt: 5, color: "success.main" }} component="div">
                TESTIMONIAL
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: "500", mt: 2 }} component="div">
                What's Our Patients <br /> Says
              </Typography>
            </Box>
            <Box>
              <CardMedia component="img" sx={{ width: "350px" }} image={queue} alt="Paella dish" />
            </Box>
          </Box>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Patients></Patients>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Testimonial;
