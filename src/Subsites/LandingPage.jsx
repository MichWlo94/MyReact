/* eslint-disable no-unused-vars */
import Nav from '../Portfolio/Nav';
import SocialMedia from '../Portfolio/SocialMedia';
import Header from '../Portfolio/Header';
import Skills from '../Portfolio/Skills';
import About from '../Portfolio/About';

function LandingPage(props) {

  return (
    <div onClick={props.closeDropdown} className='w-screen h-[100vh] font-serif'>
      <Nav />
      <SocialMedia />
      <Header />
      <About />
      <Skills />
    </div>
  );
}


export default LandingPage;