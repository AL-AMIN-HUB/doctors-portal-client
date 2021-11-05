import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../images/people-1.png";
import image2 from "../../../images/people-2.png";
import image3 from "../../../images/people-3.png";

const Patients = () => {
  return (
    <>
      <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
          <CardContent>
            <Typography variant="p" sx={{ mt: 2, fontSize: 20 }} color="text.secondary" component="div">
              It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to
              using `Content here`, content
            </Typography>

            <Box sx={{ display: "flex", mt: 5, alignItems: "center" }}>
              <Box>
                <CardMedia component="img" style={{ width: "70px", marginRight: "20px" }} image={image1} alt="Paella dish" />
              </Box>
              <Box>
                <Typography variant="h6" style={{ fontWeight: "bold", color: "#3498db" }} component="div">
                  Winson Herry
                </Typography>{" "}
                <Typography sx={{ mt: 1 }} variant="p" component="div" color="text.secondary">
                  California
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>{" "}
      <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
          <CardContent>
            <Typography variant="p" sx={{ mt: 2, fontSize: 20 }} color="text.secondary" component="div">
              It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to
              using `Content here`, content
            </Typography>

            <Box sx={{ display: "flex", mt: 5, alignItems: "center" }}>
              <Box>
                <CardMedia component="img" style={{ width: "70px", marginRight: "20px" }} image={image2} alt="Paella dish" />
              </Box>
              <Box>
                <Typography variant="h6" style={{ fontWeight: "bold", color: "#3498db" }} component="div">
                  Winson Herry
                </Typography>{" "}
                <Typography sx={{ mt: 1 }} variant="p" component="div" color="text.secondary">
                  California
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>{" "}
      <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
          <CardContent>
            <Typography variant="p" sx={{ mt: 2, fontSize: 20 }} color="text.secondary" component="div">
              It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to
              using `Content here`, content
            </Typography>

            <Box sx={{ display: "flex", mt: 5, alignItems: "center" }}>
              <Box>
                <CardMedia component="img" style={{ width: "70px", marginRight: "20px" }} image={image3} alt="Paella dish" />
              </Box>
              <Box>
                <Typography variant="h6" style={{ fontWeight: "bold", color: "#3498db" }} component="div">
                  Winson Herry
                </Typography>{" "}
                <Typography sx={{ mt: 1 }} variant="p" component="div" color="text.secondary">
                  California
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Patients;
