import React from "react";
import { Table } from "antd";
// import { Tab } from "react-tabs";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
const dataSource = [
  {
    key: "1",

    mango_variety: "10",
    mango_tons: "45",
  },
];

const columns = [
  {
    title: "Mango Variety",
    dataIndex: "count(mango_variety)",
    key: "count(mango_variety)",
  },
  {
    title: "Total tons",
    dataIndex: "sum(mango_tons)",
    key: "sum(mango_tons)",
  },
  // {
  //   title: "Grade 2",
  //   dataIndex: "grade2_weight",
  //   key: "grade2_weight",
  //   justifyContent: "grade2",
  // },
  // {
  //   title: "Grade 3",
  //   dataIndex: "grade3_weight",
  //   key: "grade3_weight",
  //   justifyContent: " grade3MangoWeight",
  // },
  // {
  //   title: "Mango Variety",
  //   dataIndex: "mango_variety",
  //   key: "mango_variety",
  // },

  // {
  //   title: "Cumlative Weight",
  //   dataIndex: "cumlativeweight",
  //   key: "cumlativeweight",
  // },
  // {
  //   title: "Number Of Mangoes",
  //   dataIndex: "numberofmangoes",
  //   key: "cumlativeweight",
  // },
  // {
  //   title: "Grade 1 Mango Count",
  //   dataIndex: "grade1mangocount",
  //   key: "grade1mangocount",
  // },
  // {
  //   title: "Grade 1 Mango Weight",
  //   dataIndex: "grade1mangoweight",
  //   key: "grade1mangoweight",
  // },
  // {
  //   title: "Grade 2 Mango Count",
  //   dataIndex: "grade2mangocount",
  //   key: "grade2mangocount",
  // },
  // {
  //   title: "Grade 2 Mango Weight",
  //   dataIndex: "grade2mangoweight",
  //   key: "grade2mangoweight",
  // },

  // {
  //   title: "Grade 3 Mango Count",
  //   dataIndex: "grade3mangocount",
  //   key: "grade3mangocount",
  // },
  // {
  //   title: "Grade 3 Mango Weight",
  //   dataIndex: "grade3mangoweight",
  //   key: "grade3mangoweight",
  // },
];
function Table3() {
  const [data, setData] = useState([]);
  console.log(data ?? []);
  async function getData() {
    try {
      console.log();
      const url = "http://localhost:8000/summary_table";

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
      // const val = response.data;
      // // const label = val.map((el) => el.entry_date);
      // const data1 = val.map((el) => el["sum(cummulative_weight)"] ?? 0);
      // setData([{ name: "series1", data: data1 }]);
      // console.log([{ name: "series1", data: data1 }]);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1}
      // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
    </Grid>
  );
}
export default Table3;
