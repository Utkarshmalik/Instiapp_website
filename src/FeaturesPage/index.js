import React from 'react';
import {render} from 'react-dom';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
const data = [
  { pic:'./public/images/child.png', text: 'Child record will display all the details of a child including his name, gender, address and date of birth etc.', heading: 'Child Info'},
  { pic:'./public/images/assesment.png', text: 'Homework feature will display all the work given to a student by a teacher for doing it at there home.', heading: 'Homework'},
  { pic:'./public/images/timetable.png', text: 'Timetable is a feature specially developed to help students and teachers in following there daily routine.', heading: 'Timetable'},
  { pic:'./public/images/classwork.png', text: 'Classwork is a feature developed to keep all students and teachers updated with all the activities of the class.', heading: 'Classwork'},
  { pic:'./public/images/f3.png', text: 'Fee is a feature created to help parents know true fee status of there child all fee dues will also be highlighted here.', heading: 'Fee Record'},
  { pic:'./public/images/assesment2.png', text: 'Assesment is a feature that will help all parents and teachers in assessing the true performance of a child.', heading: 'Assesment'},
  { pic:'./public/images/news.png', text: 'News feature of Insti App will display all school related latest news to all parents, teachers and students.', heading: 'News'},
  { pic:'./public/images/f2.png', text: 'Transportation is a feature that will update all parents, teachers and principal regarding all bus routes.', heading: 'Transportation'},
];
const Card = (props) => (
  <div className="column small-12 medium-expanded large-expanded align-spaced">
    <section className="features-card features-card__border align-self-middle">
      <h3 className="text-center features-card__heading">{props.heading}</h3>
      <div className="row align-spaced">
        <figure>
          <img src={props.pic} className="features-card__image"/>
        </figure>
        <span className="features-card__text">{props.text}</span>
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
const FeaturesPage = () => {
  const rowData = _.chunk(data, 2);
  return(
    <main className="page page-features">
      <HeaderSection />
      <section className="section section_features">
        <PageHeading
          text1='App '
          text2='Features '
          text3=''
        />
      </section>
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
export default FeaturesPage;
