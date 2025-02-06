import React from "react";
import { myRoutes } from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
const App = () => {
    
  return <RouterProvider router={myRoutes} />;
};

export default App;
