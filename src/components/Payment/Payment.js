import React from "react";
import Basket from "./Basket";
import Checkout from "./Checkout";

const Payment = ( props) => {
  return (
    <div class="pt-30 container">
      <div class="col-md-6 pr-50">
        <Basket selectedProduct={props.selectedProduct} />
      </div>
      <div class="col-md-6">
        <Checkout 
        setOpenBasket={props.setOpenBasket} 
        selectedProduct={props.selectedProduct}/>
      </div>
    </div>
  );
}

export default Payment;