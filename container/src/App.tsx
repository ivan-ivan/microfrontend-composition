import * as React from 'react';
import './App.css';
import MicroFrontendWrapper from './components/MicroFrontendWrapper';
import { MFE_CONFIGURATION } from './constants';
import { mfeEntity } from './types';

function App() {
  return (
    <main id="container">
      {
        MFE_CONFIGURATION.map((mfe: mfeEntity) => {
          return <MicroFrontendWrapper key={mfe.id} name={mfe.id} url={mfe.url} />
        })
      }
    </main>
  )
}

export default App
