import React from "react";
import { useState } from "react";

export default function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(name, price, description, imageUrl);
    setName("");
    setDesc("");
    setPrice(0);
    setImageUrl("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New Product</label>
      <br></br>

      <label htmlFor="text">Name</label>
      <br></br>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <label htmlFor="text">Price</label>
      <br></br>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br></br>
      <label htmlFor="text">Description</label>
      <br></br>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br></br>
      <label htmlFor="text">Image Url</label>
      <br></br>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br></br>
      <button type="submit">Add Product</button>
    </form>
  );
}