import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/appointment-bg.png";

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "rgba(57, 84, 124, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  height: "700px",
  margin: "200px 0 100px 0",
};
const FooterContact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Box style={appointmentBanner} sx={{ p: 5 }}>
        <Box>
          <Typography sx={{ color: "#0cebeb", textAlign: "center", letterSpacing: 2 }} variant="h6">
            CONTACT US
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "center", wordSpacing: 2 }} variant="h4">
            Always Contact With Us
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center", py: 5 }}>
          <form onSubmit={handleSubmit} action="#">
            <input
              type="email"
              style={{
                width: "75%",
                fontSize: "16px",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "5px",
                border: "none",
                boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.1",
              }}
              placeholder="Email Address*"
            />{" "}
            <input
              type="text"
              style={{
                width: "75%",
                fontSize: "16px",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "5px",
                border: "none",
                boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.1",
              }}
              placeholder="Subject*"
            />{" "}
            <textarea
              type="text"
              rows="7"
              style={{
                width: "75%",
                fontSize: "16px",
                padding: "20px",
                margin: "20px 0",
                borderRadius: "5px",
                border: "none",
                boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.1",
              }}
              placeholder="Your message*"
            />
            <Button style={{ display: "block", margin: "10px auto" }}>
              <input className="btn-custom" style={{ border: "none", padding: "15px 50px", color: "white" }} type="submit" value="SUBMIT" />
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default FooterContact;
