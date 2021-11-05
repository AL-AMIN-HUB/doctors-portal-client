import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import image1 from "../../../images/people-1.png";
import image2 from "../../../images/people-2.png";

const BlogPost = () => {
  return (
    <>
      <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
        <Card className=" card-custom-bg" style={{ boxShadow: "1px 1px 10px rgba(0,0,0,0.1)", color: "white" }} sx={{ p: 2, height: "100%" }}>
          <Box sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardContent sx={{ py: 3 }}>
              <Typography variant="h5" sx={{ mt: 2, fontWeight: "500" }} component="div">
                Rashed Kabir{" "}
              </Typography>{" "}
              <Typography variant="h5" sx={{ mt: 2 }} component="div">
                14 Aug 2021{" "}
              </Typography>{" "}
              <Typography variant="h5" sx={{ fontWeight: "bold", my: 5 }} component="div">
                Check at least a doctor in a year for your teeth
              </Typography>
              <i className="fas fa-angle-double-right" style={{ fontSize: "50px" }}></i>
            </CardContent>
          </Box>
        </Card>
      </Grid>{" "}
      <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
        <Card style={{ boxShadow: "1px 1px 10px rgba(0,0,0,0.1)" }} sx={{ p: 2, height: "100%" }}>
          <Box sx={{ display: "flex", mt: 5, alignItems: "center" }}>
            <Box>
              <CardMedia component="img" style={{ width: "70px", marginRight: "20px" }} image={image1} alt="Paella dish" />
            </Box>
            <Box>
              <Typography variant="h6" style={{ fontWeight: "bold", color: "#3498db" }} component="div">
                Dr. Gregory
              </Typography>{" "}
              <Typography sx={{ mt: 1 }} variant="p" component="div" color="text.secondary">
                04 Nov 21
              </Typography>
            </Box>
          </Box>
          <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardContent sx={{ py: 3 }}>
              <Typography variant="h5" sx={{ mt: 2, fontWeight: "500" }} component="div">
                2 times of brush in a day can keep you healthy{" "}
              </Typography>{" "}
              <Typography variant="p" sx={{ my: 2, fontSize: 20 }} color="text.secondary" component="div">
                It is a long established fact that by the readable content of a lot layout. The point of using
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </Grid>{" "}
      <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
        <Card style={{ boxShadow: "1px 1px 10px rgba(0,0,0,0.1)" }} sx={{ p: 2, height: "100%" }}>
          <Box sx={{ display: "flex", mt: 5, alignItems: "center" }}>
            <Box>
              <CardMedia component="img" style={{ width: "70px", marginRight: "20px" }} image={image2} alt="Paella dish" />
            </Box>
            <Box>
              <Typography variant="h6" style={{ fontWeight: "bold", color: "#3498db" }} component="div">
                Dr. Laili
              </Typography>{" "}
              <Typography sx={{ mt: 1 }} variant="p" component="div" color="text.secondary">
                03 Nov 21
              </Typography>
            </Box>
          </Box>
          <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardContent sx={{ py: 3 }}>
              <Typography variant="h5" sx={{ mt: 2, fontWeight: "500" }} component="div">
                The tooth cancer is taking a challenge{" "}
              </Typography>{" "}
              <Typography variant="p" sx={{ my: 2, fontSize: 20 }} color="text.secondary" component="div">
                It is a long established fact that by the readable content of a lot layout. The point of using
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </Grid>
    </>
  );
};

export default BlogPost;
