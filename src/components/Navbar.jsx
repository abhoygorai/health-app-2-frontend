import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 w-full block sm:flex sm:justify-between sm:items-center py-6">
        <div>
          <Link to="/">
            <img src="logo.png" className="w-20" />
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            className="lock text-left text-4xl font-semibold text-green-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
          >
            About
          </Link>
          <Link
            to="/calories"
            className="lock text-left text-4xl font-semibold text-green-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
          >
            Plan
          </Link>
          <Link
            to="/login"
            className="lock text-left text-4xl font-semibold text-green-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
