// import './styles.css';
import React, { useState, useEffect } from "react";
import "./assets/styles.css";
export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(import.meta.env.VITE_API);

    fetch(import.meta.env.VITE_API + "/buy_details")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
        console.log(result);
      });
  }, []);
  return (
    <div>
      <h1 className="h1">Buy details</h1>
      <table
        className="bordered-table"
        style={{
          borderCollapse: "solid",
          width: "100%",
          border: "2px solid blue",
          textAlign: "center",
        }}
      >
        <thead
          style={{
            borderCollapse: "solid",
            width: "100%",
            border: "1px solid blue",
            textAlign: "center",
          }}
        >
          <tr>
            <th>Id</th>
            <th>Buyer name</th>
            <th>User buy email</th>
            <th>Buy Product name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((buy) => (
            <tr key={buy.id}>
              <td>{buy.id}</td>
              <td>{buy.username}</td>
              <td>{buy.useremail}</td>
              <td>{buy.product}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
