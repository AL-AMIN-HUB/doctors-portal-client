import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe("pk_test_51JvlxcI1c7oMcKxkAn6I3ImYYnwpy8iin8S0QeLb7iwO0EAjnVn9FsWVoZ0hRv747BYCkoUds51TgidSzoarSIOB00Ik2KN4Ho");

const Payment = () => {
  const { appointmentId } = useParams();

  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`https://dry-sands-38758.herokuapp.com/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "30px" }}>
        <h2>
          Please Pay: {appointment?.patientName} for {appointment?.serviceName}
        </h2>
        <h4>Price: ${appointment?.price}</h4>
      </div>

      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

//
/* 1. install stripe and strip-react
2. set publishable key
3. Elements
4. Checkout Form
------------
5.create payment method

 */
