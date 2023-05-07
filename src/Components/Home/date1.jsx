import { DatePicker, Space } from "antd";
import { Button } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

function Date1({ setDateValues }) {
  console.log(setDateValues);
  var handleChange = (e, a) => {
    console.log(a);
    setDateValues(a);
  };
  // const dateFormat = "YYYY-MM-DD";
  return (
    <Space direction="vertical" size={12}>
      <RangePicker onChange={(e, a) => handleChange(e, a)} name="date" />
      {/* <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" /> */}
    </Space>
  );
}
export default Date1;
