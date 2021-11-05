import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginBottom: "150px", marginTop: "-65px" }}>
      <Container>
        <Grid sx={{ flexGrow: 1 }} container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              backgroundColor: "#1abc9c",

              p: 2,
            }}
            item
            xs={4}
            sm={4}
            md={4}
          >
            <Box sx={{ fontSize: 60, px: 1 }}>
              <i className="far fa-clock"></i>
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="h6">Opening Hours</Typography>
              <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              backgroundColor: "#34495e",

              p: 2,
            }}
            item
            xs={4}
            sm={4}
            md={4}
          >
            <Box sx={{ fontSize: 60, px: 1 }}>
              <i className="fas fa-map-marker-alt"></i>
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="h6">Visit Our Location</Typography>
              <Typography variant="p"> New Market, Khulna-1025</Typography>
            </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              backgroundColor: "#1abc9c",

              p: 2,
            }}
            item
            xs={4}
            sm={4}
            md={4}
          >
            <Box sx={{ fontSize: 60, px: 1 }}>
              <i className="fas fa-phone-volume"></i>
            </Box>
            <Box sx={{ px: 1 }}>
              <Typography variant="h6">Contact Us Now</Typography>
              <Typography variant="p">+880 1906221552</Typography>
            </Box>
          </Grid>{" "}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
