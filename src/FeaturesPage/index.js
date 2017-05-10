import React from 'react';
import lodash from 'lodash';
import HeaderSection from './Header';
import Footer from '../components/Footer';
const data = [
  { pic:'./public/images/child.png', heading: 'Child record will display all the details of a child including his name, gender, address and date of birth etc.'},
  { pic:'./public/images/assesment.png', heading: 'Homework feature will display all the work given to a student by a teacher for doing it at there home.'},
  { pic:'./public/images/timetable.png', heading: 'Timetable is a feature specially developed to help students and teachers in following there daily routine.'},
  { pic:'./public/images/classwork.png', heading: 'Classwork is a feature developed to keep all students and teachers updated with all the activities of the class.'},
  { pic:'./public/images/f3.png', heading: 'Fee is a feature created to help parents know true fee status of there child all fee dues will also be highlighted here.'},
  { pic:'./public/images/assesment2.png', heading: 'Assesment is a feature that will help all parents and teachers in assessing the true performance of a child.'},
  { pic:'./public/images/news.png', heading: 'News feature of Insti App will display all school related latest news to all parents, teachers and students.'},
  { pic:'./public/images/f2.png', heading: 'Transportation is a feature that will update all parents, teachers and principal regarding all bus routes.'},
];
const Card = (props) => (
  <div className="features-card-row">
    <img src={props.pic} className="features-card-image"/>
    <span dangerouslySetInnerHTML={{__html: props.heading}} className="features-card-text"></span>
  </div>
)
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="features-inner-row">
      <Card {...data[0]} />
      <Card {...data[1]} />
    </div>
  </div>
)
const FeaturesPage = ()=> {
  const rowData = _.chunk(data, 2);
  return(
    <main>
      <HeaderSection />
      <section>
        <div className="features-inner-background">
          <h1 className="features-inner-heading">App <span className="notice-color">Features</span></h1>
        </div>
        <div className="features-inner-section">
          <div className="features-row">
            {rowData.map((item, index) =>
             <RowCard key={index} data={item} />
            )}
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default FeaturesPage;
