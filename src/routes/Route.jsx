import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import BookPage from "../Pages/BookPage/BookPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
     },
     {
      path:'/bookDetails/:booksId',
      Component: BookDetails,
      loader: ()=> fetch('/booksData.json')
     }
    ],
    errorElement: <ErrorPage/>
  },
  
])