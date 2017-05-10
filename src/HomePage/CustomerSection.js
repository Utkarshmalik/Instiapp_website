import React from 'react';
import lodash from 'lodash';
import {render} from 'react-dom';
const data = [
  { pic:'./public/images/c1.jpg', heading: 'Insti App have a very user friendly interface.'},
  { pic:'./public/images/r7.jpg', heading: 'Attendance is displayed in simple manner.'},
  { pic:'./public/images/r1.jpg', heading: 'Syllabus feature is very nice and helpful.'},
  { pic:'./public/images/r4.jpg', heading: 'Homework is helpful to all students.'},
  { pic:'./public/images/r5.jpg', heading: 'Highly benificial app to students and teachers.'},
  { pic:'./public/images/r9.jpg', heading: 'It feels great to have Insti App in our school.'},
];
const Card = (props) => (
  <div className="customer-border-section">
    <img src={props.pic} className="customer-card-image"/>
    <span dangerouslySetInnerHTML={{__html: props.heading}} className="customer-card-text"></span>
  </div>
)
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="row-section">
      <Card {...data[0]} />
      <Card {...data[1]} />
      <Card {...data[2]} />
    </div>
  </div>
)
const CustomerSection = () => {
  const rowData = _.chunk(data, 3);
  return(
    <section>
      <div className="customer-background">
        <h1 className="customer-heading">Customer <span className="notice-color">Speak</span></h1>
        <div className="section-content">
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </div>
      </div>
    </section>
  );
};
export default CustomerSection;
