import "./App.css";
import ProductForm from "./ProductForm";
import { useState } from "react";
// import { Row } from "reactstrap";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Red Bull",
      price: 3.4,
      description: "Energy drink",
      imageUrl:
        "https://clink.ph/cdn/shop/products/WEB-red-bull-250ml_800x.png?v=1622626748",
    },
    {
      name: "Rockstar",
      price: 8.6,
      description: "Energy drink",
      imageUrl:
        "https://gopotatoes.co.nz/cdn/shop/files/5302196.png?v=1691970541",
    },
  ]);

  const handleAddProduct = (name, price, description, imageUrl) => {
    const product = {
      name,
      price,
      description,
      imageUrl,
    };
    setProducts([products + product]);
    console.log("New Product:", name);
    console.log(products);
  };

  return (
    <div className="App">
      <ProductForm onAddProduct={handleAddProduct} />
      {products.map((p) => (
        <Product size={11} product={p}></Product>
      ))}
    </div>
  );
}

export default App;
