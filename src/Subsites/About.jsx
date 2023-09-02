/* eslint-disable no-unused-vars */
import React from 'react';

function About(props) {
  return (
    <div onClick={props.closeDropdown} className='w-screen h-screen'>
      <h1>About Us</h1>
      <p>This is the About page content.</p>
    </div>
  );
}

export default About;