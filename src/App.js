
import * as React from 'react';
import Header from './components/Header/Header';
import Select from './components/Searchbar/SearchBar';
import Payment from './components/Payment/Payment';

function App() {
  const [openBasket, setOpenBasket] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState([]);

  // console.log(selectedProduct)
  return (
    <div className="App">      
      <Header />
      {!openBasket ? 
          <Select 
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
          setOpenBasket={setOpenBasket}
          />  
      :
      <Payment  selectedProduct={selectedProduct} setOpenBasket={setOpenBasket}/>
      }         
    </div>
  );
}

export default App;
