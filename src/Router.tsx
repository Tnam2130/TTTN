import { createBrowserRouter } from "react-router-dom";
import { LoginAdmin } from "./page/Admin/Login";
import { LoginUser } from "./page/User/Login";
import { HomeUser } from "./page/User/Home";
import { HomeAdmin } from "./page/Admin/Home";

const admin = [
    {
        path: "/admin",
        element: <HomeAdmin />
    },
    {
        path: "/admin/login",
        element: <LoginAdmin />
    }
]

const user = [
    {
        path: "/login",
        element: <LoginUser />
    },
    {
        path: "/",
        element: <HomeUser />
    }
]
export const router = createBrowserRouter([
    ...user,
    ...admin
]);