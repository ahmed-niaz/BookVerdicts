import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import BookList from "../pages/BookList";
import Details from "../components/Details";



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
        path : '/book/:bookId',
        element: <Details/>,
        loader: ()=> fetch(`../books.json`),
      },
      {
        path: "/booklist",
        element: <BookList />,
      }
    ],
  },
]);
