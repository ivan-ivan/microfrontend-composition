import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <table className="grid-wrapper">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
