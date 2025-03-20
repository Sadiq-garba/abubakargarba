import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import * as AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { JSX } from "react";

const App = (): JSX.Element => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1.5s)
      easing: "ease-in-out", // Smooth transition
      once: true, // animation duration in milliseconds
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/projects"} element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
