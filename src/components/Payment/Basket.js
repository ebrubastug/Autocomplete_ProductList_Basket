import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Button from "@mui/material/Button";

export default function BasicTable( props ) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table ria-label="a dense table" sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Product Img</b></TableCell>
              <TableCell align="center"><b>Product Name</b></TableCell>
              <TableCell align="center"><b>Unit Price</b></TableCell>
              <TableCell align="center"><b>Quantity</b></TableCell>
              <TableCell align="center"><b>SubTotal</b></TableCell>
              <TableCell align="center"><b>Update</b></TableCell>
              <TableCell align="center"><b>Delete</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.selectedProduct.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >             
                <TableCell component="th" scope="row">
                  <img src={row.img} style={{ width: 90, height: 90}}/>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price} $</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{(row.subTotal).toString()} $</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="success" pr={5}>
                    Update
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color="error" pl={5}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}