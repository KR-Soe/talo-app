import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/index.scss';
import App from './components/App';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

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
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);