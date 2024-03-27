import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="mt-8">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 bg-none"
            >
              <li>
                <NavLink to='/' className={({isActive})=>isActive ? 'border-2 rounded-xl border-[#76c893] bg-none text-sm font-bold' : 'text-sm font-bold' }>Home</NavLink>
              </li>
              <li>
                <NavLink to='/booklist' className={({isActive})=>isActive ? 'border-2 rounded-xl border-[#76c893] bg-none text-sm font-bold' : 'text-sm font-bold' }>Listed Books</NavLink>
              </li>
              <li>
                <NavLink to='/readpages' className={({isActive})=>isActive ? 'border-2 rounded-xl border-[#76c893] bg-none text-sm font-bold' : 'text-sm font-bold' }>Pages To Read</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to='/' className="cursor-pointer  font-extrabold text-xl lg:text-3xl flex gap-0">
            Book<span className="text-[#76c893] ">Verdicts</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <NavLink to='/' className={({isActive})=>isActive ? 'border-2 rounded-xl border-[#76c893] bg-none text-sm font-bold' : 'text-sm font-bold'  }>Home</NavLink>
              </li>
              <li>
                <NavLink to='/booklist'  className={({isActive})=>isActive ? 'border-2 rounded-xl border-[#76c893] bg-none text-sm font-bold' : 'text-sm font-bold' }>Listed Books</NavLink>
              </li>
              <li>
                <NavLink to='/readpages' className={({isActive})=>isActive ? 'border-2 rounded-xl border-[#76c893] bg-none text-sm font-bold' : 'text-sm font-bold' }>Pages To Read</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="btn bg-[#76c893] text-white">Sign in</a>
          <a className="btn bg-[#76c893] text-white">Sign up</a>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
