import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";
import useAuth from "../../../hooks/useAuth";
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

const BookingModal = ({ booking, bookingModal, handleBookingClose, date, setBookingSuccess }) => {
  const { name, time, price } = booking;

  const { user } = useAuth();
  const initialInfo = { patientName: user.displayName, email: user.email, phone: "" };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  // handle on blur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    // console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // console.log(appointment);

    // send to the server
    fetch("https://dry-sands-38758.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    handleBookingClose();
    e.preventDefault();
  };

  return (
    <div>
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
              <TextField
                name="patientName"
                onBlur={handleOnBlur}
                sx={{ width: "100%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user.displayName}
                size="small"
              />
              <TextField
                name="email"
                onBlur={handleOnBlur}
                sx={{ width: "100%", m: 1 }}
                id="outlined-size-small"
                defaultValue={user.email}
                size="small"
              />{" "}
              <TextField
                name="phone"
                onBlur={handleOnBlur}
                sx={{ width: "100%", m: 1 }}
                id="outlined-size-small"
                placeholder="Your Phone Number"
                required
                size="small"
              />
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
