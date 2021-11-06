import React from "react";
/* import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom"; */

import { MuiNavbar, NavItem } from "mui-navbar";
import { AppBar, Button } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";

const Navigation = () => {
  const { logOut, user } = useAuth();
  return (
    <>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Home</Button>
            </Link>{" "}
            <Link to="/appointment" style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">AppointMent</Button>
            </Link>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box> */}
      <AppBar>
        <MuiNavbar logoText="Doctors Portal">
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/appointment">Appointment</NavItem>
          <NavItem to="/Blog">Blog</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          {user?.email ? (
            <>
              <NavItem to="/dashboard">Dashboard</NavItem>
              <Button onClick={logOut} variant="inherit">
                <NavItem sx={{ color: "white" }}>
                  <i className="fas fa-sign-out-alt"></i> Log Out
                </NavItem>
              </Button>{" "}
            </>
          ) : (
            <Button variant="inherit">
              <NavItem to="/login">Login</NavItem>
            </Button>
          )}
        </MuiNavbar>
      </AppBar>
    </>
  );
};

export default Navigation;
