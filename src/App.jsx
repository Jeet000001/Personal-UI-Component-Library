import React, { Component } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Docs from "./pages/Docs";
import RootLayout from "./Layouts/RootLayout";
import ComponentsLayout from "./Layouts/ComponentsLayout";
import UiNavbar from "./UIcomponents/UiAlert";
import UiButton from "./UIcomponents/UiButton";
import UiAvatar from "./UIcomponents/UiAvatar";
import UiCard from "./UIcomponents/UiCard";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="docs" element={<Docs />} />
        <Route path="component" element={<ComponentsLayout />}>
          <Route path="uialert" element={<UiNavbar />} />
          <Route path="uiAvatar" element={<UiAvatar />} />
          <Route path="Uibutton" element={<UiButton />} />
          <Route path="uicard" element={<UiCard />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
