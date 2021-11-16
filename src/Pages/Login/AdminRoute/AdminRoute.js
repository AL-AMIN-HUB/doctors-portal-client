import { LinearProgress, Stack } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();

  //   রিলোড মারলে যেন লগ ইন পেজে না নিয়ে যাই এজন্য spinner ব্যবহার করেছি এখানে
  if (isLoading) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>
    );
  }
  if (user.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
