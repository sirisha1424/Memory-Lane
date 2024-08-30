import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepagestatic from "pages/Homepagestatic";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homepagestatic",
      element: <Homepagestatic />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
