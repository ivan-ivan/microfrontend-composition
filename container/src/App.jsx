import React from 'react';
import './App.css';
import MicroFrontendWrapper from './components/MicroFrontendWrapper';
import { mfeConfiguration } from './constants';

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
