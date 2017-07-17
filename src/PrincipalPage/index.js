import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import SectionHeading from '../components/SectionHeading';
import RoleCard from '../components/RoleCard';
import ReviewComponent from '../components/ReviewComponent';
import data from './data';
const rowData = [
  'Better administration.',
  'Increase efficiency.',
  'Better communication.',
  'Easy access of child records.',
  'Easy access of staff data.',
  'Academic analysis.',
  'Enhanced coordination with teachers.',
  'Keep updated on school activities and on travel.',
  'Monitor classwise activity daily.',
  'Access reports for poor attendance, fee defaulters.'
];
const reviewData = [
  { pic:'./public/images/c1.jpg', title: 'Sudhir Joshi', role: 'Principal', text: 'Insti App has a very user friendly interface and it is very easy to use.'},
  { pic:'./public/images/r9.jpg', title: 'Sunita Mohan', role: 'Teacher', text: 'Insti App provides easy access to child records.'},
  { pic:'./public/images/r1.jpg', title: 'Ram Sharma', role: 'Parent', text: 'Daily homework and classwork monitoring is quiet easy.'},
];
const PrincipalPage = ()=> {
  return(
    <main className="page page-principal-app">
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/principal.png" text1='Principal ' text2='App' />
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
export default PrincipalPage;
