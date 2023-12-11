

import React, { useState, useEffect } from "react";
import "./assets/styles.css";
import CreateProduct from "./components/CreateProduct";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the API data
    fetch(import.meta.env.VITE_API + "/buy_details")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        console.log(result);
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, []);



  return (

    <div>
      <h1 className="h1">Buy details</h1>

      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Buyer name</th>
            <th>Buyer telephone</th>
            <th>Buy Product name</th>
            <th>Buy Product price</th>
          </tr>
        </thead>
        <tbody>
          {users.map((buy) => (
            <tr key={buy.id}>
              <td>{buy.id}</td>
              <td>{buy.username}</td>
              <td>{buy.uertel}</td>
              <td>{buy.product}</td>
              <td>{buy.product_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    
  );

 
    
  
}
