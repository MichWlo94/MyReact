/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function LandingPage(props) {

    const [catImages, setCatImages] = useState([]);
  
    useEffect(() => {
      const fetchCatImages = async () => {
        try {
          const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5');
          // Adjust the limit to fetch more or fewer cat images
          const data = response.data;
          setCatImages(data);
        } catch (error) {
          console.error('Error fetching cat images:', error);
        }
      };
  
      fetchCatImages();
    }, []);

  return (
    <>
    <div onClick={props.closeDropdown} className='w-screen h-screen'>
      <h1 className=''>Welcome to the Landing Page</h1>
      <p>This is the landing page content.</p>
      <h2>Funny Cat Images</h2>
      <div className="grid w-1/2 grid-cols-5 gap-4">
        {catImages.map((cat) => (
          <img key={cat.id} src={cat.url} alt="Funny Cat" className='w-48 h-48'/>
        ))}
      </div>

    </div>

    </>
  );
};

export default LandingPage;