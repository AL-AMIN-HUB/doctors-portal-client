import { Container, Grid, CardMedia, Typography, TextField, Button, Alert, Stack, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import MuiButton from "../../../StyledComponent/MuiButton/MuiButton";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { error, loginUser, isLoading, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

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
    loginUser(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
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
            <form action="#" onSubmit={handleLoginSubmit}>
              <Typography sx={{ width: "75%", textAlign: "center" }} variant="h5">
                Login
              </Typography>
              <TextField
                sx={{ width: "75%", m: 1 }}
                name="email"
                onBlur={handleOnChange}
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
                onBlur={handleOnChange}
                label="Password"
                variant="standard"
              />{" "}
              <br />
              <MuiButton sx={{ width: "75%", m: 1 }} type="submit">
                Sign in
              </MuiButton>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User ? Please Register</Button>
              </NavLink>
            </form>
            <Box sx={{ textAlign: "center", width: "75%", mt: 5 }}>
              <Typography>------------------------------ OR -----------------------------</Typography>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button onClick={handleGoogleSignIn} className="btn-custom" sx={{ color: "white", py: 1, px: 2 }} variant="inherit">
                  Sign In With Google
                </Button>
              </NavLink>
            </Box>

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

export default Login;
