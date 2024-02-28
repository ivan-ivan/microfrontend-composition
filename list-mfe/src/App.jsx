/* eslint-disable react/prop-types */
import React from 'react';
import './App.css'

function App({ list }) {
  return (
    <ul className="list-wrapper">
      {
        list.map((item) => {
          return <li key={item}>{item}</li>
        })
      }
    </ul>
  )
}

export default App
