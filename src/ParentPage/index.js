import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
import CustomerComponent from '../components/CustomerComponent';
const data = [
  { pic:'./public/images/classwork.png', title: 'Child class info', heading1: 'Daily classwork, homework update.', heading2: 'Syllabus for the current term.', heading3: 'Timatable for each day.', heading4: 'Teacher directory.', heading5: 'Class specific message.'},
  { pic:'./public/images/assesment2.png', title: 'School Info', heading1: 'News items from school.', heading2: 'Event calendar.', heading3: 'School gallery.', heading4: 'About school and message from principal.', heading5: 'School facilities, contact details etc.'},
  { pic:'./public/images/message.png', title: 'Notifications', heading1: 'Get notification on child absentee.', heading2: 'Get update for school bus.', heading3: 'Child circular by teacher or principal.', heading4: 'Fee due reminders.', heading5: 'Any holiday declared or other urgent information.'},
  { pic:'./public/images/timetable2.png', title: 'Class Record', heading1: 'Child academic record with analytics.', heading2: 'Child health record.', heading3: 'Child annual attendance.', heading4: 'Child academic growth analysis.', heading5: 'Child extracurricular activities.'},
];
const reviewData = [
  { pic:'./public/images/r6.jpg', title: 'Alok Sharma', role: '(Principal)', heading: 'Accessing teachers/staff attendance has become very easy.'},
  { pic:'./public/images/r8.PNG', title: 'Madhu Tandon', role: '(Parent)', heading: 'Insti App keeps parents updated with all school activities.'},
  { pic:'./public/images/r4.jpg', title: 'Ravi Kumar', role: '(Student)', heading: 'Timetable and Homework features are very helpful for all students.'},
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
const ParentPage = ()=> {
  const rowData = _.chunk(data, 2);
  const row = _.chunk(reviewData, 1);
  return(
    <main className="page page-parent-app">
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/parent-image.png" text1='Parent' text2=' App' />
        <div className="section-content">
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </div>
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
              <li>View child classwork, homework, timetable etc.</li>
              <li>Get push notifications on school activities and on travel.</li>
              <li>View child health record.</li>
              <li>Easy access of child attendance.</li>
              <li>View child performance through a performance graph.</li>
              <li>Simple academic analysics.</li>
              <li>Enhanced coordination with teachers.</li>
              <li>View latest news and circulars.</li>
              <li>Monitor classwise activity daily.</li>
              <li>Get notifications for poor attendance, fee defaulters, etc.</li>
            </ul>
          </article>
        </section>
        <h2 className="text-center">Reviews</h2>
        <div className="row align-spaced">
          {row.map((item, index) =>
           <ReviewCard key={index} reviewData={item} />
          )}
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default ParentPage;
