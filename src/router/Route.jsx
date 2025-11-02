import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Favourites from "../pages/Favourites";
import Login from "../pages/Login";
import CardDetail from "../components/CardDetail";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/cardDetail/:id",
        element: <CardDetail></CardDetail>,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default myCreatedRoute;
