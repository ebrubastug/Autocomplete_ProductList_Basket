'use-client'
import * as React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Alert from '@mui/material/Alert';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { TextField } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,  
};

const ProductModal = ( props ) => {
  const [addBox, setAddBox] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [checkCount, setCheckCount] = React.useState(false);
  const [box, setBox] = React.useState(props?.product?.productBoxQuantities);

  
  const handleClose = () => props.setOpen(false);

  const hendleClear = () => {
    handleClose();
    setAddBox(false);
    props.setResetSearch(true);
  }

  const handleChangeBox = (event) => {
    setBox(event.target.value);
  };

  const handleChangeCount = (event) => {
    const val = event.target.value;
    
    if(val <= props?.product?.stok_adet && val > 0){
      setCheckCount(false);
      setCount(event.target.value);      
    }else{
      setCheckCount(true);
    }
  };

  const hendleSetProduct = () => {
    props.handleSelectedProduct({...props.product, total: count});
    handleClose();
    hendleClear();
  }

  return (
    <div>      
      <Modal
        open={props?.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={props?.product?.product_image}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props?.product?.full_name}
              </Typography>
              {props?.product?.productBoxQuantitiesCount > 0 ?
              <FormGroup>
                  <FormControlLabel control={<Checkbox checked={addBox} onClick={() => {setAddBox(addBox ? false : true)}} />} label="Add Box?" />
              </FormGroup>
              : ""}
              <Typography variant="body2" color="text.secondary" component="div">               
                {props?.product?.m_stok_diger_bilgiler.map((stock, key) => {   
                  return <Alert style={{marginTop: "10px"}} key={key} severity={stock?.stok_adet > 0 ?"success" : "error"}>{stock?.yer_baslik + ": " + stock?.stok_adet}</Alert> 
                })}              
              </Typography>
              {addBox ?               
              <Card style={{marginTop: "10px", maxWidth: "100%"}}>
                <CardContent>
                <InputLabel id="demo-simple-select-label">Add Box</InputLabel>
                <Select
                  style={{marginTop: "10px", minWidth: "100%"}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={box}
                  label="Box"
                  onChange={handleChangeBox}
                >             
                  {props.product.productBoxQuantities &&
                  Object.values(props.product.productBoxQuantities).map((data, key) => <MenuItem key={key}  value={data?.boxkayit_kutuadet}> {data?.boxkayit_kutuadet + "pcs @ " + data?.box_fiyat + "$"} </MenuItem>)}                
                </Select>
                </CardContent>
              </Card>
             : " " 
             }        
            <Container>
              <Row style={{display: "flex", marginTop: "10px"}}>
                <Col>
                  <TextField 
                  id="count" 
                  disabled={props?.product?.stok_adet <= 0} 
                  style={{marginTop: "10px"}}
                  type="number" 
                  onChange={handleChangeCount}               
                  variant={props?.product?.stok_adet <= 0 ? "filled"  : "outlined" } />             
                </Col>
                <Col > 
                  <Row style={{display: "flex", marginTop: "10px"}}>
                    <Col>
                      <AttachMoneyIcon fontSize="large" style={{marginTop: "10px"}} />
                    </Col>                 
                    <Col style={{marginTop: "15px",}}>
                      {props?.product?.stok_satis}   
                    </Col>
                  </Row>                    
                </Col>
              </Row>
            </Container> 
            <Alert  style={{marginTop: "10px", display: checkCount ? "" : "none"}} variant="filled" severity="error" >
              Please select stock count
            </Alert>        
            </CardContent>
            <CardActions style={{display: "flex", justifyContent:"space-between"}}>
              <Button 
              disabled={props?.product?.stok_adet <= 0 || checkCount}
              variant="contained"
              color="success"
              onClick={hendleSetProduct} 
              >Add</Button>
              <Button variant="outlined" color="error" onClick={hendleClear}>Close</Button>
            </CardActions>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;