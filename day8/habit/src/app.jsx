import React from "react";
import Navbar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Projects from "./Components/project";
import Contact from "./Components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;