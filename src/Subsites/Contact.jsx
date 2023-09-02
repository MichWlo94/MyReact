/* eslint-disable no-unused-vars */
import React from 'react';

function Contact(props) {
  return (
    <div onClick={props.closeDropdown} className='w-screen h-screen'>
      <h1>Contact Us</h1>
      <p>This is the Contact page content.</p>
    </div>
  );
}

export default Contact;