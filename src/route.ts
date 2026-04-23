import { createBrowserRouter } from "react-router";
//import TestFile from "./testfile";
import App from "@/App";    
import Ticket from "@/components/user/ticket";

export const router = createBrowserRouter([

  {
    path: "/",
    Component: App,
  },

  /*/{
    path: "/testfile",
    Component: TestFile,  
  },*/

  {
    path: "/ticket",
    Component: Ticket, 
     
  },

]);
