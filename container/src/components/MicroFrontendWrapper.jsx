/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect } from 'react';
import './MicroFrontendWrapper.css';

const woodTypes = [
  'Oak',
  'Walnut',
  'Pine',
  'Birch',
  'Redwood',
  'Beech',
  'Mahogany'
];

export default function MicroFrontendWrapper({ name, url }) {
  useEffect(() => {
    const renderMicrofrontend = () => {
      const capitalizeFirstLetter = (string) => (string.charAt(0).toUpperCase() + string.slice(1));
      const mfeType = `mount${capitalizeFirstLetter(name)}Mfe`;

      if (mfeType === 'mountListMfe') {
        window[mfeType](`${name}-container`, woodTypes);
      } else {
        window[mfeType](`${name}-container`);
      }
    }

    const scriptId = `mfe-script-${name}`;

    if (window && document && !document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = "module";
      script.crossOrigin = '';
      script.src = `${url}/main.js`;
      script.onload = renderMicrofrontend;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="mfe-wrapper" id={`${name}-container`} />
  )
}