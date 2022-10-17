import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// $(function () {
//   $("#example").DataTable();

//   // Premade test data, you can also use your own
//   var testDataUrl =
//     "https://raw.githubusercontent.com/chennighan/RapidlyPrototypeJavaScript/master/lesson4/data.json";

//   $("#loadData").click(function () {
//     loadData();
//   });

//   function loadData() {
//     $.ajax({
//       type: "GET",
//       url: testDataUrl,
//       contentType: "text/plain",
//       dataType: "json",
//       success: function (data) {
//         myJsonData = data;
//         populateDataTable(myJsonData);
//       },
//       error: function (e) {
//         console.log("There was an error with your request...");
//         console.log("error: " + JSON.stringify(e));
//       },
//     });
//   }

//   // populate the data table with JSON data
//   function populateDataTable(data) {
//     console.log("populating data table...");
//     // clear the table before populating it with more data
//     $("#example").DataTable().clear();
//     var length = Object.keys(data.customers).length;
//     for (var i = 1; i < length + 1; i++) {
//       var customer = data.customers["customer" + i];

//       // You could also use an ajax property on the data table initialization
//       $("#example")
//         .dataTable()
//         .fnAddData([
//           customer.first_name,
//           customer.last_name,
//           customer.occupation,
//           customer.email_address,
//         ]);
//     }
//   }
// })();
