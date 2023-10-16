import { createBrowserRouter } from "react-router-dom";
import { HomeAdmin } from "./page/Anonymus/Home";

const anonymus = [
  {
    path: "/",
    element: <HomeAdmin />,
  },
];

export const router = createBrowserRouter([...anonymus]);
