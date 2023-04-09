import useUniqueId from "../hooks/useId";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";

export const navbar = [
    {
        id: useUniqueId,
        title: "Home",
        element: <HomePage/>,
        path: "/home",
        private: false,
        hidden: false,
    },
    {
        id: useUniqueId,
        title: "Properties",
        element: <PropertiesPage/>,
        path: "/properties",
        private: false,
        hidden: false,
    },
    {
        id: useUniqueId,
        title: "Sign In",
        element: <h1>Sign In</h1>,
        path: "/signin",
        private: false,
        hidden: true,
    },
];