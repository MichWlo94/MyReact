import React from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <>
  <div className="fixed flex flex-col items-center justify-end w-20 h-[100vh] md:h-[85vh] p-6 z-50 scale-75 lg:scale-90">
      <a className='pb-4' href='https://www.linkedin.com/in/micha%C5%82-w%C5%82odarczyk-4aa33a1a2/' target="_blank" rel="noreferrer">
    <div >
        <BsLinkedin className='flex items-center justify-center duration-200 ease-in-out transform bg-white border-2 border-black rounded-full w-14 h-14 hover:scale-125 trasition' />
    </div>
      </a>
      <a className='pb-4' href='https://github.com/MichWlo94/MyReact' target="_blank" rel="noreferrer">
    <div>
      <FaGithub className='flex items-center justify-center duration-200 ease-in-out transform bg-white border-2 border-black rounded-full w-14 h-14 hover:scale-125 trasition' />
    </div>
      </a>
      <a className='pb-4' href='https://www.facebook.com/profile.php?id=100001513311376' target="_blank" rel="noreferrer">
    <div>
      <FaFacebookF className='flex items-center justify-center duration-200 ease-in-out transform bg-white border-2 border-black rounded-full w-14 h-14 hover:scale-125 trasition' />
    </div>
    </a>
      <a className='pb-4' href='https://www.instagram.com/michal_wlodarczyk_/?next=%2F' target="_blank" rel="noreferrer">
    <div>
      <BsInstagram className='flex items-center justify-center duration-200 ease-in-out transform bg-white border-2 border-black rounded-full w-14 h-14 hover:scale-125 trasition' />
    </div>
      </a>
  </div>
  <div className='fixed bottom-0 right-0 hidden p-4 lg:block'>@2023 MWlodarczyk <br/>All rights reserved.</div>
  </>
);

export default SocialMedia;
