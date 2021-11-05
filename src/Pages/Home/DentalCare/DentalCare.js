import { CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";

const DentalCare = () => {
  return (
    <Container>
      <Grid container spacing={2} style={{ margin: "100px 0" }}>
        <Grid item xs={12} sm={12} md={6}>
          <CardMedia component="img" width="100%" height="600px" image={treatment} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography sx={{ my: 5, fontWeight: "500" }} variant="h3">
            Exceptional Dental <br /> Care, on Your Terms
          </Typography>{" "}
          <Typography color="text.secondary" sx={{ display: "block", lineHeight: "30px", mt: 2, mb: 5, pb: 4 }} variant="p">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsumis that it has more-or-less normal distribution of letters as opposed to using 'Content here , content here; making it
            look like readable English. Many desktop publishing packages and web page. Dental Advisor asked 24 dental professionals and 107 patients
            to complete a clinical evaluation of Crest Whitening Emulsions. Hear what dental professionals and patients had to say about this take
            home whitening product.
          </Typography>
          <MuiButton sx={{ mt: 5 }}>Learn More</MuiButton>
          {/* <Button className="btn-custom" sx={{ mt: 5, py: 2, px: 4, color: "white" }}>
            Learn More
          </Button> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
