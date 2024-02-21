import "./App.css";

import {
  createBrowserRouter,
  RouterProvider
 
} from "react-router-dom";
import Dashboardpage from "./Pages/Dashboardpage";
import Userlistpage from "./Pages/Userlistpage";
import Categorypage from "./Pages/Categorypage"
import Subcategorypage from "./Pages/Subcategorypage"
import Productpage from "./Pages/ProductPage"
import Home from "./Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Dashboardpage /> },
      {
        path: "/userlist",
        element: <Userlistpage />,
      },
      ,
      {
        path: "/category",
        element: <Categorypage />,
      },
      ,
      {
        path: "/Subcategorypage",
        element: <Subcategorypage />,
      },
      ,
      {
        path: "/Productpage",
        element: <Productpage />,
      },
      
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
