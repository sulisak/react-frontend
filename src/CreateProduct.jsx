// // import './styles.css';
// import React, { useState, useEffect } from "react";
// import "./assets/styles.css";
// const CreateProduct = () => {
//   return (
//     <div>
//       <h1>Create Product</h1>
//       {/* Add your create product form or content here */}
//     </div>
//   );
// };
// export default function CreateProduct(){
//  const [productName, setProductName] = useState('');
//  const [price, setPrice] = useState(0);


//  const handleProductNameChange = (event) => {
//   setProductName(event.target.value);
// };

// const handleSubmit = (event) => {
//   event.preventDefault();

//   // Perform validation and submit product data to API
//   // You can use the state variables (productName, price, etc.) to access the form data
//   console.log('Product Name:', productName);
//   console.log('Price:', price);
// };


// return (
//  <div>
//    <h1>Create Product</h1>
//    <form onSubmit={handleSubmit}>
//      <label>
//        Product Name:
//        <input
//          type="text"
//          value={productName}
//          onChange={handleProductNameChange}
//        />
//      </label>
  
//      <br />
//      <label>
//        Price:
//        <input
//          type="number"
//          value={price}
//          onChange={(event) => setPrice(Number(event.target.value))}
//        />
//      </label>
//      <br />
//      <button type="submit">Create</button>
//    </form>
//  </div>
// );

// }