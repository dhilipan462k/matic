import React from "react";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";
function Excel({ data }) {
  console.log(data);
  const handleClick = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Download as Excel
    </Button>
  );
}

export default Excel;
