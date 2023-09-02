/* eslint-disable no-unused-vars */
import React from 'react';

function LandingPage(props) {
  return (
    <div onClick={props.closeDropdown} className='w-screen h-screen'>
      <h1 className=''>Welcome to the Landing Page</h1>
      <p>This is the landing page content.</p>
    </div>
  );
}

export default LandingPage;