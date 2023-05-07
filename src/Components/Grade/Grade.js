import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import {
  CardContent,
  Grid,
  Container,
  TextField,
  Card,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { Person, PhoneAndroid, Place } from "@mui/icons-material";
import CameraComponent from "../Camera";
import App1 from "../Appbar";
import mango from "./mango.png";
import Kg from "./Kg.png";

const Grade = () => {
  const [mangoVariety, setMangoVariety] = useState([]);
  const [values, setValues] = useState({
    farmerName: "",
    phoneNumber: "",
    farmerPlace: "",
    mangoTons: "",
    mangoVariety: "",
  });
  // const [mobile, setmobile] = useState();
  const [click, setClick] = useState(true);
  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "farmerName")
      setValues({
        ...values,
        farmerName: e.target.value,
      });
    else if (e.target.name === "phoneNumber")
      setValues({
        ...values,
        phoneNumber: e.target.value,
      });
    else if (e.target.name === "farmerPlace")
      setValues({
        ...values,
        farmerPlace: e.target.value,
      });
    else if (e.target.name === "tons")
      setValues({
        ...values,
        mangoTons: e.target.value,
      });
    else if (e.target.name === "mangoVariety")
      setValues({
        ...values,
        mangoVariety: e.target.value,
      });
  };
  //

  async function getUser(e) {
    e.preventDefault();

    console.log(values);

    const response = await axios.post(`http://localhost:8000/grade`, values, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "localhost:3000",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "X- PINGOTHER, Content - Type",
        "Access-Control-Max-Age": 86400,
      },
    });

    console.log(response.data);
    if (response.data === true) {
      setClick(!click);
    } else alert("error");
  }
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
  useEffect(() => {
    getMangoVariety();
  }, []);

  return (
    <>
      <App1 />
      <h2>Grade Page </h2>
      {click ? (
        // <Form id="myForm" onsubmit="return validate()" method="POST">
        <Container maxwidth="sm">
          <Card>
            <CardContent>
              <Container container spacing={1} justifyContent="center">
                <Grid>
                  <Stack spacing={2}>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Person />

                      <TextField
                        label="Farmer Name"
                        placeholder="Enter Farmer name"
                        variant="outlined"
                        name="farmerName"
                        onChange={(e) => handleChange(e)}
                        required={true}
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <PhoneAndroid />
                      <TextField
                        label="Phone Number"
                        placeholder="Enter Phone Number"
                        variant="outlined"
                        name="phoneNumber"
                        onChange={(e) => handleChange(e)}
                      />
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <Place />
                      <TextField
                        label="Farmers Place"
                        placeholder="Enter Farmers Place "
                        variant="outlined"
                        name="farmerPlace"
                        onChange={(e) => handleChange(e)}
                      />
                    </Stack>
                    {/* <TextField
                    label="Mango Variety"
                    placeholder="Enter Mango Variety "
                    variant="outlined"
                  /> */}
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <img
                        src={mango}
                        alt=" "
                        style={{ width: "20px", height: "25px" }}
                      />

                      <Box>
                        <FormControl sx={{ minWidth: 220 }}>
                          <InputLabel id="demo-simple-select-label">
                            Mango Variety
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={mangoVareity}
                            label="Mango Variety"
                            name="mangoVariety"
                            onChange={(e) => handleChange(e)}
                          >
                            {mangoVariety.map((mangoName) => (
                              <MenuItem
                                key={mangoName.mango_variety}
                                value={mangoName.mango_variety}
                              >
                                {mangoName.mango_variety}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                    >
                      <img
                        src={Kg}
                        alt=" "
                        style={{ width: "20px", height: "25px" }}
                      />
                      <TextField
                        label="Mango Tons"
                        placeholder="Enter Mango Tons "
                        variant="outlined"
                        name="tons"
                        onChange={(e) => handleChange(e)}
                      />
                    </Stack>
                  </Stack>
                </Grid>
                <Stack
                  direction="row"
                  justifyContent=" center"
                  alignItems="center"
                  spacing={2}
                  sx={{ pt: 2 }}
                >
                  <Grid>
                    <Button
                      variant="contained"
                      onClick={(e) => getUser(e)}
                      sx={{ pt: 1 }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Stack>
              </Container>
            </CardContent>
          </Card>
        </Container>
      ) : (
        // </Form>
        <CameraComponent />
      )}
    </>
  );
};

export default Grade;
