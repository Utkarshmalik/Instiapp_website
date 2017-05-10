import React from 'react';
import lodash from 'lodash';
import {render} from 'react-dom';
const data = [
  { pic:'./public/images/f1.png', heading: 'Child Info'},
  { pic:'./public/images/f2.png', heading: 'Transportation'},
  { pic:'./public/images/f3.png', heading: 'Fee'},
  { pic:'./public/images/f4.png', heading: 'Examination'},
  { pic:'./public/images/f5.png', heading: 'Library'},
  { pic:'./public/images/f6.png', heading: 'Assesment'},
  { pic:'./public/images/f7.png', heading: 'Timetable'},
  { pic:'./public/images/f8.png', heading: 'HR'},
  { pic:'./public/images/f9.png', heading: 'Class Teacher'},
  { pic:'./public/images/f10.png', heading: 'Hostel'},
  { pic:'./public/images/f11.png', heading: 'Syllabus'},
  { pic:'./public/images/f12.png', heading: 'Security'},
];
const Card = (props) => (
  <div className="features-border-section">
    <img src={props.pic} className="card-image"/>
    <span className="card-text">{props.heading}</span>
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
  const rowData = _.chunk(data, 4);
  return(
    <section>
      <div>
        <h1 className="features-heading">Insti<span className="notice-color">app</span> Features</h1>
        <div className="features-section">
          {rowData.map((item, index) =>
            <RowCard key={index} data={item} />
          )}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
