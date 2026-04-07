import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import BookPage from "../Pages/BookPage/BookPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayOut/>,
    children:[
     {
      index:true,
      element:<HomePage/>
     },
     {
      path:'/books',
      element:<BookPage/>
     }
    ],
    errorElement: <ErrorPage/>
  },
  
])