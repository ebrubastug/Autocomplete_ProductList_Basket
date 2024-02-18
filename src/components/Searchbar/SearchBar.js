'use-client'
import * as React from 'react';
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Httper from "../lib/api";
import ProductModal from '../Modal/ProductModal';
import PreviewProduct from '../PreviewProduct/PreviewProduct';

const url = "https://dev-40z065x35ykylji.api.raw-labs.com/mock/json-api";
var response = await Httper("get", url);

function Select(props) {  
  const [open, setOpen] = React.useState(false);
  const [resetSearch, setResetSearch] = React.useState(false);
  const [product, setProduct] = React.useState();


  React.useEffect(() => {
    setResetSearch(false);
  },[resetSearch]);

  const handleOpen = () => setOpen(true);

  const hendleData = (data) => {
    handleOpen();
    setProduct(data);  
  }

  const handleSelectedProduct = (product) => {
    props.setSelectedProduct([...props.selectedProduct,
    {
      id: product?.id,
      img: product?.product_image_mobile,
      name: product?.full_name,
      price: product?.stok_satis,
      quantity: product?.total,
      subTotal: (parseFloat(product?.stok_satis) * parseFloat(product?.total)).toString()
    }])
  }

  return (
    <div style={{textAlign: "-webkit-center"}}>
      <Autocomplete
        key={resetSearch}
        sx={{ m: 5, width: '60%'}}
        multiple
        options={response}
        getOptionLabel={(option) => option?.full_name}
        disableCloseOnSelect
        renderInput={(params) => (              
          <TextField
            {...params}
            variant="outlined"
            label="Search"
            placeholder="Enter SKU's & 2 or More Character"
          />
        )}
        renderOption={(props, option, { selected }) => (                     
          <MenuItem
            {...props}
            key={option?.id}
            value={option?.id}                           
            sx={{ justifyContent: "space-between" }}
          >
            {selected ? <CheckIcon color="info" /> : null}
            {selected ? hendleData(option) : null}
            {
              <img
                src={option?.product_image_mobile}
                width={50}
                height={50}
                style={{ margin: "5px" }}
              ></img>
            }
            {option?.full_name} <br />
            {option?.stok_satis} $           
          </MenuItem>             
        )}
      />
      <ProductModal 
      setOpen={setOpen} 
      open={open} 
      product={product} 
      setResetSearch={setResetSearch}
      handleSelectedProduct ={handleSelectedProduct}
      />
      <PreviewProduct  
      product={props.selectedProduct}
      setOpenBasket={props.setOpenBasket} />
    </div>
  );
}
export default Select;