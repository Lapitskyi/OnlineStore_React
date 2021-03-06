import React from 'react';
import './scss/About.scss';
import Poster from '../../components/Poster/Poster';
import Social from '../../components/Social/Social';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <Poster />
          <div className="about__text">
            <p>
              <span> Lorem Ipsum</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default About;
