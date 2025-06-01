import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export default Routes;