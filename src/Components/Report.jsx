import React from "react";
import Appbar from "./Appbar";
import { Stack, Button } from "@mui/material";
import { Person } from "@mui/icons-material";
import { Summarize } from "@mui/icons-material";
import { spacing } from "@mui/system";
// import EnhancedTable from "./Table";
import FarmersReport from "./Fr";
import Bar from "./barchart";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Dailyreport from "./Dailyreport";
// import Dailyreport from "./Dailyreport";
function Report() {
  const [switch1, setSwitch] = useState(0);
  const handleClick = (e) => {
    console.log(e.target.name);
    if (e.target.name === "Farmerreport") {
      setSwitch(1);
    } else if (e.target.name === "Dailyreport") {
      setSwitch(2);
    }
  };
  return (
    <div>
      <Appbar />

      <h2>Report </h2>
      {switch1 === 0 && (
        <Stack
          maxwidth="sm"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          direction="column"
        >
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Person />
            <Button
              variant="contained"
              style={{ width: "20em" }}
              label="Farmerreport"
              name="Farmerreport"
              onClick={(e) => handleClick(e)}
            >
              Farmer Reports
            </Button>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Summarize />
            <Button
              variant="contained"
              style={{ width: "20em" }}
              label="Dailyreport"
              onClick={(e) => handleClick(e)}
              name="Dailyreport"
              spacing={{ m: "16px" }}

              // onSubmit={handleClick}
            >
              {/* <Route path="/da" element={<Dailyreport />} /> */}
              Daily Reports
              <Bar />
            </Button>
          </Stack>
        </Stack>
      )}
      {switch1 === 1 && <FarmersReport />}
      {switch1 === 2 && <Dailyreport />}
      {/* switch (switch1): case 1:
      <FarmersReport />
      break; case 2,
      <Dailyreport />
      break; default:
      <h2>Report </h2>
      <Stack
        maxwidth="sm"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      > */}
      {/* <Button variant="contained" disableElevation>
          Disable elevation
        </Button> */}
      {/* <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Person />
          <Button
            variant="contained"
            href="#contained-buttons"
            style={{ width: "20em" }}
            label="Farmerreport"
          >
            Farmer Reports
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Summarize />
          <Button
            variant="contained"
            href="#contained-buttons"
            style={{ width: "20em" }}
            label="Dailyreport"
            // onSubmit={handleClick}
          > */}
      {/* <Route path="/da" element={<Dailyreport />} /> */}
      {/* Daily Reports
          </Button>
        </Stack>
      </Stack> */}
    </div>
  );
}

export default Report;
