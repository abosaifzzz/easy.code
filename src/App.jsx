import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Components/Login-register/Login';
import Accounting1 from './Components/Accounting1/Accounting1';
import Layout2 from './Components/Layout2/Layout2';
import Accounting2 from './Components/Accounting2/Accounting2';
import NotFound from './Components/NotFound/NotFound';
// import Programs from './Components/Programs/Programs';
import CloudBussiness from './Components/CloudBussiness/CloudBussiness';
import FinalBussiness from './Components/FinalBussiness/FinalBussiness';
import Systems from './Components/Systems/Systems';
import ContactUs from './Components/Contact/ContactUs';


function App() {

  let routers = createBrowserRouter([
    {
      index: true,
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout2 />,
      children: [
        { path: "accounting1", element: <Accounting1 /> },
        { path: "accounting2", element: <Accounting2 /> },

      ],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "about", element: <AboutUs /> },
        // { path: "acounting1", element: <Accounting1 /> },
        { path: "cloud", element: <CloudBussiness /> },
        { path: "final", element: <FinalBussiness /> },
        { path: "systems", element: <Systems /> },
        { path: "contact", element: <ContactUs /> },


      ],
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
