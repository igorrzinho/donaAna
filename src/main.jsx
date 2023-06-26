import React from 'react';
import ReactDOM from 'react-dom/client';
import Carriniho from './carrinho.jsx';
import Home from './home.jsx';
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/car',
    element: <Carriniho />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
