import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Chart from "react-apexcharts";

function Linechart() {
  const [data, setData] = useState([
    {
      name: "Daily stat",
      data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21],
      sum: "5 ",
    },
  ]);

  const options = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#00b3b6",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    // options={{colors:[#ff0000]}}
    fill: {
      color: "#c00",
    },
    xaxis: {
      type: "numeric",
      categories: [],
      tickPlacement: "between",
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [
            "#004659",
            "#9fff96",
            "#adaf7e",
            "#ffde59",
            "#b5c76b",
            "#74a660",
            "#5cadaf",
            "#005d4a",
          ],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },

      axisBorder: {
        show: true,
        color: "#00b3b6",
        height: 10,
        width: "90%",
        offsetX: 0,
        offsetY: 0,
      },
    },
    stroke: {
      curve: "smooth",
      width: 5,
    },
    dataLabels: {
      enabled: true,
      background: { enabled: true },
    },
    markers: {
      size: 5,
    },
    grid: {
      show: true,
      borderColor: "#9fff96",
      position: "back",
      // padding: {
      //   top: 20,
      //   bottom: 10,
      //   left: 110,
      // },
    },
    colors: ["#2adcaa"],
    tooltip: {
      x: {
        show: true,
      },
      y: {
        title: {
          formatter: function formatter(val) {
            return "";
          },
        },
      },
      theme: { mode: "dark" },
    },
  };
  // // const options = {
  // //   plugins: { legend: true },
  // //   scales: {
  // //     y: {},
  // //   },
  // // };
  console.log(data);
  async function getData(datevalue1, datevalue2) {
    try {
      console.log(datevalue1);
      const url = "http://localhost:8000/line_chart";

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
      console.log(response);
      const val = response.data;
      const label = val.map((el) => el.entry_date);
      const data1 = val.map((el) => el["sum(cummulative_weight)"] ?? 0);
      const initialValue = 0;
      const sum = data1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
      setData([{ name: "series1", data: data1, sum: sum }]);
      console.log([{ name: "series1", data: data1, sum: sum }]);
      console.log(data1);

      console.log(sum);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ height: "300px", padding: "200px" }}>
      {/* <Line data={data} options={options}></Line> */}
      <Grid
        item
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={{ xs: 2, md: 3, lg: 4 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h2>Daily Stats</h2>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Chart options={options} series={data} type="line" />
        </Grid>
      </Grid>
      <h2> {data[0].sum} Tons</h2>

      {/* <ReactApexChart options={options} series={data} type="line" /> */}
    </div>
  );
}
export default Linechart;
