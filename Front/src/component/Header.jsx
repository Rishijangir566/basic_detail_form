// import React from 'react'
import { Link } from "react-router";

function Header() {
  return (
    <div className=" bg-amber-200">
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-4 space-y-4 md:space-y-0">
        <h2 className="text-2xl font-bold text-blue-900 text-center">Logo</h2>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="bg-blue-900 text-white text-lg rounded font-medium py-1 px-6"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-blue-900 text-white text-lg rounded font-medium py-1 px-6"
          >
            Login
          </Link>
          <button className="bg-blue-900 text-white text-lg rounded font-medium py-1 px-6">
            Log Out
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
