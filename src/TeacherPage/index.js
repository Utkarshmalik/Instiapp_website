import React from 'react';
import lodash from 'lodash';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
const data = [
  { pic:'./public/images/children.png', heading: 'View child record as class teacher'},
  { pic:'./public/images/assesment.png', heading: 'Assign Homework'},
  { pic:'./public/images/classwork.png', heading: 'Classwork'},
  { pic:'./public/images/timetable.png', heading: 'Own Timetable'},
  { pic:'./public/images/syllabus.png', heading: 'Syllabus'},
  { pic:'./public/images/examrecord.png', heading: 'Enter Exam Records'},
];
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="row-section">
      <CardComponent {...data[0]} />
      <CardComponent {...data[1]} />
      <CardComponent {...data[2]} />
    </div>
  </div>
)
const ReviewCard = (props) => (
  <div className="review-border">
    <img src={props.src} className="review-image"/>
    <span className="review-text">{props.name}</span>
  </div>
)
const TeacherPage = (props)=> {
  const rowData = _.chunk(data, 3);
  return(
    <main>
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/teacher.png" name='Teacher App' />
        <div className="section-content">
          {rowData.map((item, index) =>
            <RowCard key={index} data={item} />
          )}
        </div>
        <div className="drawer-row">
          <img src="./public/images/principal-drawer.png" className="drawer-image"/>
          <div className="drawer-column">
            <h2 className="drawer-heading">About Teacher App</h2>
            <ul className="drawer-section">
              <li className="drawer-inner-text"><span className="drawer-text">Helpful to teachers:</span> Teacher App is created to help teachers with there work.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Easy assesment possible:</span> Help teachers in maintaining and assessing a child performance.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Greater awareness:</span> Make teacher aware of all school related activities.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Good parent teacher relationship:</span> Better parent teacher relationship could be maintained.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Better performance:</span> Increases teachers performance and make them work more effectively.</li>
            </ul>
          </div>
        </div>
        <div className="review-section">
          <ul className="review-query-border">
            <li className="review-query-text">Is there a feature that will help me find out what classwork and homework is been given to my child today?</li>
          </ul>
          <div className="review-column">
            <ReviewCard src="./public/images/r1.jpg" name='Insti App has classwork and homework pages.' />
            <ReviewCard src="./public/images/r7.jpg" name='Insti App has a good interface.Simple to use homework, classwork.' />
          </div>
          <div className="review-column">
            <ReviewCard src="./public/images/r5.jpg" name='There are classwork and homework pages to help you.' />
            <ReviewCard src="./public/images/r3.jpg" name='Find out classwork and homework of 1 week using Insti App.' />
          </div>
        </div>
        <div className="review-section">
          <ul className="review-query-border">
            <li className="review-query-text">Does Insti App provides updates regarding school holidays also?</li>
          </ul>
          <div className="review-column">
            <ReviewCard src="./public/images/r5.jpg" name='All updates are given in News section of the App.' />
            <ReviewCard src="./public/images/r6.jpg" name='Insti App has circular and news pages that show all updates.' />
          </div>
          <div className="review-column">
            <ReviewCard src="./public/images/r2.png" name='Circulars is also a section that shows new updates.' />
            <ReviewCard src="./public/images/r7.jpg" name='Kindly refer to the Insti App News section for all updates.' />
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default TeacherPage;
