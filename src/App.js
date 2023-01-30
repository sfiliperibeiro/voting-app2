import { useState } from "react";
import ProductsList from "./components/ProductsList";
import { products } from "./services/seeds";

const App = () => {
  const [productList, setProductList] = useState(products);
  return (
    <div>
      <h1>Voting App</h1>
      {productList && <ProductsList productList={productList} />}
    </div>
  );
};

export default App;
