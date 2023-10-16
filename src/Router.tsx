import { createBrowserRouter } from "react-router-dom";
import { Home } from "./page/Anonymus/Home";
import { Cart } from "./page/Anonymus/Cart";

const anonymus = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
];

export const router = createBrowserRouter([...anonymus]);
