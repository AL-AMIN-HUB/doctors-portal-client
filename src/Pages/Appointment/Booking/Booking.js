import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ date, booking }) => {
  const [bookingModal, setBookingModal] = React.useState(false);
  const handleBookingOpen = () => setBookingModal(true);
  const handleBookingClose = () => setBookingModal(false);
  const { name, space, time } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={2} sx={{ py: 5, px: 2 }}>
          <Typography sx={{ mb: 1, color: "#00FFD4", fontWeight: "bold" }} variant="h5">
            {name}
          </Typography>{" "}
          <Typography sx={{ fontWeight: "500" }} variant="p">
            {time}
          </Typography>
          <Typography color="text.secondary" sx={{ display: "block", mb: 2 }} variant="caption">
            {space} Spaces Available
          </Typography>
          <MuiButton onClick={handleBookingOpen} sx={{ borderRadius: "0", mt: 3 }}>
            Book Appointment
          </MuiButton>
          {/*  <Button onClick={handleBookingOpen} className="btn-custom" sx={{ borderRadius: "0", px: 3, py: 2, mt: 3 }} variant="contained">
            BOOK APPOINTMENT
          </Button> */}
        </Paper>
      </Grid>
      <BookingModal date={date} booking={booking} bookingModal={bookingModal} handleBookingClose={handleBookingClose}></BookingModal>
    </>
  );
};

export default Booking;
