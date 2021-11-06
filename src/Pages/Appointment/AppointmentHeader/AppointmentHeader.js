import { CardMedia, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chair from "../../../images/chair.png";
import Calender from "../../Home/Shared/Calender/Calender";
import bg from "../../../images/bg.png";

const headerBox = {
  background: `url(${bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no - repeat",
  backgroundSize: "cover",
  height: "800px",
};

const AppointmentHeader = ({ date, setDate }) => {
  return (
    <Box style={headerBox} sx={{ display: "flex", alignItems: "center" }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5} sx={{ mt: 5 }}>
            <Calender date={date} setDate={setDate}></Calender>
          </Grid>
          <Grid item xs={12} md={7}>
            <CardMedia component="img" width="100%" image={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
