import React from "react";
import useUniqueId from "../hooks/useId";
import Animation from "../components/Animate";
const HomePage = React.lazy(() => import("../pages/Home"));
const MyProfilePage = React.lazy(() => import("../pages/MyProfile"));
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const Favourite = React.lazy(() => import("../pages/Favourite"));
const RegisterPage = React.lazy(() => import("../pages/Register"));
const SinglePage = React.lazy(() => import("../pages/SinglePage"));

export const navbar = [
  {
    id: useUniqueId,
    title: "Home",
    element: (
      <React.Suspense fallback={<React.Fragment>
        <Animation />
      </React.Fragment>}>
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
      <React.Suspense fallback={<React.Fragment> <Animation /></React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Registeration",
    element: (
      <React.Suspense fallback={<React.Fragment> <Animation /></React.Fragment>}>
        <RegisterPage />
      </React.Suspense>
    ),
    path: "/register",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Single Page",
    element: (
      <React.Suspense fallback={<React.Fragment> <Animation /></React.Fragment>}>
        <SinglePage />
      </React.Suspense>
    ),
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "My Profile",
    element: (
      <React.Suspense fallback={<React.Fragment> <Animation /></React.Fragment>}>
        <MyProfilePage />
      </React.Suspense>
    ),
    path: "/my-profile",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Favourite Page",
    element: (
      <React.Suspense fallback={<React.Fragment> <Animation /></React.Fragment>}>
        <Favourite />
      </React.Suspense>
    ),
    path: "/favourite",
    private: true,
    hidden: true,
  },
];
