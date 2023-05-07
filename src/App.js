// import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
import Protected from "./Components/Protected";
import { UserContext } from "./hook/ContextApi";
import React from "react";
import Grade from "./Components/Grade/Grade";
import Home from "./Components/Home/Home";
// import Report from "./Components/Report";
import Fr from "./Components/Farmer Report/farmerreport";
import Dailyreport from "./Components/Daily Report/Dailyreport";
import { createTheme, ThemeProvider } from "@mui/material";

import { green, brown } from "@mui/material/colors";
// const theme = createTheme({
//   pallete: {
//     primary: {
//       main: "red[400]",
//     },
//   },
// });
const theme = createTheme({
  spacing: 10,
  palette: {
    mode: "light",
    primary: {
      main: green[200],
    },
    secondary: {
      main: brown[600],
    },
    // customRibRed: {
    //   main: red[400],
    //   superDark: red[800],
    //   superLight: red[100],
    // },
  },
  typography: {
    myVariant: {
      fontSize: "2rem",
    },
  },
});

function App() {
  const [Verified, setVerified] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={[Verified, setVerified]}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Login />}></Route>
              <Route element={<Protected />} />
              {/* <Route path="Dashboard" element={<Dashboard />} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/grade" element={<Grade />} />
              {/* <Route path="/report" element={<Report />} /> */}
              <Route path="/fr" element={<Fr />} />
              <Route path="/dailyreport" element={<Dailyreport />} />
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </div>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
