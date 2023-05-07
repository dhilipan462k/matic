// import { DatePicker, Space } from "antd";

// function Date2({ setDateValues }) {
//   console.log(setDateValues);
//   var handleChange = () => {
//     console.log();
//     setDateValues();
//   };
//   return <Space direction="vertical"></Space>;
// }
// export default Date2;
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Date2(props) {
  // console.log(setDateValues);
  // var handleChange = () => {
  //   console.log();
  //   setDateValues();
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        {/* <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} /> */}
        <DatePicker
          {...props}
          // onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default Date2;
