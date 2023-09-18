import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Plan from "./components/Plan";
import Calories from "./components/Calories";
import About from "./components/About";

function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen w-full bg-gradient-to-tr from-green-200 to-white flex flex-col justify-between">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" Component={Home} />
              {/* <Route path="/register" Component={Register} /> */}
              {/* <Route path="/login" Component={Login} /> */}
              <Route path="/calories" Component={Calories} />
              <Route path="/plan/:calory" Component={Plan} />
              <Route path="/about" Component={About} />

            </Routes>
          </Router>
        
        <footer className="w-full mt-10 bg-green-500 h-20 flex justify-center items-center">
          <p className="text-white text-xl">Developed by Ayush Juyal, Sanyam Sharma, Sani Vikrant 💻</p>
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
