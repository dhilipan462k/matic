import React from "react";
import { Table } from "antd";
import { Grid } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { Tab } from "react-tabs";
import reportWebVitals from "./../../reportWebVitals";
import { Container } from "@mui/material";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
  {
    key: "1",
    name: "Mike",
    date: " 12-03-2023",
    placeofcultivation: "Chennai",
    mangovareity: "banginapalle",
    tons: "4",
    cumlativeweight: "3",
    numberofmangoes: "5",
    grade1mangocount: "22",
    grade1mangoweight: "32",
    grade2mangocount: "42",
    grade2mangoweight: "32",
    grade3mangocount: "52",
    grade3mangoweight: "32",
  },
];

const columns = [
  {
    title: "Date",
    dataIndex: "entry_date",
    key: "entry_date",
    justifyContent: "left",
    fixed: "left",
  },
  {
    title: "Name",
    dataIndex: "farmer_name",
    key: "farmer_name",
    justifyContent: "center",
    fixed: "left",
  },
  {
    title: "Place of Cultivation",
    dataIndex: "farmer_place",
    key: "farmer_place",
    justifyContent: "center",
    fixed: "left",
  },
  {
    title: "Mango Vareity",
    dataIndex: "mango_vareity",
    key: "mango_vareity",
    justifyContent: "center",
    fixed: "left",
  },
  {
    title: "Tons",
    dataIndex: "mango_tons",
    key: "mango_tons",
    fixed: "left",
  },

  {
    title: "Cumulative Weight",
    dataIndex: "cummulative_weight",
    key: "cummulative_weight",
  },
  {
    title: "Number Of Mangoes",
    dataIndex: "number_of_mangoes",
    key: "number_of_mangoes",
  },
  {
    title: "Grade 1 Mango Count",
    dataIndex: "grade1_count",
    key: "grade1_count",
  },
  {
    title: "Grade 1 Mango Weight",
    dataIndex: "grade1_weight",
    key: "grade1_weight",
  },
  {
    title: "Grade 2 Mango Count",
    dataIndex: "grade2_count",
    key: "grade2_count",
  },
  {
    title: "Grade 2 Mango Weight",
    dataIndex: "grade2_weight",
    key: "grade2_weight",
  },

  {
    title: "Grade 3 Mango Count",
    dataIndex: "grade3_count",
    key: "grade3_count",
  },
  {
    title: "Grade 3 Mango Weight",
    dataIndex: "grade3_weight",
    key: "grade3_weight",
  },
];

function Table1({ data }) {
  console.log(data ?? []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        lg={12}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={12} md={7} lg={11}>
          <Table
            scroll={{
              x: 1500,
              y: 550,
            }}
            bordered={true}
            sx={{ border: "20px solid", borderRadius: "10px" }}
            dataSource={data ?? []}
            columns={columns}
            pagination={{
              pageSize: 10,
            }}
            // scroll={{
            //   y: 240,
            // }}
          />
        </Grid>
      </Grid>

      {/* <Table scroll={{ x: 1500 }} /> */}
      {/* <DataGrid
        rows={data ?? []}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        // dataSource=
      /> */}
    </>
  );
}
export default Table1;
