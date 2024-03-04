import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard, { dashboardLoader } from './pages/Dashboard';
import RootLayout, { RootLayoutLoader } from './pages/layouts/RootLayout';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    loader: RootLayoutLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
