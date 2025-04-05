import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Number from './component/Number';
import Operation from './component/Operation'
import { NumberProvider } from './component/NumberContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberProvider>
      <Number />
      <Operation />
    </NumberProvider>
  </React.StrictMode>
);