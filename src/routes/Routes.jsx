import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import BookList from "../pages/BookList";
import Readablepages from '../pages/Readtopages';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/booklist",
        element: <BookList />,
      },
      {
        path: '/pagetoread',
        element: <Readablepages/>
      }
    ],
  },
]);
