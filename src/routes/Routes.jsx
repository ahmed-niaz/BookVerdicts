import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import BookList from "../pages/BookList";
import Details from "../components/Details";
import ReadBooks from "../components/ReadBooks";
import WishList from "../components/WishList";

import ReadPages from "../pages/ReadPages";
import ErrorPage from "../components/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : '/book/:bookId',
        element: <Details/>,
        loader: ()=> fetch(`../books.json`),
      },
      {
        path: "/booklist",
        element: <BookList />,
        loader: ()=> fetch(`../books.json`),
        children: [
          {
            index: true,
            element: <ReadBooks/>,
            loader: ()=> fetch(`../books.json`),
          },
          {
            path: 'wishlist',
            element: <WishList/>,
            loader: ()=> fetch(`../books.json`),
          }
        ]
      },
      {
        path: '/readpages',
        element: <ReadPages/>,
        loader: ()=> fetch(`../books.json`),
      },
    ],
  },
]);
