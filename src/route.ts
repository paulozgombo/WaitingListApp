import { createBrowserRouter } from "react-router";
import TestFile from "./testfile";
import App from "./App";    

export const router = createBrowserRouter([

  {
    path: "/",
    Component: App,
  },

  {
    path: "/testfile",
    Component: TestFile,  
  },

]);
