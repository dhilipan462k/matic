import React from "react";
import { Table } from "antd";
// import { Tab } from "react-tabs";
import { Grid } from "@mui/material";

const dataSource = [
  {
    key: "1",
    rejected: "5",
    grade1: " 1",

    grade2: "4",
    grade3: "3",
  },
];

const columns = [
  {
    title: "Rejected",
    dataIndex: "rejected_weight",
    key: "rejected_weight",
    allignContent: "left",
  },
  {
    title: "Grade 1",
    dataIndex: "grade1_weight",
    key: "grade1_weight",
    justifyContent: "grade1",
  },
  {
    title: "Grade 2",
    dataIndex: "grade2_weight",
    key: "grade2_weight",
    justifyContent: "grade2",
  },
  {
    title: "Grade 3",
    dataIndex: "grade3_weight",
    key: "grade3_weight",
    justifyContent: " grade3MangoWeight",
  },
  {
    title: "Mango Variety",
    dataIndex: "mango_variety",
    key: "mango_variety",
  },

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
function Table2({ data }) {
  console.log(data ?? []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1}
      // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Table dataSource={data ?? []} columns={columns} />
      </Grid>
    </Grid>
  );
}
export default Table2;
