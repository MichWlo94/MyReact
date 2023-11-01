/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import images from './images';

const Skills = () => {
  
  const experiences = [
        {
      year: "2023",
      works: [
        {
          name: "Portfolio - Front End",
          company: "",
          desc: "Creating a modern online Portfolio in React.js",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "Internship",
          company: "Lemai Przemysław Pełka",
          desc: "Sharpening JavaScript, CSS and HTML skills",
        },
      ],
    },
  ];
  //add
  const skills = [
    {
      name: "React",
      icon: images.react2,
      bgColor: 'white',
    },
    {
      name: "Java Script",
      icon: images.javascript,
      bgColor: "#a2ebae",
    },
    {
      name: "Git",
      icon: images.git,
      bgColor: "#a2abeb",
    },
    {
      name: "CSS 3",
      icon: images.css,
      bgColor: "#e8aff0",
    },
    {
      name: "HTML 5",
      icon: images.html,
      bgColor: "#f2ed8f",
    },
  ];

  return (
    <div className='h-[100vh] w-4/5 mx-auto mt-10 -z-10'>
      <motion.h2 className="text-6xl font-bold text-center py-14 head-textx"
      whileInView={{scale: [0, 1]}}
      transition={{duration: 1}}
      >Skills & <span className='text-blue-800'>Experiences</span></motion.h2>

      <div className="flex flex-row justify-between app__skills-container">
        <motion.div className="flex flex-wrap items-start justify-start app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div className="mx-5 rounded-full h-36 w-36 app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img className='p-3' src={skill.icon} alt={skill.name} />
              </div>
              <p className="pt-2 text-xl font-bold text-center p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, workIndex) => (
                  <React.Fragment key={workIndex}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <motion.div
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </motion.div>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills