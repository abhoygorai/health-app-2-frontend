import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const apidata = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(apidata);
      if (apidata.status === 204) {
        toast.error("User doesn't exist");
        return;
      } else if (apidata.status === 500) {
        toast.error("Internal server error");
        return;
      } else if (apidata.status === 200) {
        toast.success("Login Succesful");
        setTimeout(() => {
          navigate("/plan");
        }, 1000);
      } else if (apidata.status === 203) {
        toast.error("Wrong credentials");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
    >
      <div className=" flex justify-between">
        <div className="flex items-center">
          <form className="p-10 m-28 h-fit flex flex-col rounded-3xl border-4 border-green-500">
            <p className="text-5xl mb-5 font-semibold text-green-600">Login</p>

            <p className="text-2xl text-green-600 py-1 mb-1">Email</p>
            <input
              required
              type="email"
              className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
              onChange={(e) => setEmail(e.target.value)}
            />

            <p className="text-2xl text-green-600 py-1 mb-1">Password</p>
            <input
              required
              type="password"
              className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              className="text-2xl py-2 mt-4 font-semibold text-white bg-green-500 rounded-full shadow-xl"
              onClick={submitForm}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex items-center">
          <img src="page-image.png" className="w-[650px] m-24 rounded-xl" />
        </div>
      </div>
    </motion.nav>
  );
}

export default Login;
