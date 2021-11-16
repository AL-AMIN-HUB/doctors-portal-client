import React, { useState } from "react";
import { TextField, Input, Button } from "@mui/material";
import swal from "sweetalert";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://dry-sands-38758.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal({
            title: "Yehh!",
            text: "You added doctors information on your database",
            icon: "success",
            button: "Okay!",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  /* const handleOnChange = (e) => {
  নিচের এই কাজ টা একলাইনে করা হয়েছে 
    setName = e.target.value;
    setEmail = e.target.value;
  }; */

  return (
    <div style={{ width: "400px", margin: "0 auto" }}>
      <h3 style={{ textAlign: "center" }}>Add A Doctor</h3>
      <form onSubmit={handleSubmit} action="#">
        <TextField
          onChange={(e) => setName(e.target.value)}
          type="text"
          sx={{ width: 1, m: 1 }}
          id="standard-basic"
          label="Name"
          variant="standard"
          required
        />{" "}
        <br />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          sx={{ width: 1, m: 1 }}
          id="standard-basic"
          label="Email"
          variant="standard"
          required
        />{" "}
        <br />
        <Input onChange={(e) => setImage(e.target.files[0])} sx={{ m: 1, width: 1 }} accept="image/*" type="file" />
        <br />
        <Button sx={{ m: 1 }} variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
