import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const BookList = ({handleSort}) => {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <main>
      <div>
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>handleSort(`Rahat the great`)} className="cursor-pointer">
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publishing Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center lg:items-start -mx-4 overflow-x-auto overflow-y-hidden lg:justify-start flex-nowrap">
        <Link
          to=""
          onClick={() => setTabIdx(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIdx === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-[#76c893] dark:text-[#76c893] text-bold`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Book</span>
        </Link>
        <Link
          to={`wishlist`}
          onClick={() => setTabIdx(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIdx === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-[#76c893] dark:text-[#76c893] text-bold`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>WishList</span>
        </Link>
      </div>

      <Outlet />
    </main>
  );
};

export default BookList;
