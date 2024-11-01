import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Error from './Conponents/Error.jsx'
import Books from './Conponents/Books.jsx';
import Default from './Conponents/Default.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
       {
        path: "/",
        element: <Default />,
       },
       {
        path: "/books",
        element: <Books />,
       },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
