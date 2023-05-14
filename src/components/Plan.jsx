import { useState, React, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Plan() {
  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  const { calory } = useParams();
  const [isLoading, setIsloading] = useState(true);

  const [breakFastFooods, setBreakFaseFoods] = useState();
  const [lunchFoods, setLunchFoods] = useState();
  const [dinnerFoods, setDinnerFoods] = useState();

  const getData = async () => {
    try {
      const apidata = await axios.post(
        "http://localhost:4000/api/v1/plan/calculate",
        {
          calories: parseInt(calory),
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(apidata.data);
      setBreakFaseFoods(apidata.data.breakfast);
      setLunchFoods(apidata.data.lunch);
      setDinnerFoods(apidata.data.dinner);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpen1 = (value) => {
    setOpen1(open1 === value ? 0 : value);
  };
  const handleOpen2 = (value) => {
    setOpen2(open2 === value ? 0 : value);
  };

  if (isLoading) return <></>;
  else
    return (
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
      >
        <div className="flex justify-between">
          <div className="p-10 w-full">
            <p className="text-2xl font-semibold text-green-700">Breakfast</p>
            {breakFastFooods.currentFoods.map((ele, index) => {
              return (
                <Accordion
                  open={open1 === index + 1}
                  icon={<Icon id={1} open={open1} />}
                  className="bg-white p-3 rounded-lg my-4"
                >
                  <AccordionHeader onClick={() => handleOpen1(index + 1)}>
                    <div className="flex justify-between w-full">
                      <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                      <div className="mr-20 flex items-center">
                        {ele.calory} Cal / {ele.contentPerType}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody classname="overflow-hidden">
                    <div className="flex justify-between p-3">
                      <div>
                        <img src={ele.image} className="w-48 rounded-lg" />
                      </div>
                      <div className="flex justify-around text-xl">
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Protein</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.protein} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Carbs</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.carbs} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fats</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fats} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fiber</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fiber} gm</div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
            <p className="text-2xl font-semibold text-green-700">Lunch</p>
            {lunchFoods.currentFoods.map((ele, index) => {
              return (
                <Accordion
                  open={open1 === index + 1}
                  icon={<Icon id={1} open={open1} />}
                  className="bg-white p-3 rounded-lg my-4"
                >
                  <AccordionHeader onClick={() => handleOpen1(index + 1)}>
                    <div className="flex justify-between w-full">
                      <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                      <div className="mr-20 flex items-center">
                        {ele.calory} Cal / {ele.contentPerType}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody classname="overflow-hidden">
                    <div className="flex justify-between p-3">
                      <div>
                        <img src={ele.image} className="w-48 rounded-lg" />
                      </div>
                      <div className="flex justify-around text-xl">
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Protein</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.protein} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Carbs</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.carbs} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fats</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fats} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fiber</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fiber} gm</div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
            <p className="text-2xl font-semibold text-green-700">Dinner</p>
            {dinnerFoods.currentFoods.map((ele, index) => {
              return (
                <Accordion
                  open={open1 === index + 1}
                  icon={<Icon id={1} open={open1} />}
                  className="bg-white p-3 rounded-lg my-4"
                >
                  <AccordionHeader onClick={() => handleOpen1(index + 1)}>
                    <div className="flex justify-between w-full">
                      <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                      <div className="mr-20 flex items-center">
                        {ele.calory} Cal / {ele.contentPerType}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody classname="overflow-hidden">
                    <div className="flex justify-between p-3">
                      <div>
                        <img src={ele.image} className="w-48 rounded-lg" />
                      </div>
                      <div className="flex justify-around text-xl">
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Protein</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.protein} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Carbs</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.carbs} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fats</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fats} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fiber</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fiber} gm</div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
          <div className="p-10 w-full">
            <p className="text-2xl font-semibold text-green-700">Breakfast</p>
            {breakFastFooods.moreFoods.map((ele, index) => {
              return (
                <Accordion
                  open={open2 === index + 1}
                  icon={<Icon id={1} open={open2} />}
                  className="bg-white p-3 rounded-lg my-4"
                >
                  <AccordionHeader onClick={() => handleOpen2(index + 1)}>
                    <div className="flex justify-between w-full">
                      <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                      <div className="mr-20 flex items-center">
                        {ele.calory} Cal / {ele.contentPerType}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody classname="overflow-hidden">
                    <div className="flex justify-between p-3">
                      <div>
                        <img src={ele.image} className="w-48 rounded-lg" />
                      </div>
                      <div className="flex justify-around text-xl">
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Protein</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.protein} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Carbs</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.carbs} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fats</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fats} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fiber</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fiber} gm</div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
            <p className="text-2xl font-semibold text-green-700">Lunch</p>
            {lunchFoods.moreFoods.map((ele, index) => {
              return (
                <Accordion
                  open={open2 === index + 1}
                  icon={<Icon id={1} open={open2} />}
                  className="bg-white p-3 rounded-lg my-4"
                >
                  <AccordionHeader onClick={() => handleOpen2(index + 1)}>
                    <div className="flex justify-between w-full">
                      <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                      <div className="mr-20 flex items-center">
                        {ele.calory} Cal / {ele.contentPerType}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody classname="overflow-hidden">
                    <div className="flex justify-between p-3">
                      <div>
                        <img src={ele.image} className="w-48 rounded-lg" />
                      </div>
                      <div className="flex justify-around text-xl">
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Protein</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.protein} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Carbs</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.carbs} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fats</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fats} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fiber</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fiber} gm</div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
            <p className="text-2xl font-semibold text-green-700">Dinner</p>
            {dinnerFoods.moreFoods.map((ele, index) => {
              return (
                <Accordion
                  open={open2 === index + 1}
                  icon={<Icon id={1} open={open2} />}
                  className="bg-white p-3 rounded-lg my-4"
                >
                  <AccordionHeader onClick={() => handleOpen2(index + 1)}>
                    <div className="flex justify-between w-full">
                      <div className="text-2xl ml-4 pb-1">{ele.name}</div>
                      <div className="mr-20 flex items-center">
                        {ele.calory} Cal / {ele.contentPerType}
                      </div>
                    </div>
                  </AccordionHeader>
                  <AccordionBody classname="overflow-hidden">
                    <div className="flex justify-between p-3">
                      <div>
                        <img src={ele.image} className="w-48 rounded-lg" />
                      </div>
                      <div className="flex justify-around text-xl">
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Protein</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/755/755346.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.protein} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Carbs</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/5562/5562026.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.carbs} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fats</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/2400/2400736.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fats} gm</div>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-5">
                          <div>Fiber</div>
                          <div>
                            <img
                              src="https://cdn-icons-png.flaticon.com/512/4661/4661512.png"
                              className="w-16 mt-1 rounded-lg border-[3px] border-gray-600 p-2"
                            />
                          </div>
                          <div className="mt-1 text-xl">{ele.fiber} gm</div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
      </motion.nav>
    );
}

export default Plan;