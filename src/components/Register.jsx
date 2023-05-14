import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [weight, setWeight] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const apidata = await axios.post(
        "http://localhost:4000/api/v1/auth/register",
        {
          name: name,
          email: email,
          gender: gender,
          age: age,
          weight: weight,
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
      if (apidata.status === 208) {
        toast.error("User already registered, please login");
      } else if (apidata.status === 500) {
        toast.error("Internal server error");
      } else if (apidata.status === 200) {
        toast.success("Registration successful");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
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
        <form className="p-10 m-12 flex flex-col rounded-3xl border-4 border-green-600">
          <p className="text-5xl mb-5 font-semibold text-green-700">Register</p>
          <p className="text-2xl text-green-700 py-1 mb-1">Name</p>
          <input
            required
            type="text"
            className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-2xl text-green-700 py-1 mb-1">Email</p>
          <input
            required
            type="email"
            className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="register-page-small-div">
            <div className="">
              <p className="text-2xl text-green-700 py-1 mb-1">Gender</p>
              <input
                required
                type="text"
                className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="">
              <p className="text-2xl text-green-700 py-1 mb-1">Age</p>
              <input
                required
                type="number"
                className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] ptext-xl text-green-600 font-semibold"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <p className="text-2xl text-green-700 py-1 mb-1">Body Weight(Kg)</p>
          <input
            required
            type="number"
            className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-600 font-semibold"
            onChange={(e) => setWeight(e.target.value)}
          />
          <p className="text-2xl text-green-700 py-1 mb-1">Password</p>
          <input
            required
            type="password"
            className="p-2 px-4 rounded-2xl focus:outline-none w-[400px] text-xl text-green-700 font-semibold"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="text-2xl py-2 mt-4 font-semibold text-white bg-green-600 rounded-full shadow-xl"
            onClick={submitForm}
          >
            Submit
          </button>
        </form>
        <div className="flex items-center">
          <img src="page-image.png" className="w-[650px] m-24 rounded-xl" />
        </div>
      </div>
    </motion.nav>
  );
}

export default Register;
