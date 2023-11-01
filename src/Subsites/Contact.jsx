import React from 'react';
import images from '../Portfolio/images';

function Contact(props) {
  return (
    <div onClick={props.closeDropdown} className='flex items-center justify-center w-screen h-screen bg-gradient-to-b from-blue-100 to-blue-300'>
      <div className="p-12 text-center text-black border border-black shadow-lg shadow-slate-400 bg-gradient-to-b from-green-100 to-green-300 lg:p-24 rounded-2xl">
        <h2 className="mb-12 text-6xl font-bold">Feel free to <span className="text-pink-600">contact</span> me anytime!</h2>
        <div className="flex flex-col items-center justify-center gap-8 text-2xl lg:text-4xl lg:flex-row min-w-fit">
          <div className="flex flex-row gap-6 p-6 transition duration-300 ease-in-out transform bg-pink-500 border border-black rounded-lg cursor-pointer hover:bg-pink-600 hover:scale-105 min-w-fit">
            <img src={images.email} alt="email" className="w-24 h-24" />
            <a href="mailto:mwlodarczyk94@outlook.com" className="flex items-center justify-center font-semibold">mwlodarczyk94@outlook.com</a>
          </div>
          <div className="flex flex-row gap-2 p-6 transition duration-300 ease-in-out transform bg-pink-500 border border-black rounded-lg cursor-pointer hover:bg-pink-600 hover:scale-105 min-w-fit w-[500px]">
            <img src={images.mobile} alt="phone" className="w-24 h-24" />
            <a href="tel:+48 783-149-289" className="flex items-center justify-center font-semibold">+48 783-149-289</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;