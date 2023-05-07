import Graph from "../Doughnut";
import Table2 from "./Table2";
import { Grid } from "@mui/material";

function Chart3({ value }) {
  console.log(value);

  let temp = Object.keys(value);
  let temp1 = Object.values(value);
  const sumValues = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
  console.log(temp, "keys");
  console.log(temp1, "values");
  return (
    <div
      style={{
        justifyContent: "right ",
        alignItems: "right",
        width: "30%",
        height: "30%",
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Graph labelData={temp} legendData={temp1} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          {/* <Table2 data={value} /> */}
          {/* <h2>{sumValues} Tons</h2> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Chart3;
