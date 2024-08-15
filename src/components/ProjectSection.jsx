"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsTag from "./ProjectsTag";
import { motion, useInView } from "framer-motion";
const projectData = [
  {
    id: "1",
    title: "Ecommerce",
    description: "Typescript - Express",
    image: "/images/projects/Project_8.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/ecommerce_typescript",
    previewUrl:
      "https://ecommerce-frontend-deploy-production.up.railway.app/admin-login",
    private: false,
  },
  {
    id: "2",
    title: "Scalboost Test",
    description: "NestJs - NextJs",
    image: "/images/projects/Project_9.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/scalboost-PedroMolina/",
    previewUrl: "https://frontend-deploy-scalboost-production.up.railway.app/",
    private: false,
  },
  {
    id: "3",
    title: "Intranet Devdatep",
    description: "React",
    image: "/images/projects/Project_10.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/django_react_store",
    previewUrl: "/images/projects/Project_10.png",
    private: true,
  },
  {
    id: "4",
    title: "SIOM Devdatep",
    description: "React",
    image: "/images/projects/Project_11.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/django_react_store",
    previewUrl: "/images/projects/Project_11.png",
    private: true,
  },
  // {
  //   id: "5",
  //   title: "Intranet Devdatep",
  //   description: "DjangoRest - ReactRedux - Tailwind",
  //   image: "/images/projects/Project_10.png",
  //   tag: ["Projects"],
  //   gitUrl: "https://github.com/PedroMolina17/django_react_store",
  //   previewUrl: "/images/projects/Project_11.png",
  //   private: true,
  // },
  {
    id: "6",
    title: "Ecommerce",
    description: "DjangoRest - ReactRedux - Tailwind",
    image: "/images/projects/Project_5.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/django_react_store",
    previewUrl: "/images/projects/Project_5.png",
    private: false,
  },
  {
    id: "7",
    title: "Copy of Tinder",
    description: "React - Tailwind",
    image: "/images/projects/Project_6.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/pet",
    previewUrl: "https://pet-two-wheat.vercel.app/",
    private: false,
  },
  {
    id: "8",
    title: "Tic Tac",
    description: "React- Tailwind",
    image: "/images/projects/Project_7.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/tictac",
    previewUrl: "https://tictac-rouge-ten.vercel.app/",
    private: false,
  },

  {
    id: "9",
    title: "Portfolio Web",
    description: "React + Tailwind",
    image: "/images/projects/Project_2.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/portafolioweb",
    previewUrl: "/images/projects/Project_2.png",
    private: false,
  },

  {
    id: "10",
    title: "Catalog",
    description: "React + Tailwind",
    image: "/images/projects/Project_4.png",
    tag: ["Projects"],
    gitUrl: "https://github.com/PedroMolina17/gruponoa",
    previewUrl: "https://gruponoa.vercel.app/",
    private: false,
  },

  {
    id: "11",
    title: "Cognitive Class",
    description: "SQL and Relational Database",
    image: "/images/certificates/Certificate_1c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_1c.png",
  },
  {
    id: "12",
    title: "Microsoft",
    description: "Fundamentos de desarrollo",
    image: "/images/certificates/Certificate_2c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_2c.png",
  },
  {
    id: "13",
    title: "AWS",
    description: "Getting started on Data Analitycs",
    image: "/images/certificates/Certificate_3c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_3c.png",
  },
  {
    id: "14",
    title: "Oracle",
    description: "Oracle Cloud Data Management",
    image: "/images/certificates/Certificate_12c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_12c.png",
  },
  {
    id: "15",
    title: "Fundación Telefonica",
    description: "HTML5 + CSS",
    image: "/images/certificates/Certificate_4c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_4c.png",
  },
  {
    id: "16",
    title: "Fundación Telefonica",
    description: "Programacion con JavaScript",
    image: "/images/certificates/Certificate_5c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_5c.png",
  },
  {
    id: "17",
    title: "Fundación Telefonica",
    description: "Wordpress",
    image: "/images/certificates/Certificate_6c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_6c.png",
  },
  {
    id: "18",
    title: "Mimo",
    description: "Web Development",
    image: "/images/certificates/Certificate_7c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_7c.png",
  },
  {
    id: "19",
    title: "Mimo",
    description: "PYTHON",
    image: "/images/certificates/Certificate_8c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_8c.png",
  },
  {
    id: "20",
    title: "Mimo",
    description: "SQL",
    image: "/images/certificates/Certificate_9c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_9c.png",
  },
  {
    id: "21",
    title: "Mimo",
    description: "HTML",
    image: "/images/certificates/Certificate_10c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_10c.png",
  },
  {
    id: "22",
    title: "Mimo",
    description: "JavaScript",
    image: "/images/certificates/Certificate_11c.png",
    tag: ["Certificates"],
    gitUrl: "/",
    previewUrl: "/images/certificates/Certificate_11c.png",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 ">
        Project Section
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectsTag
          onClick={handleTabChange}
          name="Projects"
          isSelected={tag === "Projects"}
        />
        <ProjectsTag
          onClick={handleTabChange}
          name="Certificates"
          isSelected={tag === "Certificates"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 flex-wrap">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              isCertificate={project.tag.includes("Certificates")}
              isPrivate={project.private}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
