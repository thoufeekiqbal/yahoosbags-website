import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-10 py-5">

      <h1 className="text-2xl font-bold">
        Yahoos Bags
      </h1>

      <ul className="flex gap-8 text-lg">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/manufacturing">Manufacturing</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;