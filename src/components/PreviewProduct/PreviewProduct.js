import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const PreviewProduct = (props) => {
  return (
    <>
    <TableContainer component={Paper} style={{ m: 5, width: '60%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Product Image</b></TableCell>
            <TableCell align="right"><b>Product Name</b></TableCell>
            <TableCell align="right"><b>Unit Price</b></TableCell>
            <TableCell align="right"><b>Quantity</b></TableCell>
            <TableCell align="right"><b>SubTotal</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>     
          {props?.product?.length == 0 ?
           <TableRow>
             <TableCell align="right"></TableCell>
            <TableCell align="right"><i>Please Search Product...</i></TableCell>
           </TableRow> : 
            props?.product.map((row) => (           
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={row.img} style={{ width: 90, height: 90}}/>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price} $</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{(row.subTotal).toString()} $</TableCell>
              </TableRow>
            ))}         
        </TableBody>
      </Table>
    </TableContainer>
    <div className='row' style={{width: '60%', textAlign: "right"}}>
    <Button
      disabled={props?.product?.length == 0}
      variant="contained"
      color="success"
      onClick={() => {props.setOpenBasket(true)}}  
      style={{marginTop : "10px"}}  
    >
      <ShoppingCartIcon /> Go Basket
    </Button>
    </div>
    </>
  );
}

export default PreviewProduct