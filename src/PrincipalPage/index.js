import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import SectionHeading from '../components/SectionHeading';
import CardComponent from '../components/CardComponent';
import CustomerComponent from '../components/CustomerComponent';
const data = [
  {pic: './public/images/child.png', title: 'Child record', heading1: 'View child discipline record.', heading2: 'View child circulars.', heading3: 'View monthly/annually attendance summary.', heading4: 'View child health record.', heading5: 'View child academic record.'},
  {pic: './public/images/class.png', title: 'Classwise data', heading1: 'Class-section wise timetable.', heading2: 'Course wise syllabus.', heading3: 'Overall attendance summary.', heading4: 'Section or subject wise classwork and homework.', heading5: 'Academic performance per term.'},
  {pic: './public/images/staff.png', title: 'Teacher & Staff', heading1: 'Teacher wise timetable.', heading2: 'Classwork or Homework assigned by teacher.', heading3: 'Search department or subject wise staff.', heading4: 'Attendance details of staff.', heading5: 'Salary details of staff.'},
  {pic: './public/images/new.png', title: 'News/Message', heading1: 'Can view all news items.', heading2: 'Can View all circulars.', heading3: 'Can send news items to all/selected parents.', heading4: 'Can send message to all/selected teacher/staff.', heading5: 'Can send circular to single/multiple parents.'},
];
const reviewData = [
  { pic:'./public/images/c1.jpg', title: 'Sudhir Joshi', role: '(Principal)', heading: 'Insti App has a very user friendly interface and it is very easy to use.'},
  { pic:'./public/images/r9.jpg', title: 'Suman Mohan', role: '(Teacher)', heading: 'Insti App provides easy access to child records.'},
  { pic:'./public/images/r1.jpg', title: 'Ram Sharma', role: '(Parent)', heading: 'Daily homework and classwork monitoring is quiet easy.'},
];
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="row align-spaced">
      <CardComponent {...data[0]} />
      <CardComponent {...data[1]} />
    </div>
  </div>
)
const ReviewCard = ({reviewData}) => (
  <div className="section-content">
    <div className="row align-spaced">
      <CustomerComponent {...reviewData[0]} />
    </div>
  </div>
)
const PrincipalPage = ()=> {
  const rowData = _.chunk(data, 2);
  const row = _.chunk(reviewData, 1);
  return(
    <main className="page page-principal-app">
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/principal.png" text1='Principal ' text2='App' />
        <article className="section-content">
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </article>
        <section className="section_background">
          <SectionHeading
            text1='KEY '
            text2='BENIFITS '
            text3=''
          />
          <article className="row align-spaced align-self-middle margin-top-default section__content shrink">
            <figure>
              <img src="./public/images/phone-drawer.png" className="section_role__benifits-image" />
            </figure>
            <ul className="section_role__benifits-text">
              <li>Better administration.</li>
              <li>Increase efficiency.</li>
              <li>Better communication.</li>
              <li>Easy access of child records.</li>
              <li>Easy access of staff data.</li>
              <li>Academic analysis.</li>
              <li>Enhanced coordination with teachers.</li>
              <li>Keep updated on school activities and on travel.</li>
              <li>Monitor classwise activity daily.</li>
              <li>Access reports for poor attendance, fee defaulters.</li>
            </ul>
          </article>
        </section>
        <section>
          <h2 className="text-center">Reviews</h2>
          <article className="row align-spaced">
            {row.map((item, index) =>
             <ReviewCard key={index} reviewData={item} />
            )}
          </article>
        </section>
        <Footer />
      </section>
    </main>
  );
};
export default PrincipalPage;
