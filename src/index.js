import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/scss/index.scss';
import App from './components/App';
import Register from './components/Register';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/register',
    element: <Register />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);