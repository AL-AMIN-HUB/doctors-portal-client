import { Alert, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Booking from "../Booking/Booking";

const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-sierra-19501.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <>
      <Box sx={{ textAlign: "center" }} style={{ margin: "70px" }}>
        <Container>
          <Typography variant="h4" sx={{ color: "#00FFD4", fontWeight: "500" }} component="div" style={{ marginBottom: "70px" }}>
            Available Appointments on {date.toDateString()}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            {bookingSuccess && (
              <Alert sx={{ m: 1 }} severity="success">
                Congratulations! Your appointment was successfully
              </Alert>
            )}
            <Grid container spacing={2}>
              {bookings.map((booking) => (
                <Booking date={date} key={booking.id} booking={booking} setBookingSuccess={setBookingSuccess}></Booking>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AvailableAppointment;
