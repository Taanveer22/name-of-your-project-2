import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-4 bg-gray-300 shadow-md px-8">
        <h1 className="text-3xl font-bold text-red-400 italic">The Phone Hub</h1>
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              favourites
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-400 underline"
                  : ""
              }
            >
              login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
