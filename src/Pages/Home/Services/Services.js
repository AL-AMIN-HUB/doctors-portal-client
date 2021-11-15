import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import Service from "../SingleServices/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://dry-sands-38758.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <Container>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 5, color: "success.main" }} component="div">
            Our Services
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "500", mt: 2 }} component="div">
            Services We Provide
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {services.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
