// import * as React from "react";
// import dayjs from "dayjs";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { useState } from "react";

// export default function DatePickerValue() {
//   const [value, setValue] = useState(dayjs());
//   console.log(value);
//   // const today = new Date();
//   // const currentDate = today.getDate();
//   // console.log(currentDate);
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["DatePicker", "DatePicker"]}>
//         {/* <DatePicker
//           label="Date"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//         /> */}
//         <DatePicker
//           label="Date"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//           // defaultValue={currentDate.getFullYear()}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

function Date({ setDateValues }) {
  console.log(setDateValues);
  var handleChange = (e, a) => {
    console.log(a);
    setDateValues(a);
  };
  return (
    <Space direction="vertical">
      <RangePicker onChange={(e, a) => handleChange(e, a)} name="date" />
    </Space>
  );
}
export default Date;
