import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/SectionHeading';
import ReviewComponent from '../components/ReviewComponent';
const reviewData = [
  { pic:'./public/images/c1.jpg', title: 'Sudhir Joshi', role: 'Principal', text: 'Insti App has a very user friendly interface and it is very easy to use.'},
  { pic:'./public/images/r9.jpg', title: 'Sunita Mohan', role: 'Teacher', text: 'Insti App provides easy access to child records.'},
  { pic:'./public/images/r1.jpg', title: 'Ram Sharma', role: 'Parent', text: 'Daily homework and classwork monitoring is quiet easy.'},
];
const CustomerReviewSection = () => {
  return(
    <section className="section section_customer-review">
      <SectionHeading
        text1="Customer"
        text2=" Speak "
        text3=""
      />
      <article className="row align-spaced section__content">
        {reviewData.map((item, index) =>
         <ReviewComponent key={index} {...item} />
        )}
      </article>
    </section>
  );
};
export default CustomerReviewSection;
