import { Menu } from 'antd';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Main from './layouts/main/Main';
import Home from './layouts/main/pages/Home';
import Auth from './layouts/auth/Auth';
import Login from './layouts/auth/pages/Login/Login'
import Register from './layouts/auth/pages/Register/Register'

const routes = [
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]

const App = () => {
  return (<RouterProvider router={createBrowserRouter(routes)}/>)
};
export default App;
