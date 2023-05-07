import { Camera, Padding, Warning } from "@mui/icons-material";
import React, { useRef, useState, useEffect } from "react";
// import cam from "./cam.png";
import PauseIcon from "@mui/icons-material/Pause";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import StopIcon from "@mui/icons-material/Stop";
import { Stack, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CameraComponent() {
  const [isPaused, setIsPaused] = useState(false);
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error starting camera", error);
    }
  };

  const pauseCamera = () => {
    setIsPaused(!isPaused);
    stream.getTracks().forEach((track) => {
      if (track.kind === "video") {
        track.enabled = !isPaused;
      }
    });
  };

  const stopCamera = () => {
    // navigate("/Report");
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  };

  useEffect(() => {
    startCamera();
  }, []);

  // const styleForPaper = {
  //   width: "96vw",
  //   height: "20vh",

  //   display: "inline-block",
  // };
  const styleForButton = {
    width: 50,
    height: 50,
    paddingTop: "150%",
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        // rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <>
            <video
              style={{ width: "100vh", height: "100vh", paddingLeft: "5vh" }}
              ref={videoRef}
              autoPlay
              muted
              playsInline
            />
          </>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          // rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item>
            <PauseIcon onClick={pauseCamera} />
          </Grid>
          <Grid item>
            <StopIcon onClick={() => navigate("/fr")} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
export default CameraComponent;
