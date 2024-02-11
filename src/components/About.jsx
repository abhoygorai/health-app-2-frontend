import { useState, React } from "react";
import { motion } from "framer-motion";

function Plan() {
  const [isLoading, setIsloading] = useState(false);

  if (isLoading) return <></>;
  else
    return (
      <>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sm:container sm:mx-auto backdrop-blur-xl backdrop-brightness-90 rounded-3xl"
        >
          <div className="flex justify-between text-center">
            <div className="m-11">
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome to HealthFull, where achieving your health and fitness
                goals is made simple. Our platform empowers you to create
                personalized diet plans based on your unique calorie intake
                needs. Using our easy-to-use calorie calculator, discover your
                daily caloric requirements. Receive customized meal plans that
                align with your goals, whether it's weight loss, maintenance, or
                muscle gain. Enjoy a variety of delicious recipes, automated
                grocery lists, and progress tracking. Take the first step
                towards a healthier you start your journey with HealthFull
                today!
              </h1>
            </div>
          </div>
        </motion.nav>
      </>
    );
}

export default Plan;
