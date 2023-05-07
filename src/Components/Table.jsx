// import * as React from "react";
// import PropTypes from "prop-types";
// import { alpha } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Checkbox from "@mui/material/Checkbox";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Switch from "@mui/material/Switch";
// import DeleteIcon from "@mui/icons-material/Delete";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { visuallyHidden } from "@mui/utils";

// function createData(
//   Name,
//   Place_of_cultivation,
//   MangoVareity,
//   Tons_of_Mangoes_given_by_farmer,
//   Cumlative_weight_of_Mangoes,
//   Number_of_Mangoes,
//   Grade_1_Mango_count,
//   Grade_1_Mango_Weight,
//   Grade_2_Mango_count,
//   Grade_2_Mango_Weight,
//   Grade_3_Mango_count,
//   Grade_3_Mango_Weight
// ) {
//   return {
//     Name,
//     Place_of_cultivation,
//     MangoVareity,
//     Tons_of_Mangoes_given_by_farmer,
//     Cumlative_weight_of_Mangoes,
//     Number_of_Mangoes,
//     Grade_1_Mango_count,
//     Grade_1_Mango_Weight,
//     Grade_2_Mango_count,
//     Grade_2_Mango_Weight,
//     Grade_3_Mango_count,
//     Grade_3_Mango_Weight,
//   };
// }

// const rows = [
//   createData(
//     "Farmer1",
//     "Farmer1",
//     "Variety1",
//     0.25,
//     0.25,
//     84,
//     12,
//     0.025,
//     58,
//     0.175,
//     14,
//     0.05
//   ),
//   createData(
//     "Farmer1",
//     "Farmer1",
//     "Variety1",
//     0.25,
//     0.25,
//     84,
//     12,
//     0.025,
//     58,
//     0.175,
//     14,
//     0.05
//   ),
//   createData(
//     "Farmer1",
//     "Farmer1",
//     "Variety1",
//     0.25,
//     0.25,
//     84,
//     12,
//     0.025,
//     58,
//     0.175,
//     14,
//     0.05
//   ),
//   createData(
//     "Farmer1",
//     "Farmer1",
//     "Variety1",
//     0.25,
//     0.25,
//     84,
//     12,
//     0.025,
//     58,
//     0.175,
//     14,
//     0.05
//   ),
//   createData(
//     "Farmer1",
//     "Farmer1",
//     "Variety1",
//     0.25,
//     0.25,
//     84,
//     12,
//     0.025,
//     58,
//     0.175,
//     14,
//     0.05
//   ),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
// return order === "desc"
//   ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// // with exampleArray.slice().sort(exampleComparator)
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: "date",
//     numeric: true,
//     disablePadding: false,
//     label: "Date",
//   },
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Farmer Name",
//   },
//   {
//     id: "Place_of_Cultivation",
//     numeric: false,
//     disablePadding: true,
//     label: "Place of Cultivation",
//   },
//   {
//     id: "Mango vareity",
//     numeric: true,
//     disablePadding: false,
//     label: "Mango vareity",
//   },
//   {
//     id: "Tons of mangoes given by the farmer ",
//     numeric: true,
//     disablePadding: false,
//     label: "Tons of mangoes given by the farmer",
//   },
//   {
//     id: "Cummulative Weigth of mangoes",
//     numeric: true,
//     disablePadding: false,
//     label: "Cummulative Weigth of mangoes",
//   },
//   {
//     id: "Number of mangoes",
//     numeric: true,
//     disablePadding: false,
//     label: "Number of mangoes",
//   },
//   {
//     id: "Grade 1 Mango Count ",
//     numeric: true,
//     disablePadding: false,
//     label: "Grade 1 Mango Count ",
//   },
//   {
//     id: "Grade 1 Mango Weight  ",
//     numeric: true,
//     disablePadding: false,
//     label: "Grade 1 Mango Weight ",
//   },
//   {
//     id: "Grade 2 Mango Count ",
//     numeric: true,
//     disablePadding: false,
//     label: "Grade 2 Mango Count ",
//   },
//   {
//     id: "Grade 2 Mango Weight  ",
//     numeric: true,
//     disablePadding: false,
//     label: "Grade 2 Mango Weight ",
//   },
//   {
//     id: "Grade 3 Mango Count ",
//     numeric: true,
//     disablePadding: false,
//     label: "Grade 3 Mango Count ",
//   },
//   {
//     id: "Grade 3 Mango Weight  ",
//     numeric: true,
//     disablePadding: false,
//     label: "Grade 3 Mango Weight ",
//   },
// ];

// function EnhancedTableHead(props) {
//   const {
//     onSelectAllClick,
//     order,
//     orderBy,
//     numSelected,
//     rowCount,
//     onRequestSort,
//   } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               "aria-label": "select all desserts",
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? "right" : "left"}
//             padding={headCell.disablePadding ? "none" : "normal"}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : "asc"}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === "desc" ? "sorted descending" : "sorted ascending"}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(["asc", "desc"]).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(
//               theme.palette.primary.main,
//               theme.palette.action.activatedOpacity
//             ),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: "1 1 100%" }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//           Daily Report
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState("asc");
//   const [orderBy, setOrderBy] = React.useState("calories");
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1)
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Paper sx={{ width: "100%", mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? "small" : "medium"}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`;

//                   return (
//                     <TableRow
//                       hover
//                       onClick={(event) => handleClick(event, row.name)}
//                       role="checkbox"
//                       aria-checked={isItemSelected}
//                       tabIndex={-1}
//                       key={row.name}
//                       selected={isItemSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox
//                           color="primary"
//                           checked={isItemSelected}
//                           inputProps={{
//                             "aria-labelledby": labelId,
//                           }}
//                         />
//                       </TableCell>
//                       <TableCell
//                         component="th"
//                         id={labelId}
//                         scope="row"
//                         padding="none"
//                       >
//                         {row.name}
//                       </TableCell>
//                       <TableCell align="right">{row.Date}</TableCell>
//                       <TableCell align="right">{row.Farmers_Name}</TableCell>
//                       <TableCell align="right">
//                         {row.Place_of_cultivation}
//                       </TableCell>
//                       <TableCell align="right">{row.Mango_Vareity}</TableCell>
//                       <TableCell align="right">
//                         {row.Tons_of_Mangoes_given_by_farmer}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Cumlative_weight_of_Mangoes}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Number_of_Mangoes}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Grade_1_Mango_count}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Grade_1_Mango_Weigth}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Grade_2_Mango_count}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Grade_2_Mango_Weigth}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Grade_3_Mango_count}
//                       </TableCell>
//                       <TableCell align="right">
//                         {row.Grade_3_Mango_Weigth}
//                       </TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
import * as React from "react";
import * as Table from "antd";
import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
// function Table1() {
const columns = [
  { field: "date", headerName: "Date", width: "80" },
  { field: "name", headerName: "Name", width: "160" },
  {
    field: "placeofCultivation",
    headerName: "Place of Cultivation",
    width: "90",
  },
  {
    field: "mangoVareity",
    headerName: "Mango Vareity",
    width: "130",
  },
  {
    field: "tons",
    headerName: "Tons",
    width: "50",
  },
  {
    field: "cumlativeWeight",
    headerName: "Cumlative weight",
    width: "50",
  },
  {
    field: "numberOfMangoes",
    headerName: "Number of Mangoes",
    width: "50",
  },
  {
    field: "grade1MangoCount",
    headerName: "Grade 1 MangoCount",
    width: "50",
  },
  {
    field: "grade1MangoWeight",
    headerName: "Grade 1 Mango Weight",
    width: "50",
  },
  {
    field: "grade2MangoCount",
    headerName: "Grade 2 Mango Count",
    width: "50",
  },
  {
    field: "grade2MangoWeight",
    headerName: "Grade 2 Mango Weight",
    width: "50",
  },
  {
    field: "grade3MangoCount",
    headerName: "Grade 3 Mango Count",
    width: "50",
  },
  {
    field: "grade3MangoWeight",
    headerName: "Grade 3 Mango Weight",
    width: "50",
  },
];
const rows = [
  {
    date: "1.1.2020",
    name: "farmer1",
    placeOfCultivation: "farmer1",
    mangoVareity: "mango1",
    tons: "3",
    cummulativeWeight: "5",
    numberOfMangoes: "50",
    grade1MangoCount: "45",
    grade1MangoWeight: "5",
    grade2MangoCount: "55",
    grade2MangoWeight: "15",
    grade3MangoCount: "50",
    grade3MangoWeight: "10",
  },
  {
    date: "1.1.2020",
    name: "farmer1",
    placeOfCultivation: "farmer1",
    mangoVareity: "mango1",
    tons: "3",
    cummulativeWeight: "5",
    numberOfMangoes: "50",
    grade1MangoCount: "45",
    grade1MangoWeight: "5",
    grade2MangoCount: "55",
    grade2MangoWeight: "15",
    grade3MangoCount: "50",
    grade3MangoWeight: "10",
  },
  {
    date: "1.1.2020",
    name: "farmer1",
    placeOfCultivation: "farmer1",
    mangoVareity: "mango1",
    tons: "3",
    cummulativeWeight: "5",
    numberOfMangoes: "50",
    grade1MangoCount: "45",
    grade1MangoWeight: "5",
    grade2MangoCount: "55",
    grade2MangoWeight: "15",
    grade3MangoCount: "50",
    grade3MangoWeight: "10",
  },
  {
    date: "1.1.2020",
    name: "farmer1",
    placeOfCultivation: "farmer1",
    mangoVareity: "mango1",
    tons: "3",
    cummulativeWeight: "5",
    numberOfMangoes: "50",
    grade1MangoCount: "45",
    grade1MangoWeight: "5",
    grade2MangoCount: "55",
    grade2MangoWeight: "15",
    grade3MangoCount: "50",
    grade3MangoWeight: "10",
  },
  {
    date: "1.1.2020",
    name: "farmer1",
    placeOfCultivation: "farmer1",
    mangoVareity: "mango1",
    tons: "3",
    cummulativeWeight: "5",
    numberOfMangoes: "50",
    grade1MangoCount: "45",
    grade1MangoWeight: "5",
    grade2MangoCount: "55",
    grade2MangoWeight: "15",
    grade3MangoCount: "50",
    grade3MangoWeight: "10",
  },
];

export default function DataGridDemo() {
  return <Table rows={rows} columns={columns} />;
}
