import React, { useState } from 'react';
import images from './images';
import AppWrap from './AppWrap';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full py-2 border-b-2 border-black bg-gradient-to-r from-slate-50 to-slate-300">
      <div className="app__navbar-logo">
        <img src={images.logo3} alt="logo" className="w-1/2" />
      </div>
      <ul className="flex gap-6 pr-24 text-2xl font-bold text-black md:text-3xl">
        {['Home', 'About', 'Skills'].map((item) => (
          <li className='hover:underline' key={item}>
            <a href={`#${item}`} onClick={() => setToggle(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppWrap(Nav, 'Home');
