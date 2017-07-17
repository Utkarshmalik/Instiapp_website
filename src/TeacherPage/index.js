import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import HeaderComponent from '../components/HeaderComponent';
import RoleCard from '../components/RoleCard';
import ReviewComponent from '../components/ReviewComponent';
import data from './data';
const rowData = [
  'Monitor classwork and homework easily.',
  'Section or subject wise classwork or homework.',
  'Get notifications for salary transfer.',
  'Easy access of own attendance.',
  'Course wise syllabus.',
  'Overall attendance summary.',
  'Easy access of own timetable.',
  'Recieve notifications/messages from principal.',
  'Easy to apply for leave.',
  'View student wise exam records.'
];
const reviewData = [
  { pic:'./public/images/r5.jpg', title: 'Rajeev Ranjan', role: 'Principal', text: 'Get notifications related to school activities.'},
  { pic:'./public/images/r7.jpg', title: 'Sunita Verma', role: 'Teacher', text: 'Academic performance of a child per term could easily be seen.'},
  { pic:'./public/images/r10.jpg', title: 'Vikram Gupta', role: 'Parent', text: 'Child performance gets displayed using performance graph.'},
];
const TeacherPage = ()=> {
  return(
    <main className="page page-principal-app">
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/teacher.png" text1='Teacher ' text2='App' />
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
export default TeacherPage;
