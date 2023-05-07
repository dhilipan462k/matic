import React, { useState } from "react";
import axios from "axios";
// import axios from "Axios";
import {
  AppBar,
  Stack,
  Typography,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import {
  Container,
  Grid,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../hook/ContextApi";
import logo from "./logo.png";
// import Appbar from "./Appbar";
const Login = () => {
  const [Verified, setVerified] = React.useContext(UserContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: " ",
    pass: " ",
    showPass: "false",
  });
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  const handleChange = (e) => {
    if (e.target.placeholder === "Email Address") {
      setValues({
        ...values,
        email: e.target.value,
      });
    } else if (e.target.placeholder === "Password") {
      setValues({
        ...values,
        pass: e.target.value,
      });
    }
  };

  async function getUser(e) {
    try {
      e.stopPropagation();
      const response = await axios.post(
        `http://localhost:8000/login`,
        {
          email: values.email,
          password: values.pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "localhost:3000",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "X- PINGOTHER, Content - Type",
            "Access-Control-Max-Age": 86400,
          },
        }
      );
      // setValues(response.email);
      // JSON.parse(expos)
      console.log(response.data);
      if (response.data === true) {
        setVerified(true);
        navigate("/home");
      } else alert("error");
      //  console.log(email);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <div>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Paper elevation={2} sx={{ padding: 5 }}>
            {/* <img
              src={logo}
              alt="logo"
              style={{ width: "100px", height: "150px" }}
              sx={{ margin: 5 }}
            /> */}
            <form>
              <img
                src={logo}
                alt="logo"
                style={{ width: "100px", height: "150px" }}
                // sx={{ margin: 20 }}
              />
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="email"
                    fullWidth
                    label="Enter your email "
                    placeholder="Email Address"
                    variant="outlined"
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type={values.showPass ? "text" : "password"}
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    onChange={(e) => handleChange(e)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => handlePassVisibilty()}
                            aria-label="toggle password"
                            edge="end"
                          >
                            {values.showPass ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={(e) => getUser(e)}>
                    Sign in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
