import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [adminSuccess, setAdminSuccess] = useState(false);
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setAdminSuccess(true);
        }
        console.log(data);
      });
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
    e.target.value = "";
  };
  return (
    <div style={{ textAlign: "center" }}>
      {adminSuccess && (
        <Alert sx={{ m: 1 }} severity="success">
          Yes! Successfully making New Admin
        </Alert>
      )}
      <Typography variant="h3" sx={{ fontWeight: "500" }}>
        Make an Admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField label="Admin Email" sx={{ width: "30%", mt: 5 }} type="email" onBlur={handleOnBlur} variant="standard" />
        <Button type="submit" sx={{ color: "white", py: 2, px: 3, mx: 2, mt: 5 }} className="btn-custom">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
