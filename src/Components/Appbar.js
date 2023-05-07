// import {
//   Stack,
//   AppBar,
//   Typography,
//   Toolbar,
//   Tabs,
//   Tab,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
//
// import React from "react";

// import { Grid } from "@mui/material";

// import { Pages } from "@mui/icons-material";
// function App1() {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
//   const PAGES = ["Home", "Grade", "Farmer Report", "Daily Report"];
//   console.log(theme);
//   return (
//     <React.Fragment>
//       <AppBar
//         position="sticky"
//         color="primary"
//         justifyContent="center"
//         sx={{
//           width: "100%",
//           background: "#74a660",
//         }}
//         variant="outlined"
//       >
//         <Toolbar>
//           <img
//             src={logo}
//             alt="logo"
//             style={{
//               width: "50px",
//               height: "55px",
//               backgroundColor: "white",
//             }}
//             // sx={{ pt: 1 }}
//             onClick={() => navigate("/Home")}
//           />
//           {/* {isMatch ? (
//             <>
//               <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
//                 MATIC
//               </Typography>
//               <Drawera />
//             </>
//           ) : (
//             <> */}
//           <Tabs textColor="white">
//             {/* {PAGES.map((page, index) => (
//                   <Tab
//                     key={index}
//                     label={page}
//                     onClick={() => navigate("./page")}
//                   />
//                 ))} */}
//             <Tab onClick={() => navigate("/Home")} label="Home"></Tab>
//             <Tab label="Grade" onClick={() => navigate("/Grade")}></Tab>
//             <Tab label="Farmer Report" onClick={() => navigate("/Fr")}></Tab>
//             <Tab
//               label="Daily Report"
//               onClick={() => navigate("/Dailyreport")}
//             ></Tab>
//           </Tabs>
//           {/* </> */}
//           {/* )} */}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// }
// export default App1;
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
function App1() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-success navbar-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <img
        src={logo}
        alt="logo"
        style={{
          width: "50px",
          height: "55px",
          backgroundColor: "white",
        }}
        onClick={() => navigate("/home")}
      />
      <a class="navbar-brand ms-auto p-2 " href="">
        MATIC
      </a>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav  ">
          <li class="nav-item">
            <a class="nav-link" href="./home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Grade">
              Grade
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Fr">
              Farmer Report
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./dailyreport">
              Daily Report
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default App1;
