import React from 'react';
import {render} from 'react-dom';
import CustomerComponent from '../components/CustomerComponent';
import SectionHeading from '../components/SectionHeading';
const data = [
  { pic:'./public/images/c1.jpg', title: 'Sudhir Joshi', role: '(Principal)', heading: 'Insti App has a very user friendly interface and it is very easy to use.'},
  { pic:'./public/images/r9.jpg', title: 'Suman Mohan', role: '(Teacher)', heading: 'Monitoring children attendance record has become very easy.'},
  { pic:'./public/images/r1.jpg', title: 'Ram Sharma', role: '(Parent)', heading: 'Academic performance of a child is displayed via a performance graph.'},
];
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="row-section">
      <CustomerComponent {...data[0]} />
    </div>
  </div>
)

const CustomerReviewSection = () => {
  const rowData = _.chunk(data, 1);
  return(
    <section className="section section_customer-review">
      <SectionHeading
        text1="Customer"
        text2=" Speak "
        text3=""
      />
      <article className="row align-spaced">
        {rowData.map((item, index) =>
         <RowCard key={index} data={item} />
        )}
      </article>
    </section>
  );
};
export default CustomerReviewSection;
