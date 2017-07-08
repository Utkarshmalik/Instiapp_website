import React from 'react';
import {render} from 'react-dom';
import HeaderSection from './Header';
import Footer from '../components/Footer';
const data = [
  { pic: './public/images/assesment.png',heading: 'Examination', title1: 'Create different types of exams based on grades, marks', title2: 'Group exams if required', title3: 'Extensive report center'},
  { pic: './public/images/child.png',heading: 'Student Record', title1: 'Normal student view facility based on batches.', title2: 'View complete information of a student from their profile regarding reports, fees, activities, remarks.', title3: 'Search existing and former students.'},
  { pic: './public/images/children.png',heading: 'Student Lifecycle' ,title1: 'Unique ID for all students', title2: 'Comprehensive admission form', title3: 'Multiple guardian addition facility'},
  { pic: './public/images/f8.png',heading: 'HR Module' ,title1: 'Manage employee pay roll register', title2: 'Generate pay slip for employees', title3: 'Track Monthly Salary Reports'},
  { pic: './public/images/f3.png',heading: 'Accounts Module' ,title1: 'Comprehensive Fee classification system', title2: 'Easy fee submission process', title3: 'Manage and Pay instant fees'},
  { pic: './public/images/f10.png',heading: 'Hostel' ,title1: 'Manage Hostel', title2: 'Add/Edit/Delete/View different types of Hostel', title3: 'Allocate rooms to students'},
  { pic: './public/images/f5.png',heading: 'Library' ,title1: 'Manage library books', title2: 'View/Edit/Delete/Add books', title3: 'Filter book using available filters'},
  { pic: './public/images/timetable.png',heading: 'Timetable' ,title1: 'Drag and drop timetable', title2: 'Alerts on subject limits per week while creating timetable', title3: 'Timetable creation in advance'},
];
const Card = (props) => (
  <div className="column small-12 medium-expanded large-expanded align-spaced">
    <section className="erp-card erp-card__border align-self-middle">
      <h3 className="text-center features-card__heading">{props.heading}</h3>
      <div className="row align-self-middle">
        <figure>
          <img src={props.pic} className="features-card__image" />
        </figure>
        <ul className="erp-card__text">
          <li>{props.title1}</li>
          <li>{props.title2}</li>
          <li>{props.title3}</li>
        </ul>
      </div>
    </section>
  </div>
);
const RowCard = ({data}) => (
  <div className="row">
    <Card {...data[0]} />
    <Card {...data[1]} />
  </div>
)
const ErpPage = () => {
  const rowData = _.chunk(data, 2);
  return(
    <main className="page page-erp">
      <HeaderSection />
      <section>
        <article className="align-spaced section__content">
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default ErpPage;
