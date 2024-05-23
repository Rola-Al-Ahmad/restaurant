import React, { useEffect } from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/image';
import { BsArrowRight } from 'react-icons/bs';
import './Home.css';

const Home = () => {

  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', scrollToTop);
    
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app__home app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__home-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type="button" className="custom__button home">Explore Menu <BsArrowRight /></button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="home_img" />
      </div>
      <div id="back-to-top" onClick={scrollToTop}>
        <div class="top" id="top" >
          <span>TOP</span>
        </div>
      </div>
    </div>
  )
}

export default Home;
