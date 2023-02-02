import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import App from './App'
import './index.css';

import Router from 'routes/Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={Router} />
   </React.StrictMode>,
);
