import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
    >
      <div className="flex justify-between items-center h-[75vh]">
        <div className="flex flex-col ml-10 p-10">
          <p className="lg:text-7xl sm:text-3xl my-6 font-bold text-gray-600">EAT HEALTHY</p>
          <p className="lg:text-7xl sm:text-3xl my-6 font-bold text-gray-600">STAY HEALTHY</p>
          <Link to={"/register"} className="">
            <button className="lg:text-4xl sm:text-2xl mt-10 lg:p-6 lg:px-10 lg:pb-7 sm:px-4 sm:p-4 font-semibold text-white bg-green-500 rounded-full shadow-xl">Get Started</button>
          </Link>
        </div>
        <img src="page-image.png" className="w-[700px] m-16 rounded-xl" />
      </div>
    </motion.nav>
  );
}

export default Home;
