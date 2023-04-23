import { ArrowRightOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const routes = [
    {
        icon: ArrowRightOnRectangleIcon,
        name: "Sign Up",
        path: "/signup",
        element: <Signup />,
    },
    {
        icon: UserPlusIcon,
        name: "Log In",
        path: "/login",
        element: <Login />,
    },
];

export default routes;