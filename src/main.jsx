import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact'
import { subPages } from './resources/data';
import './index.css'
import SubPage from './components/SubPage';
import DialogflowMessenger from './components/DialogflowMessenger';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  />,
  },
  {
    path: "/subPage/:subPageId",
    element: <SubPage  />,
    loader: ({params}) => {
      return subPages[params.subPageId];
    }
  },
  {
    path: "/contact",
  element: <Contact  />
},
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <DialogflowMessenger/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
