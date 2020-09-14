import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./Components/pages/Home")),
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./Components/pages/Register")),
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./Components/pages/Login")),
  },
  {
    path: "/tasks",
    label: "Tasks",
    exact: true,
    component: lazy(() => import("./Components/pages/Contacts")),
  },
];
