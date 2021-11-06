import * as React from "react";
import { Grid } from "@mui/material";
import Calender from "../../Home/Shared/Calender/Calender";
import Appointments from "../Appointments/Appointments";

const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <>
      <Grid container spacing={5} height="800px">
        <Grid item xs={12} md={6} sm={12}>
          <Calender date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Appointments date={date}></Appointments>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardHome;
