// App.js

import React, { useEffect, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect
} from "react-router-dom";

import AuthPage from './pages/AuthPage';
import Homepage from './pages/Homepage';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      const isLoggedIn = false;
      return isLoggedIn ? redirect("/homepage") : redirect("/login")
    },

  },
  {
    path: "login",
    Component: AuthPage
  },
  {
    path: "homepage",
    Component: Homepage
  },

]);

const App = () => {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
};

export default App;
