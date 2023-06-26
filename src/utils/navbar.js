import React from "react";
import useUniqueId from "../hooks/useId";
// import { HomePage } from "../pages/Home";
// import { PropertiesPage } from "../pages/Properties";

const HomePage = React.lazy(() => import("../pages/Home"));
const PropertiesPage = React.lazy(() => import("../pages/Properties"));

export const navbar = [
  {
    id: useUniqueId,
    title: "Home",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Properties",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
         <PropertiesPage />
      </React.Suspense>
    ),
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
