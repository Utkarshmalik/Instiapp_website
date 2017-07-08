import React from 'react';
import { render } from 'react-dom';
import { chunk } from 'lodash';
import SectionHeading from '../components/SectionHeading';
const data = [
  { pic:'./public/images/f1.png', heading: 'Child Info', text: 'Child text'},
  { pic:'./public/images/f2.png', heading: 'Transportation', text: 'Transport text'},
  { pic:'./public/images/f3.png', heading: 'Fee', text: 'Fee text'},
  { pic:'./public/images/f4.png', heading: 'Examination', text: 'Exam text'},
  { pic:'./public/images/f5.png', heading: 'Library', text: 'library text'},
  { pic:'./public/images/f6.png', heading: 'Assesment', text: 'Assesment text'},
  { pic:'./public/images/f7.png', heading: 'Timetable', text: 'Timetable text'},
  { pic:'./public/images/f8.png', heading: 'HR', text: 'HR text'},
  { pic:'./public/images/f9.png', heading: 'Class Teacher', text: 'Class teacher text'},
  { pic:'./public/images/f10.png', heading: 'Hostel', text: 'Hostel text'},
  { pic:'./public/images/f11.png', heading: 'Syllabus', text: 'Syllabus text'},
  { pic:'./public/images/f12.png', heading: 'Security', text: 'Security text'},
];
const Card = (props) => (
  <div className="features-border-section">
    <figure>
      <img src={props.pic} className="card-image"/>
    </figure>
    <span className="card-text">{props.heading}</span>
    <div className="features-overlay">
      <a href="/features" className="features-card__button">Read More</a>
    </div>
  </div>
)
const RowCard = ({data}) => (
  <div>
    <div className="features-inner">
      <Card {...data[0]} />
      <Card {...data[1]} />
    </div>
    <div className="features-inner">
      <Card {...data[2]} />
      <Card {...data[3]} />
    </div>
  </div>
)
const FeaturesSection = () => {
  const rowData = chunk(data, 4);
  return(
    <section>
      <header>
        <SectionHeading
          text1="Insti"
          text2="app "
          text3="Features"
        />
      </header>
      <article className="row align-spaced">
        {rowData.map((item, index) =>
          <RowCard key={index} data={item} />
        )}
      </article>
    </section>
  );
};
export default FeaturesSection;
