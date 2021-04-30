import React from 'react';
import './scss/About.scss';
import Poster from '../../components/Poster';
import Social from '../../layout/components/Social';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <Poster />
          <div className="about__text">
            <p>
              <span> Всем привет!</span>
              На нашем канале вы увидете как с пользой проводить свободное время на природе,
              как быстро и
              просто готовить на костре, рыбалка с ночёвкой и нашим верным другом, собакой Грейси. Вы увидете много
              всего интересного и позновательного. Интересные видео на природе,рыбалка, ловля раков и многое другое.
              Подписывайтесь, пишите комментарии, всем рады ответить!!!
            </p>
          </div>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default About;
