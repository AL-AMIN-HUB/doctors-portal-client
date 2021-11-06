import React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Calender = ({ date, setDate }) => {
  return (
    <>
      <Box sx={{ boxShadow: "2px 1px 10px lightgrey", pt: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: "500", mt: 2, textAlign: "center", pb: 5 }} component="div">
          Appointment
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={(newValue) => {
              Date(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default Calender;
