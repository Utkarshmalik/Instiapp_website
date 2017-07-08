import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
import CustomerComponent from '../components/CustomerComponent';
const data = [
  { pic:'./public/images/children.png', title: 'Classwise data', heading1: 'Class-section wise timetable.', heading2: 'Course wise syllabus.', heading3: 'Overall attendance summary.', heading4: 'Section or subject wise classwork and homework.', heading5: 'Academic performance per term.'},
  { pic:'./public/images/assesment.png', title: 'Student data', heading1: 'View student discipline record.', heading2: 'View student circulars.', heading3: 'View monthly/annually attendance summary.', heading4: 'View student health record.', heading5: 'View student academic record.'},
  { pic:'./public/images/f8.png', title: 'HR', heading1: 'Apply for leave.', heading2: 'See own attendance summary.', heading3: 'Get notification for salary transfer.', heading4: 'See salary transfer report.', heading5: 'Access colleagues contact details.'},
  { pic:'./public/images/timetable.png', title: 'Own data', heading1: 'View classwork, homework assigned by themselves.', heading2: 'View own timetable.', heading3: 'View circular given by them.', heading4: 'View private messages send by admin/principal.', heading5: 'View students exam records.'},
];
const reviewData = [
  { pic:'./public/images/r5.jpg', title: 'Rajeev Ranjan', role: '(Principal)', heading: 'Get notifications related to school activities.'},
  { pic:'./public/images/r7.jpg', title: 'Sunita Verma', role: '(Teacher)', heading: 'Academic performance of a child per term could easily be seen.'},
  { pic:'./public/images/r10.jpg', title: 'Vikram Gupta', role: '(Parent)', heading: 'Child performance gets displayed using performance graph.'},
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
const TeacherPage = (props)=> {
  const rowData = _.chunk(data, 2);
  const row = _.chunk(reviewData, 1);
  return(
    <main className="page page-teacher-app">
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/teacher.png" text1='Teacher ' text2='App' />
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
              <li>Monitor classwork and homework easily.</li>
              <li>Section or subject wise classwork or homework.</li>
              <li>Get notifications for salary transfer.</li>
              <li>Easy access of own attendance.</li>
              <li>Course wise syllabus.</li>
              <li>Overall attendance summary.</li>
              <li>Easy access of own timetable.</li>
              <li>Recieve notifications/messages from principal.</li>
              <li>Easy to apply for leave.</li>
              <li>View student wise exam records.</li>
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
export default TeacherPage;
