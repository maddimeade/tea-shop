// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavigationBar from './atoms/NavigationBar';
import PointOfSalePage from './pages/PointOfSalePage';
import MenuCreationPage from './pages/MenuCreationPage';
import './index.css';

// Define your routes
const routes = [
  {
    path: '/',
    element: <PointOfSalePage />,
    // Add loaders or other properties as needed
  },
  {
    path: '/menu-creator',
    element: <MenuCreationPage />,
    // Add loaders or other properties as needed
  },
];

// Create the router
const router = createBrowserRouter(routes);

// Render the app with the router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <NavigationBar />
      {/* Add the Outlet component to render the content of matched route */}
      <Outlet />
    </RouterProvider>
  </React.StrictMode>
);
