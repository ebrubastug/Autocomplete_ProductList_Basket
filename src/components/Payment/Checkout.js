"use-client";
import * as React from "react";
import "../../App.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Checkout(props) {
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    handleTotal();
  });

  const handleTotal = () => {
    let x = 0;
    props.selectedProduct.map(
      (item) => (x = parseFloat(item.subTotal) + parseFloat(x))
    );
    setTotal(x);
  };

  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <nav>
          <List>
            <ListItem className="List">
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  props.setOpenBasket(false);
                }}
              >
                Add More Products
              </Button>
            </ListItem>
            <ListItem disablePadding>
              <ListItem>
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText> Enter the coupon code below </ListItemText>
              </ListItem>
            </ListItem>
            <ListItem disablePadding padding-bottom={50}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">
                  Amount
                </InputLabel>
                <Input
                  id="standard-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
              </FormControl>
            </ListItem>
            <ListItem
              disablePadding
              className="List"
              style={{ paddingTop: "10px" }}
            >
              <Button variant="outlined" color="error">
                Apply Coupon
              </Button>
            </ListItem>
          </List>
        </nav>
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemText>Proceed to Checkout</ListItemText>
            </ListItem>
            <ListItem disablePadding style={{ paddingTop: "20px" }}>
              <TextField
                style={{ paddingRight: "10px" }}
                id="filled-read-only-input"
                label="Cart Subtotal "
                value={total}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="filled-read-only-input"
                label="Grant Total"
                value={total}
                InputProps={{
                  readOnly: true,
                }}
              />
            </ListItem>
            <ListItem disablePadding style={{ paddingTop: "20px" }}>
              <TextField
                style={{ paddingRight: "10px" }}
                id="filled-read-only-input"
                label="Main Warehouse Subtotal"
                value={total}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="filled-read-only-input"
                label="Shipping"
                value="Free Shipping"
                InputProps={{
                  readOnly: true,
                }}
              />
            </ListItem>
            <ListItem disablePadding style={{ paddingTop: "20px" }}>
              <TextField
                fullWidth
                sx={{ m: 1 }}
                id="filled-read-only-input"
                label="Grant Total"
                value={total}
                InputProps={{
                  readOnly: true,
                }}
              />
            </ListItem>
            <ListItem className="List">
              <Button variant="contained" color="success">
                Checkout
              </Button>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
}
