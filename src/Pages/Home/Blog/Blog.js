import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BlogPost from "../BlogPost/BlogPost";

const Blog = () => {
  return (
    <Container>
      <Box>
        <Typography sx={{ textAlign: "center", color: "#2e7d32", fontWeight: "bold" }} variant="h6">
          OUR BLOG
        </Typography>{" "}
        <Typography sx={{ textAlign: "center", fontWeight: "500" }} variant="h4">
          From Our Blog News
        </Typography>
      </Box>
      <Box style={{ marginBottom: "120px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <BlogPost></BlogPost>
        </Grid>
      </Box>
    </Container>
  );
};

export default Blog;
