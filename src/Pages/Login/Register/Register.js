import { Container, Grid, CardMedia, Typography, TextField, Button, Alert } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import login from "../../../images/login.png";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, isLoading, user, error } = useAuth();
  const handleOnChange = (e) => {
    // শুধুমাত্র আবজেক্ট থাকলে এরকম করে করলেও হবে ,, for code cleaner
    const field = e.target.name;
    const value = e.target.value;
    //আগের ভ্যালু গুলা কপি করেছি এখানে
    const newLoginData = { ...loginData };
    // তারপর প্রত্যেক ফিল্ড এর ভ্যালু নিচ্ছি।
    newLoginData[field] = value;
    // তারপর স্টেটে সেট করে দিতেছি
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password is incorrect,, please enter your correct password");
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
  };

  //   progress

  return (
    <Box style={{ height: "100vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid sx={{ mt: 5, boxShadow: "1px 2px 10px rgba(0,0,0,0.1)" }} item xs={12} md={6}>
            {user?.email ? (
              <Box style={{ marginTop: "50%", textAlign: "center" }}>
                <NavLink style={{ textDecoration: "none" }} to="/home">
                  <Button variant="text">Please Back Home</Button>
                </NavLink>
                {user?.email && (
                  <Alert sx={{ m: 1 }} severity="success">
                    Congratulations! You're Successfully Created Account
                  </Alert>
                )}
              </Box>
            ) : (
              <Box>
                {!isLoading && (
                  <form action="#" onSubmit={handleLoginSubmit}>
                    <Typography sx={{ width: "75%", textAlign: "center" }} variant="h5">
                      Register
                    </Typography>
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      name="email"
                      onChange={handleOnChange}
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
                      onChange={handleOnChange}
                      label="Password"
                      variant="standard"
                    />{" "}
                    <br />
                    <TextField
                      sx={{ width: "75%", m: 1 }}
                      type="password"
                      id="standard-basic"
                      name="password2"
                      onChange={handleOnChange}
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
              </Box>
            )}
            {isLoading && (
              <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                <LinearProgress color="secondary" />
              </Stack>
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
