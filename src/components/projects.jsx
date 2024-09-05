import React from "react";
import ProjectItem from "./projectitems";
import figma from "../assets/figma.png";
import comment from "../assets/comment.png";
import picc from "../assets/picc.png";
import dscucu from "../assets/dscucu.png";
import naomishot from "../assets/naomishot.png";
import tmsshot from "../assets/tmsshot.png";
import foods from "../assets/foods.png";

const projects = [
  {
    image: picc,
    title: 'Customer Support',
    tech: 'React js, Django'
  },
  {
    image: dscucu,
    title: 'DSC Community',
    tech: 'React js'
  },
  {
    image: naomishot,
    title: 'Customer Support',
    tech: 'React js'
  },
  {
    image: tmsshot,
    title: 'Traffic Monitoring System',
    tech: 'Html,Boostrap, PHP'
  },
  {
    image: foods,
    title: 'OnlineFoodDeliverySystem',
    tech: 'React , SQL'
  },

  
]

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        I have successfully worked on a variety of projects, each contributing
        to my skills in development, application integration, and
        problem-solving.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {projects.map(project => (
        <ProjectItem img={project.image} title={project.title} tech={project.tech}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
