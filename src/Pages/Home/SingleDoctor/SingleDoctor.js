import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const SingleDoctor = ({ doctor }) => {
  const { image, name } = doctor;
  return (
    <React.Fragment>
      <Grid item xs={4} sm={8} md={4}>
        <Card sx={{ p: 3, boxShadow: "1px 2px 10px rgba(0,0,0,0.05)" }}>
          <CardMedia
            sx={{ width: "320px", height: "320px", borderRadius: "50%", display: "block", mx: "auto" }}
            component="img"
            image={`data:image/jpeg;base64,${image}`}
            alt="Doctor image"
          />
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default SingleDoctor;
