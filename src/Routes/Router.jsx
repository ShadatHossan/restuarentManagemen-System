
import { createBrowserRouter } from 'react-router-dom';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import Secret from '../Component/Secret';
import Dashboard from '../Layout/Dashboard';
import AdItems from '../Page/DashBoard/Admin/AdItems';
import ManageItems from '../Page/DashBoard/Admin/ManageItems';
import AllUsers from '../Page/DashBoard/AllUsers';
import MyCart from '../Page/DashBoard/MyCart/MyCart';

import Home from '../Page/Home';
import Main from '../Page/Main';
import Menu from '../Page/Menu/Menu';
import Order from '../Page/Order/Order';
import Payment from '../Payment/Payment';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminRoute from './AdminRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'menu',
        element: <Menu></Menu>
      },
      {
        path: "order/:category", //daynamic route
        element: <Order></Order>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>,

      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers>
        </AdminRoute>
      },

      {
        path: 'additems',
        element: <AdminRoute><AdItems></AdItems></AdminRoute>
      },
      {
        path: 'manageitems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      }
    ]
  }
])


