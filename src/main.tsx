import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TableData from './components/TableData/TableData';

ReactDOM.render(
  <React.StrictMode>
    <TableData titles={[{ title: 'Heading' }]} />
  </React.StrictMode>,
  document.getElementById('root')
);
