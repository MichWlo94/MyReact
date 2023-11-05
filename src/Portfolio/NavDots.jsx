
import React from 'react';

const NavigationDots = (active) => (
  <div className="fixed flex flex-col items-center transform -translate-y-1/2 right-[10px] lg:right-[50px] app__navigation top-1/2">
    {['Home', 'About', 'Skills'].map((item) => (
      <a
        href={`#${item}`}
        key={item}
        className="relative z-50 w-8 h-6 p-4 m-4 transition duration-200 ease-in-out border rounded-full shadow-md bg-gradient-to-br from-slate-50 to-slate-400 shadow-slate-300 border-slate-400 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-900"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
