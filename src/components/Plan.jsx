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
  const { calory } = useParams();
  const [isLoading, setIsloading] = useState(true);

  const [breakFastFooods, setBreakFaseFoods] = useState();
  const [lunchFoods, setLunchFoods] = useState();
  const [dinnerFoods, setDinnerFoods] = useState();
  const [totalCalory, setTotalCalory] = useState();

  const getData = async () => {
    try {
      const apidata = await axios.post(
        "https://healthapp-backend.onrender.com/api/v1/plan/calculate",
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

      console.log(apidata)

      let cal = 0;
      apidata.data.breakfast.currentFoods.map((ele, ind) => {
        cal += ele.calory;
      });
      apidata.data.lunch.currentFoods.map((ele, ind) => {
        cal += ele.calory;
      });
      apidata.data.dinner.currentFoods.map((ele, ind) => {
        cal += ele.calory;
      });

      console.log("cal", cal);
      setTotalCalory(cal);

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

  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);
  const [open4, setOpen4] = useState(0);
  const [open5, setOpen5] = useState(0);
  const [open6, setOpen6] = useState(0);
  const handleOpen1 = (value) => {
    setOpen1(open1 === value ? 0 : value);
  };
  const handleOpen2 = (value) => {
    setOpen2(open2 === value ? 0 : value);
  };
  const handleOpen3 = (value) => {
    setOpen3(open3 === value ? 0 : value);
  };
  const handleOpen4 = (value) => {
    setOpen4(open4 === value ? 0 : value);
  };
  const handleOpen5 = (value) => {
    setOpen5(open5 === value ? 0 : value);
  };
  const handleOpen6 = (value) => {
    setOpen6(open6 === value ? 0 : value);
  };

  if (isLoading) return <></>;
  else
    return (
      <>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
        >
          <div className="flex justify-between">
            <div className="p-10 w-full">
              <div className="w-full flex justify-center mb-5">
                <p className="text-3xl font-bold text-gray-600">Diet Plan</p>
              </div>
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
              {dinnerFoods.currentFoods.map((ele, index) => {
                return (
                  <Accordion
                    open={open3 === index + 1}
                    icon={<Icon id={1} open={open3} />}
                    className="bg-white p-3 rounded-lg my-4"
                  >
                    <AccordionHeader onClick={() => handleOpen3(index + 1)}>
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
              <div className="w-full flex justify-center mb-5">
                <p className="text-3xl font-bold text-gray-600">
                  Recommendations
                </p>
              </div>
              <p className="text-2xl font-semibold text-green-700">Breakfast</p>
              {breakFastFooods.moreFoods.map((ele, index) => {
                return (
                  <Accordion
                    open={open4 === index + 1}
                    icon={<Icon id={1} open={open4} />}
                    className="bg-white p-3 rounded-lg my-4"
                  >
                    <AccordionHeader onClick={() => handleOpen4(index + 1)}>
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
                    open={open5 === index + 1}
                    icon={<Icon id={1} open={open5} />}
                    className="bg-white p-3 rounded-lg my-4"
                  >
                    <AccordionHeader onClick={() => handleOpen5(index + 1)}>
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
                    open={open6 === index + 1}
                    icon={<Icon id={1} open={open6} />}
                    className="bg-white p-3 rounded-lg my-4"
                  >
                    <AccordionHeader onClick={() => handleOpen6(index + 1)}>
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
        <div className="flex justify-center p-10 pb-0">
              <div className="flex flex-col items-center p-5 px-10 rounded-xl backdrop-blur-xl backdrop-brightness-90">
                <p className="w-fit text-2xl font-semibold text-gray-600">Total Calories</p>
                <p className="w-fit text-3xl font-bold text-gray-600">{totalCalory}</p>
              </div>
        </div>
      </>
    );
}

export default Plan;
