import React from 'react';
import { render } from 'react-dom';
import SectionHeading from '../components/SectionHeading';
const data = [
  { pic:'./public/images/child.png', title: 'Child Info'},
  { pic:'./public/images/f2.png', title: 'Transportation'},
  { pic:'./public/images/f3.png', title: 'Fee'},
  { pic:'./public/images/f4.png', title: 'Examination'},
  { pic:'./public/images/f5.png', title: 'Library'},
  { pic:'./public/images/f6.png', title: 'Assesment'},
  { pic:'./public/images/f7.png', title: 'Timetable'},
  { pic:'./public/images/f8.png', title: 'HR'},
  { pic:'./public/images/f9.png', title: 'Class Teacher'},
  { pic:'./public/images/f10.png', title: 'Hostel'},
  { pic:'./public/images/f11.png', title: 'Syllabus'},
  { pic:'./public/images/f12.png', title: 'Security'},
];
const Card = ({pic, title}) => (
  <section className="features-home-card column large-4 medium-expanded small-6">
    <article className="features-home-card__wrapper">
      <figure>
        <img src={pic} className="features-home-card__image" />
      </figure>
      <span className="text-center features-home-card__content">{title}</span>
      <section className="features-home-card__overlay">
        <a href="/features" className="features-home-card__button">Read More</a>
      </section>
    </article>
  </section>
);
const FeaturesSection = () => {
  return(
    <section>
      <header>
        <SectionHeading
          text1="Insti"
          text2="app "
          text3="Features"
        />
      </header>
      <article className="row align-spaced section__content">
        {data.map((item, index) =>
         <Card key={index} {...item} />
        )}
      </article>
    </section>
  );
};
export default FeaturesSection;
