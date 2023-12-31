import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './Contact';
import ITLandingPage from './ITLandingPage';
import Project1 from './Project1';
import {motion} from 'framer-motion'
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Shop from './Shop';

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);
  
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    setIsCrossIcon(!isCrossIcon);
  };

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const closeDropdown = () => {
    setDropdownIsOpen(false);
  };

  return (
    <BrowserRouter> 
    
    {/* Mobile Navbar */}

    <nav className="fixed right-0 z-50 p-3 font-serif md:hidden">
        <div className="flex flex-wrap items-center justify-end max-w-screen-xl mx-auto">
          <motion.button
            whileInView={{scale: [0, 1]}} transition={{duration: 1, type:'spring', stiffness: 300, ease: 'easeInOut', mass: 1}}
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 border-2 border-gray-700 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={toggleMenu}
          >
              {isCrossIcon ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
        <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M1 1l14 14M1 15L15 1"/>
      </svg>
      ) : (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>)}
          </motion.button>
        <motion.div whileInView={{x: [150, 0]}} transition={{duration: 0.5, ease: 'easeInOut'}}>
            {menuIsOpen && 
            <ul className='flex flex-col flex-wrap pl-3 pr-3 ml-4 bg-gray-700 border-2 border-red-800 rounded-md'>
              <li>
                <Link to="/" className="font-bold text-teal-400 hover:underline">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:underline">Contact</Link>
              </li>
              {/* <li>
                <Link to="/ITLandingPage" className="text-white hover:underline">IT Landing Page</Link>
              </li> */}
              
              <li>
                <Link to="/shop" className="text-white hover:underline">Shop</Link>
              </li>
              
            <div className="relative mb-2">
                <button
                className="flex items-center text-teal-400 cursor-pointer hover:underline focus:outline-none focus:shadow-outline"
                onClick={toggleDropdown}
                >
                Udemy Projects
                    <svg className="w-2.5 h-2.5 ml-2.5 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                </button>
                {dropdownIsOpen && (
                <div className="absolute p-1 mt-3 ml-5 text-sm bg-gray-300 border border-green-300 shadow rounded-2">
                  
                  <Link to="/project1" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Expense App</Link>
                  
                  <Link to="/project2" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Task App</Link>

                  <Link to="/project3" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Investment App</Link>
                  
                  <Link to="/project4" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Modals + Form</Link>
                </div>)}
            </div>
            </ul>}
        </motion.div>
      </div>
    </nav>


    {/* Desktop Navbar */}    
    
    <nav className="z-20 hidden p-3 font-serif bg-gray-700 border-b-2 border-red-800 md:block md:w-screen md:pr-10">
      <div className="flex flex-wrap items-center justify-end mx-auto">
        <div className='w-full md:block md:w-auto'>
          <ul className="flex space-x-5 text-white">
            <li>
              <Link to="/" className="font-bold text-teal-400 hover:underline">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
            {/* <li>
              <Link to="/ITLandingPage" className="hover:underline">IT Landing Page</Link>
            </li> */}
            
            <li>
                <Link to="/shop" className="text-white hover:underline">Shop</Link>
              </li>
            <div className="relative">
            <button
              className="flex items-center text-teal-400 cursor-pointer hover:underline focus:outline-none focus:shadow-outline"
              onClick={toggleDropdown}
              >
              Udemy Projects
                  <svg className="w-2.5 h-2.5 ml-2.5 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
              </button>
              {dropdownIsOpen && (
              <div className="absolute p-2 mt-2 ml-2 text-sm bg-gray-300 border border-green-300 rounded shadow">
                
                <Link to="/project1" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Expense App</Link>
                  
                  <Link to="/project2" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Task App</Link>

                  <Link to="/project3" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Investment App</Link>
              
                  <Link to="/project4" onClick={toggleDropdown} className="block px-3 py-1 text-gray-800 hover:bg-gray-100">Modals + Form</Link>
              </div>)}
            </div>
          </ul>
        </div>
      </div>
    </nav>

    <Routes>
        <Route path="/" element={<LandingPage closeDropdown={closeDropdown}/>} />
        <Route path="/ITLandingPage" element={<ITLandingPage closeDropdown={closeDropdown}/>} />
        <Route path="/contact" element={<Contact closeDropdown={closeDropdown}/>} />
        <Route path="/shop" element={<Shop closeDropdown={closeDropdown}/>} />
        <Route path="/project1" element={<Project1 closeDropdown={closeDropdown}/>} />
        <Route path="/project2" element={<Project2 closeDropdown={closeDropdown}/>} />
        <Route path="/project3" element={<Project3 closeDropdown={closeDropdown}/>} />
        <Route path="/project4" element={<Project4 closeDropdown={closeDropdown}/>} />

        </Routes>
    </BrowserRouter>
  )}

  