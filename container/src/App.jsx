import React from 'react';
import './App.css';
import MicroFrontendWrapper from './components/MicroFrontendWrapper';

const mfeConfiguration = [
  {
    id: 'grid',
    url: 'http://localhost:5001'
  },
  {
    id: 'text',
    url: 'http://localhost:5002',
    test: 'mountTextMfe',
  },
  {
    id: 'image',
    url: 'http://localhost:5003'
  },
  {
    id: 'list',
    url: 'http://localhost:5004'
  },
];

function App() {
  return (
    <main id="container">
      {
        mfeConfiguration.map((mfe) => {
          return <MicroFrontendWrapper key={mfe.id} name={mfe.id} url={mfe.url} />
        })
      }
    </main>
  )
}

export default App
