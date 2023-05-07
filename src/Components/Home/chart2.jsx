import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";
import Graph from "../Doughnut";
import axios from "axios";
import dayjs from "dayjs";
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart2({ datevalue }) {
  const [value, setValue] = useState({
    visible: false,
    labelData: [],
    // legendData: [],
    sum: "",
    totaltons: "",
  });
  const [data1, setData1] = useState();
  const [varietyvalue, setValuesVariety] = useState("Banginapalle");
  const [mangoVariety, setMangoVariety] = useState([]);
  const handleChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setValuesVariety(e.target.value);
  };
  async function getMangoVariety() {
    try {
      const url = "http://localhost:8000/mango_variety";
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "localhost:3000",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "X- PINGOTHER, Content - Type",
          "Access-Control-Max-Age": 86400,
        },
      });
      console.log("This is the response :" + response);
      setMangoVariety(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getMangoVarietyGrade(varietyvalue, datevalue1, datevalue2) {
    try {
      const url =
        "http://localhost:8000/grade?mango_variety=" +
        varietyvalue +
        "&entry_date1=" +
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

      // setData1(response.data[0]);
      const labeledData = Object.keys(response.data[0]);
      const legendData = labeledData.map((el) => {
        console.log(el);
        return response.data[0][el];
      });
      const initialValue = 0;
      const sum = legendData.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      console.log(sum);

      console.log(labeledData);
      console.log(legendData);
      console.log(sum);
      // console.log(Object.values(data));
      // console.log(Object.entries(data1));
      setValue({
        visible: true,
        labelData: labeledData,
        legendData,
        sum,
        totaltons: response.data[1].cummulative_weight,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMangoVariety();
  }, []);

  useEffect(() => {
    if (varietyvalue === null) return null;
    else getMangoVarietyGrade(varietyvalue, datevalue[0], datevalue[1]);
  }, [varietyvalue, datevalue]);

  return (
    <div
      style={{
        justifyContent: "right ",
        alignItems: "right",
        width: "70%",
        height: "70%",
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
          <Box>
            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-label">
                Mango Variety
              </InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={mangoVareity}
                defaultValue="Banginapalle"
                label="Mango Variety"
                onChange={(e) => handleChange(e)}
              >
                {mangoVariety.map((mangoName) => {
                  console.log(mangoName);
                  return (
                    <MenuItem
                      key={mangoName.mango_variety}
                      value={mangoName.mango_variety}
                    >
                      {mangoName.mango_variety}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          {value.visible && (
            <Graph labelData={value.labelData} legendData={value.legendData} />
          )}{" "}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}></Grid>
        <h2> {value.sum} Tons within the date range</h2>
        <h2>Total tons = {value.totaltons} Tons </h2>
      </Grid>
    </div>
  );
}
export default Chart2;
