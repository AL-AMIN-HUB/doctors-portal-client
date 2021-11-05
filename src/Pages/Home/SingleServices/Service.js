import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const Service = (props) => {
  const { name, img, desc } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4} sx={{ mt: 10 }}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardContent>
          <CardMedia component="img" style={{ width: "auto", height: "80px", margin: "5px auto" }} image={img} alt="Paella dish" />
          <Typography variant="h5" sx={{ mt: 2 }} component="div">
            {name}
          </Typography>

          <Typography color="text.secondary" sx={{ pt: 3, fontSize: "16px" }} variant="body2">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
