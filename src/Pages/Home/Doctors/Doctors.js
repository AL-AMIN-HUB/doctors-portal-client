import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleDoctor from "../SingleDoctor/SingleDoctor";
import CircularProgress from "@mui/material/CircularProgress";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [progressing, setProcessing] = useState(false);

  useEffect(() => {
    setProcessing(true);
    fetch("https://dry-sands-38758.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .finally(() => setProcessing(false));
  }, []);
  return (
    <div style={{ textAlign: "center", margin: "100px 0" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "500" }}>
        Our Doctors
      </Typography>
      {progressing ? (
        <CircularProgress />
      ) : (
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {doctors.map((doctor) => (
                <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default Doctors;
