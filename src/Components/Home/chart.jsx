import React, { useEffect, useState } from "react";
import Graph from "../Doughnut";
import axios from "axios";
import Date1 from "./date1";
import dayjs from "dayjs";
import Table3 from "./table3";
import { Grid } from "@mui/material";

function Chart({ datevalue, setDateValues }) {
  const [value, setValue] = useState({
    visible: false,
    labelData: [],
    legendData: [],
    sum: "",
  });

  console.log(datevalue);
  async function getData(datevalue1, datevalue2) {
    try {
      console.log(datevalue1);
      const url =
        "http://localhost:8000/summary?entry_date1=" +
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
      let temp = [];
      let temp1 = [];
      let sum = 0;

      for (var i = 0; i < response.data.length; i++) {
        temp.push(response.data[i].mango_variety);
        temp1.push(response.data[i].mango_tons);
        sum = sum + response.data[i].mango_tons;
      }

      setValue({
        visible: true,
        labelData: temp,
        legendData: temp1,
        sum: sum,
      });
      console.log(value);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData(datevalue[0], datevalue[1]);
  }, [datevalue]);

  return (
    <div
      style={{
        justifyContent: "left",
        alignItems: "left",
        // width: "30%",
        // height: "30%",
      }}
    >
      <Grid
        item
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        lg={12}
        spacing={{ xs: 2, md: 3, lg: 4 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h2>Summary</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Date1 setDateValues={setDateValues} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {value.visible && (
            <Graph labelData={value.labelData} legendData={value.legendData} />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h2> {value.sum} Tons</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Table3 />
        </Grid>
      </Grid>
    </div>
  );
}

export default Chart;
