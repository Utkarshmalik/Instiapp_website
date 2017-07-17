import React from 'react';
import {render} from 'react-dom';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
const data = [
  { pic:'./public/images/children.png', text: 'Child record will display all the details of a child including his name, gender, address and date of birth etc.', title: 'Child Info'},
  { pic:'./public/images/assesment.png', text: 'Homework feature will display all the work given to a student by a teacher for doing it at there home.', title: 'Homework'},
  { pic:'./public/images/timetable.png', text: 'Timetable is a feature specially developed to help students and teachers in following there daily routine.', title: 'Timetable'},
  { pic:'./public/images/classwork.png', text: 'Classwork is a feature developed to keep all students and teachers updated with all the activities of the class.', title: 'Classwork'},
  { pic:'./public/images/f3.png', text: 'Fee is a feature created to help parents know true fee status of there child all fee dues will also be highlighted here.', title: 'Fee Record'},
  { pic:'./public/images/assesment2.png', text: 'Assesment is a feature that will help all parents and teachers in assessing the true performance of a child.', title: 'Assesment'},
  { pic:'./public/images/news.png', text: 'News feature of Insti App will display all school related latest news to all parents, teachers and students.', title: 'News'},
  { pic:'./public/images/f2.png', text: 'Transportation is a feature that will update all parents, teachers and principal regarding all bus routes.', title: 'Transportation'},
];
const Card = ({title, pic, text}) => (
  <section className="features-card column large-6 medium-expanded small-12">
    <article className="features-card__wrapper">
      <header className="features-card__heading-wrapper">
        <h3 className="text-center features-card__heading">{title}</h3>
      </header>
      <section className="row features-card__content">
        <figure>
          <img src={pic} className="features-card__images" />
        </figure>
        <span className="features-card__text">{text}</span>
      </section>
    </article>
  </section>

);
const FeaturesPage = () => {
  return(
    <main className="page page-erp">
      <HeaderSection />
      <section>
        <header className="section section_features">
          <PageHeading
            text1='App '
            text2='Features '
            text3=''
          />
        </header>
        <article className="row align-spaced section__content">
          {data.map((item, index) =>
           <Card key={index} {...item} />
          )}
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default FeaturesPage;
