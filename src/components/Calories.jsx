import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Calories() {
  const navigate = useNavigate();
  const [calories, setCalories] = useState(0);

  const submitForm = () => {
    navigate("/plan/" + calories.toString());
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
    >
      <div className="flex justify-between items-center h-[65vh]">
        <div className="flex flex-col ml-10 p-10">
          <form className="p-10 h-fit flex flex-col rounded-3xl border-4 border-green-500">
            <p className="text-3xl font-semibold text-green-600 py-1 mb-2">
              Calories
            </p>
            <input
              required
              type="number"
              className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
              onChange={(e) => setCalories(e.target.value)}
            />

            <button
              className="text-2xl py-2 mt-4 font-semibold text-white bg-green-500 rounded-full shadow-xl"
              onClick={submitForm}
            >
              Submit
            </button>
          </form>
        </div>
        <img src="page-image.png" className="w-[500px] m-24 rounded-xl" />
      </div>
    </motion.nav>
  );
}

export default Calories;
