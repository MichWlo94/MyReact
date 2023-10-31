/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Nav from '../Portfolio/Nav';
import SocialMedia from '../Portfolio/SocialMedia';

function LandingPage(props) {

  return (
    <div onClick={props.closeDropdown} className='w-screen h-[100vh]'>
      <Nav />
      <SocialMedia />
    </div>
  );
}


export default LandingPage;