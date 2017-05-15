import React from 'react';
import lodash from 'lodash';
import {render} from 'react-dom';
const data = [
  { pic:'./public/images/c1.jpg', heading: 'Insti App have a very user friendly interface.', name: '- Sudhir Joshi', role: '(Principal)'},
  { pic:'./public/images/r7.jpg', heading: 'Insti App have a very user friendly interface.', name: '- Ankita Mohan', role: '(Teacher)'},
  { pic:'./public/images/r1.jpg', heading: 'Insti App have a very user friendly interface.', name: '- Deepak Kumar', role: '(Parent)'},
  { pic:'./public/images/r4.jpg', heading: 'Insti App have a very user friendly interface.', name: '- Rohan Tyagi', role: '(Student)'},
  { pic:'./public/images/r5.jpg', heading: 'Insti App have a very user friendly interface.', name: '- Akash Gupta', role: '(Principal)'},
  { pic:'./public/images/r9.jpg', heading: 'Insti App have a very user friendly interface.', name: '- Akansha Sharma', role: '(Teacher)'},
];
const Card = (props) => (
  <div className="customer-border">
    <img src={props.pic} className="customer-image"/>
    <div>
      <span dangerouslySetInnerHTML={{__html: props.heading}} className="customer-card-text"></span>
      <span className="customer-text">{props.name}</span>
      <span className="customer-text">{props.role}</span>
    </div>
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
