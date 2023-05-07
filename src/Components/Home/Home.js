import React, { useState } from "react";
import { Paper } from "@mui/material";
// import CJS from "./chart";
import Chart from "./chart";
// import { useState } from "react";
import Appbar from "../Appbar";
import { Box } from "@mui/material";
import Chart2 from "./chart2";
import dayjs from "dayjs";
import { Container } from "@mui/material";
// import Date1 from "./date1";
import Linechart from "./linechart";
import { Grid } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
// import Home from ".Comp/Home";
// const [datevalue, setDateValues] = useState([
//   dayjs().format("YYYY-MM-DD"),
//   dayjs().format("YYYY-MM-DD"),
// ]);

const Home = () => {
  const [datevalue, setDateValues] = useState([
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
  ]);
  return (
    <div>
      <Appbar />
      <Grid
        container
        lg={12}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          justifyContent="center"
          alignItems="center"
        >
          <h2>Home </h2>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={{ xs: 2, md: 3 }}
            lg={12}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Container maxWidth="sm">
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Paper elevation={0}>
                    <Chart
                      datevalue={datevalue}
                      setDateValues={setDateValues}
                    />
                  </Paper>
                </Box>
              </Container>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Container maxWidth="sm">
                <Box sx={{ width: "100%", height: "100%" }}>
                  <Paper elevation={0}>
                    <Chart2 datevalue={datevalue} />
                  </Paper>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} lg={12} md={12}>
            <Linechart />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
