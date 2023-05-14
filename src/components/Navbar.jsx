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
          <Link to="/" className="flex items-center">
            <img src="https://png.pngtree.com/png-vector/20230420/ourmid/pngtree-green-leaf-icon-design-template-vector-image_6710581.png" className="w-20" />
            <p className="text-4xl font-bold pb-2 text-green-800">
            HealthFull
            </p>
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            className="lock text-left text-4xl font-semibold text-green-800 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
          >
            About
          </Link>
          <Link
            to="/calories"
            className="lock text-left text-4xl font-semibold text-green-800 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
          >
            Plan
          </Link>
          <Link
            to="/login"
            className="lock text-left text-4xl font-semibold text-green-800 text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
          >
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
