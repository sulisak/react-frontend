import React, {useState, useEffect} from 'react'

export default function App() {
  const [users, setUsers] = useState([])
  useEffect(() => 
  {
    console.log(import.meta.env.VITE_API);
    
    fetch(import.meta.env.VITE_API+'/buy_details',
      )
      .then(res => res.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  }, [])
  return (
<table>
  
    <div>
      <h1>Buy details</h1>
      <thead>
      <ul>
      {users.map(buy => (
        <li><span>Id:</span> {buy.id}
         
        </li>
 
      ))}
      {users.map(user => (
        <li> <span>Buyer name:</span>{user.username}
         
        </li>
      ))}
      {users.map(product => (
        <li> <span>Buy Product name:</span>{product.product}
         
        </li>
 
      ))}
      
      {users.map(buy => (
            <li> <span>User buy email:</span>{buy.useremail}
            </li>
      ))}
    </ul>
  </thead>
    </div>
    </table>
  )
}