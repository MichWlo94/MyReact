/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { motion } from "framer-motion";
import images from "./images";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <>
  {/* //Desktop header */}
  <div className="flex-row items-center justify-center hidden w-4/5 h-auto mx-auto mt-10 lg:flex -z-10 ">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-10 text-lg font-bold md:text-4xl">
        <div className="flex flex-row items-center p-4 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-200 rounded-2xl shadow-slate-200 shadow-neon-glow-blue">
          <span className="text-2xl md:text-5xl">👋</span>
          <div className="pr-10 ml-4 min-w-fit">
            <p className="mb-2">Hello, I am</p>
            <h1 className="text-2xl font-bold text-red-500 md:text-4xl">
              Michał
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4 text-lg md:text-3xl mt-14 bg-gradient-to-r from-slate-200 via-slate-50 to-slate-100 rounded-2xl shadow-slate-200 shadow-neon-glow-blue">
          <p className="text-3xl text-center">React Developer,</p>
          <p className="text-3xl text-center ">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
      className=""
    >
      <img
        src={images.profile}
        alt="profile_bg"
        className="rounded-[400px] border-2 border-black min-w-[350px] min-h-[530px] shadow-slate-200 shadow-neon-glow-blue"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {/* {['javascript', 'react', 'git'].map((circle, index) => (
          <div
            className="flex items-center justify-center m-4 border-4 border-white rounded-full shadow-lg w-44 h-44"
            key={`circle-${index}`}
          >
            <img src={images[circle]} alt="profile_bg" className="w-3/4 h-3/4" />
          </div>
        ))} */}
        
      <div className="flex items-center justify-center w-64 h-64 m-6 border-4 border-white rounded-full shadow-lg md:scale-100">
        <img src={images.javascript} alt="profile_bg" className="w-3/4 h-3/4" />
      </div>
      <div className="flex items-center justify-center m-6 ml-[100px] border-4 border-white rounded-full shadow-lg w-80 h-80 md:scale-100">
        <img src={images.react} alt="profile_bg" className="w-3/4 h-3/4" />
      </div>
      <div className="flex items-center justify-center w-48 h-48 m-6 border-4 border-white rounded-full shadow-lg md:scale-100">
        <img src={images.git} alt="profile_bg" className="w-3/4 h-3/4" />
      </div>
    </motion.div>
  </div>

{/* //Mobile header */}
<div className="flex flex-col items-center justify-center w-4/5 h-auto mx-auto mt-10 lg:hidden -z-10 ">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row items-center justify-center p-4 text-2xl font-bold ">
        <div className="flex flex-row items-center p-2 mr-14 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-200 rounded-2xl shadow-slate-200 shadow-neon-glow-blue">
          <span className="text-3xl">👋</span>
          <div className="pr-5 ml-4 min-w-fit">
            <p className="mb-2">Hello, I am</p>
            <h1 className="text-2xl font-bold text-center text-red-500">
              Michał
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-4 text-lg bg-gradient-to-r from-slate-200 via-slate-50 to-slate-100 rounded-2xl shadow-slate-200 shadow-neon-glow-blue">
          <p className="text-2xl ">React Developer,</p>
          <p className="text-2xl ">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1, delayChildren: 0.5 }}
      className=""
    >
      <img
        src={images.profile}
        alt="profile_bg"
        className="rounded-[400px] border-2 border-black w-[350px] h-auto mt-12 shadow-slate-200 shadow-neon-glow-blue"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="flex flex-row items-center justify-center ml-10 app__header-circles"
    >
      {/* {['javascript', 'react', 'git'].map((circle, index) => (
          <div
            className="flex items-center justify-center m-4 border-4 border-white rounded-full shadow-lg w-44 h-44"
            key={`circle-${index}`}
          >
            <img src={images[circle]} alt="profile_bg" className="w-3/4 h-3/4" />
          </div>
        ))} */}
        
      <div className="flex items-center justify-center w-32 h-32 m-6 border-4 border-white rounded-full shadow-xl ">
        <img src={images.javascript} alt="profile_bg" className="w-3/4 h-3/4" />
      </div>
      <div className="flex items-center justify-center m-6 ml-[20px] mt-[50px] border-4 border-white rounded-full shadow-xl w-44 h-44">
        <img src={images.react} alt="profile_bg" className="w-3/4 h-3/4" />
      </div>
      <div className="flex items-center justify-center m-6 border-4 border-white rounded-full shadow-xl w-36 h-36">
        <img src={images.git} alt="profile_bg" className="w-3/4 h-3/4" />
      </div>
    </motion.div>
  </div>
</>
);





export default Header;
