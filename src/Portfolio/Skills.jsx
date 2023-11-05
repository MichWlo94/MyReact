/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import images from './images';
import AppWrap from './AppWrap';
import MotionWrap from './MotionWrap';

const Skills = () => {
  
  const experiences = [

    {
      year: "09.2022-10.2023",
      works: [
        {
          name: "Junior Frontend Developer",
          company: "Lemai Przemysław Pełka",
          desc: "Task based development of websites and web applications using React, Tailwind CSS, CSS, and Git. My role entailed coding and maintaining web application interfaces, collaborating with a team to ensure responsive and visually appealing designs.",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          name: "Freelancer",
          company: "None",
          desc: "Creating websites and Apps using React.js. Sharpening JavaScript, CSS and HTML skills.",
        },
      ],
    },
  ];
  
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
    <>

    {/* Desktop version */}
    <div className='hidden h-auto mx-auto mt-10 scale-75 lg:block -z-10'>
      <motion.h2 className="mb-10 text-6xl font-bold text-center py-14"
      whileInView={{scale: [0, 1]}}
      transition={{duration: 1}}
      >Skills & <span className='text-blue-800'>Experiences</span></motion.h2>


      <div className="flex flex-row justify-between app__skills-container">
        <motion.div className="flex flex-wrap items-center justify-center app__skills-list min-w-[400px]">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div className="self-center mx-5 rounded-full h-36 w-36 app__flex hover:shadow-neon-glow-green hover:shadow-slate-300" style={{ backgroundColor: skill.bgColor }}>
                <img className='p-3' src={skill.icon} alt={skill.name} />
              </div>
              <p className="pt-2 text-xl font-bold text-center p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>


        <div className="font-bold text-center app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div className="flex app__skills-exp-item" key={index}>
              <div className="text-blue-900 pr-14 app__skills-exp-year min-w-[300px]">
                <p className="text-4xl bold-text max-w-[200px]">{experience.year}</p>
              </div>
              <motion.div className=" app__skills-exp-works">
                {experience.works.map((work, workIndex) => (
                  <React.Fragment key={workIndex}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                    >
                      <h4 className="pb-2 text-4xl bold-text">{work.name}</h4>
                      <p className="py-2 text-3xl text-blue-900 p-text">{work.company}</p>
                    </motion.div>
                    <motion.div
                      className="font-semibold w-[800px] p-8 m-2 mb-8 text-2xl shadow-xl skills-tooltip bg-slate-200 rounded-2xl border-slate-300"
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

{/* Mobile View */}
<div className='w-[550px] h-auto mx-auto mt-10  lg:hidden -z-10'>
<motion.h2 className="mb-10 text-5xl font-bold text-center py-14"
whileInView={{scale: [0, 1]}}
transition={{duration: 1}}
>Skills & <span className='text-blue-800'>Experiences</span></motion.h2>


<div className="flex flex-col justify-between">
  <motion.div className="flex flex-wrap items-start justify-start min-w-[500px] max-w-[520px]">
    {skills.map((skill, index) => (
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        key={index}
      >
        <div className="self-center w-20 h-20 mx-2 rounded-full hover:shadow-neon-glow-green hover:shadow-slate-300" style={{ backgroundColor: skill.bgColor }}>
          <img className='p-3' src={skill.icon} alt={skill.name} />
        </div>
        <p className="py-4 text-xl font-bold text-center">{skill.name}</p>
      </motion.div>
    ))}
  </motion.div>


  <div className="mt-20 font-bold text-center">
    {experiences.map((experience, index) => (
      <motion.div className="flex " key={index}>
        <div className="text-blue-900 pr-14 min-w-[100px]">
          <p className="text-2xl bold-text max-w-[100px]">{experience.year}</p>
        </div>
        <motion.div className=" app__skills-exp-works">
          {experience.works.map((work, workIndex) => (
            <React.Fragment key={workIndex}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
              >
                <h4 className="pb-2 text-2xl bold-text">{work.name}</h4>
                <p className="py-2 text-xl text-blue-900 p-text">{work.company}</p>
              </motion.div>
              <motion.div
                className="font-semibold min-w-[470px] p-8 m-2 mb-8 text-xl shadow-xl skills-tooltip bg-slate-200 rounded-2xl border-slate-300"
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
</>              
  );
};

export default AppWrap(MotionWrap(Skills), 'Skills');