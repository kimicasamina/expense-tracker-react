// react 
import { useState } from 'react'

// rrd
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// toastify library
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components imports
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import RootLayout, { RootLayoutLoader } from './pages/layouts/RootLayout';
import Error from './pages/Error';
import { logoutAction } from './actions/logoutAction';
import About from './pages/About';
import ExpensesPage, { expensesPageLoader } from './pages/ExpensesPage';

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesPageLoader,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
