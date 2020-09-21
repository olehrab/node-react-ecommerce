import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Cart, Catalog, Home, Product, ResetPage } from "../pages";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ForgotPage from "../pages/Forgot";
import OrderPage from "../pages/Order";
import ProfilePage from "../pages/Profile";
import WishlistPage from "../pages/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage/>
      },
      {
        path: "forgot-password",
        element: <ForgotPage/>
      },
      {
        path: "reset-password",
        element: <ResetPage/>
      },
      {
        path: "order",
        element: <OrderPage/>
      },
      {
        path: "wishlist",
        element: <WishlistPage/>
      },
      {
        path: "profile",
        element: <ProfilePage/>
      },
      {
        path: "catalog",
        element: <Catalog />,
        children: [
          {
            path: ":id",
            element: <Catalog />,
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            path: ":id",
            element: <Product />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
