import React, { useEffect } from "react";
import axios from "axios";
// import DataGridDemo from "./Table";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import Date from "../Date";
import Excel from "./excel";
import Table1 from "./Table1";
import Appbar from "../Appbar";
import dayjs from "dayjs";
import { Grid } from "@mui/material";

function Dailyreport() {
  const [datevalue, setDateValues] = useState([
    dayjs().format("YYYY-MM-DD"),
    dayjs().format("YYYY-MM-DD"),
  ]);
  console.log(dayjs().format("YYYY-MM-DD"));
  const [data, setData] = useState([]);

  // console.log(datevalue);
  // const onDateChange = (data) => {
  //   console.log(data);
  // setDate(data);
  // };
  async function getData(datevalue1, datevalue2) {
    try {
      console.log(datevalue1);
      const url =
        "http://localhost:8000/daily_report?entry_date1=" +
        datevalue1 +
        "&entry_date2=" +
        datevalue2;
      console.log(url);
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "localhost:3000",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "X- PINGOTHER, Content - Type",
          "Access-Control-Max-Age": 86400,
        },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData(datevalue[0], datevalue[1]);
  }, [datevalue]);

  return (
    <div>
      <Appbar />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        // rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid container direction="column">
          <Grid item>
            <h2>Daily Report</h2>
          </Grid>
        </Grid>
        {/* <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={35}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
            > */}{" "}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6} sm={6} md={3} lg={3} justifyContent="flex-start">
            <Date setDateValues={setDateValues} />
          </Grid>

          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Excel data={data} />
          </Grid>
        </Grid>
        <Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Table1 data={data} spacing={{ m: "10px" }} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dailyreport;
