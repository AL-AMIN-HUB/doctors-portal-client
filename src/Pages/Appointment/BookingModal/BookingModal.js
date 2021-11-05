import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";
//
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ booking, bookingModal, handleBookingClose, date }) => {
  const { name, time } = booking;
  const handleBookingSubmit = (e) => {
    alert("Submitting");

    // collect data

    // send to the server

    handleBookingClose();
    e.preventDefault();
  };
  return (
    <div>
      {" "}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bookingModal}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={bookingModal}>
          <Box sx={style}>
            <Typography sx={{ color: "#00FFD4", textAlign: "center" }} id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookingSubmit}>
              <TextField disabled sx={{ width: "100%", m: 1 }} id="outlined-size-small" defaultValue={time} size="small" />
              <TextField sx={{ width: "100%", m: 1 }} id="outlined-size-small" placeholder="Your Name" size="small" />
              <TextField sx={{ width: "100%", m: 1 }} id="outlined-size-small" placeholder="Your Email" size="small" />{" "}
              <TextField sx={{ width: "100%", m: 1 }} id="outlined-size-small" placeholder="Your Phone Number" size="small" />
              <TextField disabled sx={{ width: "100%", m: 1 }} id="outlined-size-small" defaultValue={date.toDateString()} size="small" />
              <Box sx={{ textAlign: "end", mt: 2 }}>
                <MuiButton type="submit" sx={{ color: "white" }}>
                  Send
                </MuiButton>
                {/*  <Button className="btn-custom" type="submit" sx={{ px: 5, py: 1, color: "white" }} variant="inherit">
                  SEND
                </Button> */}
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
