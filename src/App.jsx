import React from "react";
import SideNav from "./components/bar";
import HomePage from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Doc from "./components/resume";

function App() {
  return (
    <div>
      <SideNav />
      <HomePage />
      <Projects />
      <Contact />
      <Doc />
    </div>
  );
}

export default App;
