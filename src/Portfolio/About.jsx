import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import images from "./images";

const abouts = [
  {
    title: "Web Development",
    description:
      "Mastering the art of JavaScript and React, I am a skilled web developer ready to build dynamic and interactive websites.",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: `With a creative ideas and advanced CSS knowledge, I am a web designer who crafts visually stunning websites that leave a lasting impression.`,
    imgUrl: images.about02,
  },
];

const About = () => {
  return (
    <>
    {/* Desktop version */}
    <div className="hidden lg:block h-[100vh] w-4/5 mx-auto mt-10 -z-10">
      <motion.h2
        className="text-6xl font-bold text-center py-14"
        whileInView={{
          opacity: [0, 1],
          x: [-800, 0],
          transition: { duration: 1 },
        }}
      >
        Empowering Your <span className="text-blue-800">Vision,</span>
        <br />
        One Line of <span className="text-blue-800">Code</span>{" "}
        at the Time
      </motion.h2>

      <div className="flex flex-wrap items-start justify-center mt-8 ">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="flex flex-col items-start justify-start p-4 m-8 w-[550px] app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} className="object-cover w-full h-auto rounded-2xl"/>
            <h3 className="mt-16 text-4xl font-bold">{about.title}</h3>
            <p className="mt-8 text-2xl text-p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mobile version */}
    <div className="lg:hidden h-[100vh] w-4/5 mx-auto mt-10 -z-10">
      <motion.h2
        className="py-8 pt-6 text-4xl font-bold text-center"
        whileInView={{
          opacity: [0, 1],
          x: [-50, 0],
          transition: { duration: 1 },
        }}
      >
        Empowering Your <span className="text-blue-800">Vision,</span>
        <br />
        One Line of <span className="text-blue-800">Code</span>{" "}
        at the Time
      </motion.h2>

      <div className="flex flex-wrap items-start justify-center ">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="flex flex-col items-start justify-start p-4 m-4 w-[450px] app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} className="object-cover w-full h-[250px] rounded-2xl"/>
            <h3 className="mt-8 text-2xl font-bold">{about.title}</h3>
            <p className="mt-4 text-xl text-p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;
