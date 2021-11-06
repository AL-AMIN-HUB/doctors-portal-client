import { Container, Grid, CardMedia, Typography, TextField, Button, Alert } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import login from "../../../images/login.png";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, error } = useAuth();

  const handleOnBlur = (e) => {
    // শুধুমাত্র আবজেক্ট থাকলে এরকম করে করলেও হবে ,, for code cleaner
    const field = e.target.name;
    const value = e.target.value;
    // যেটাকে আপডেট করছি ঐটাকে নিয়ে আসার আগে স্টেটে আগের বাকি যেই ভ্যালু  আছে ঐগুলা কপি করেছি এখানে।
    const newLoginData = { ...loginData };
    // তারপর প্রত্যেক ফিল্ড এর ভ্যালু নিচ্ছি।
    newLoginData[field] = value;
    // তারপর স্টেটে সেট করে দিতেছি
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const history = useHistory();

  const handleLoginSubmit = (e) => {
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();

    if (loginData.password !== loginData.password2) {
      alert("Your password is incorrect,, please enter your correct password");
    }
  };

  //   progress

  return (
    <Box style={{ height: "100vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 5, boxShadow: "1px 2px 10px rgba(0,0,0,0.1)" }} item xs={12} md={6}>
            {isLoading && (
              <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                <LinearProgress color="secondary" />
              </Stack>
            )}

            {!isLoading && (
              <form action="#" onSubmit={handleLoginSubmit}>
                <Typography sx={{ width: "75%", textAlign: "center" }} variant="h5">
                  Register
                </Typography>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  name="name"
                  onBlur={handleOnBlur}
                  type="text"
                  id="standard-basic"
                  label="Your Name"
                  variant="standard"
                />{" "}
                <br />{" "}
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  name="email"
                  onBlur={handleOnBlur}
                  type="email"
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />{" "}
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  name="password"
                  onBlur={handleOnBlur}
                  label="Password"
                  variant="standard"
                />{" "}
                <br />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  type="password"
                  id="standard-basic"
                  name="password2"
                  onBlur={handleOnBlur}
                  label="Confirm Password"
                  variant="standard"
                />{" "}
                <br />
                <MuiButton sx={{ width: "75%", m: 1 }} type="submit">
                  Create Account
                </MuiButton>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">Already Registered ? Please Login</Button>
                </NavLink>
              </form>
            )}

            {error && (
              <Alert sx={{ m: 1 }} severity="error">
                {error}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia component="img" width="100%" image={login} alt="Paella dish" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
