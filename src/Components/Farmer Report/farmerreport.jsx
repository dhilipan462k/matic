import React from "react";
import { useState } from "react";
import { PhoneAndroid } from "@mui/icons-material";
import { TextField, Stack } from "@mui/material";
// import DatePickerValue from "./Date";
import Chart3 from "./chart3";
import axios from "axios";

import { Button } from "@mui/material";

import Table2 from "./Table2";
import Appbar from "../Appbar";
import Date2 from "./date2";

import { Grid } from "@mui/material";
const Fr = () => {
  const [values, setValues] = useState({
    phoneNumber: " ",
    date: " ",
  });
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  async function getData(e) {
    try {
      e.preventDefault();
      console.log(values);
      const url =
        "http://localhost:8000/farmer_report?date=" +
        values.date +
        "&phone_number=" +
        values.phoneNumber;
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
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Grid container direction="column">
        <Appbar />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          // rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h2>Farmers Report </h2>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6} sm={6} md={3} lg={4} justifyContent="flex-start">
            <Date2
              name="date"
              label="date"
              onChange={(e) => {
                setValues({
                  ...values,
                  date: e.format("YYYY-MM-DD"),
                });
              }}
            />
          </Grid>
          {/* </div> */}
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              rowSpacing={1}
            >
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={4} sm={4} md={2} lg={2}>
                  <PhoneAndroid />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField
                    label="Phone Number"
                    placeholder="Enter Phone Number"
                    variant="outlined"
                    name="phoneNumber"
                    onChange={(e) => {
                      setValues({
                        ...values,
                        phoneNumber: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Button variant="contained" onClick={(e) => getData(e)}>
                    Generate
                  </Button>
                </Grid>
              </Stack>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={1}>
            <Button
              variant="outlined"
              onClick={() => {
                window.print();
              }}
              sx={{ ml: "100" }}
              color="secondary"
            >
              Print
            </Button>
          </Grid>
        </Grid>

        {data.map((value) => {
          console.log(value);
          return (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowSpacing={1}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {visible && <Chart3 value={value} />}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Table2 data={[value]} />
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Fr;
