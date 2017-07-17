import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import SectionHeading from '../components/SectionHeading';
import RoleCard from '../components/RoleCard';
import ReviewComponent from '../components/ReviewComponent';
import data from './data';
const rowData = [
  'View child classwork, homework, timetable etc.',
  'Get push notifications on school activities and on travel.',
  'View child health record.',
  'Easy access of child attendance.',
  'View child performance through a performance graph.',
  'Simple academic analysics.',
  'Enhanced coordination with teachers.',
  'View latest news and circulars.',
  'Monitor classwise activity daily.',
  'Get notifications for poor attendance, fee defaulters, etc.'
];
const reviewData = [
  { pic:'./public/images/r6.jpg', title: 'Alok Sharma', role: 'Principal', text: 'Accessing teachers/staff attendance has become very easy.'},
  { pic:'./public/images/r7.jpg', title: 'Madhu Tandon', role: 'Parent', text: 'Insti App keeps parents updated with all school activities.'},
  { pic:'./public/images/r4.jpg', title: 'Ravi Kumar', role: 'Student', text: 'Timetable and Homework features are very helpful for all students.'},
];
const ParentPage = ()=> {
  return(
    <main className="page page-principal-app">
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/parent-image.png" text1='Parent ' text2='App' />
        <article className="row align-spaced section__content">
          {data.map((item, index) =>
           <RoleCard key={index} {...item} />
          )}
        </article>
        <article className="section_role">
          <SectionHeading
            text1='KEY '
            text2='BENIFITS '
            text3=''
          />
          <section className="row align-spaced align-self-middle section-row__content">
            <figure>
              <img src="./public/images/phone-drawer.png" className="" />
            </figure>
            <ul className="role-card__text">
              {rowData.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </section>
        </article>
        <article>
          <header>
            <h2 className="text-center">Review</h2>
          </header>
          <section className="row align-spaced section__content">
            {reviewData.map((item, index) =>
             <ReviewComponent key={index} {...item} />
            )}
          </section>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default ParentPage;
