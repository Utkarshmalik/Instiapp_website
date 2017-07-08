import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/SectionHeading';
const Card = ({src, alt, title, path, items}) => (
  <div className="column small-12 medium-expanded large-expanded align-spaced">
    <section className="role-app-card align-self-middle">
      <article className="role-app-card__content">
        <figure>
          <img src={src} alt={alt}/>
        </figure>
        <ul className="role-app-card__overlay">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </article>
      <footer className="row align-spaced role-app-card__footer">
        <div className="column role-app-card__footer-title">
          <a href={path}>{title}</a>
        </div>
        <div className="column role-app-card__footer-icon">
          <a href={path} className="fa fa-arrow-right align-self-middle"></a>
        </div>
      </footer>
    </section>
  </div>
);

const RoleAppSection = () => (
  <section className="section section_role-app">
    <SectionHeading
      text1="Permissions and  "
      text2="role "
      text3=" based App"
    />
    <article className="row align-spaced section__content">
      <Card
        src="./public/images/p1.png"
        alt="Principal App Image"
        title="Principal App"
        items={[
          'Can view any child complete record: parent information, attendance record, circulars, examination report, etc',
          'Can view any teacher or staff data: attendance, leave, application, homework assigned, etc.',
          'Can view any classwise data: homework, classwork, timetable etc.'
        ]}
        path="/principal"
        />
        <Card
          src="./public/images/p3.png"
          alt="Parent App Image"
          title="Parent App"
          items={[
            'Can get instant updates from school about her child fees, attendance, homework, classwork, circulars, etc.',
            'Can view child timetable, syllabus, school gallery, school calendar, teacher directory etc.',
            'Can view child examination result with performance graph.'
          ]}
          path="/parent"
          />
          <Card
            src="./public/images/p2.png"
            alt="Teacher App Image"
            title="Teacher App"
            items={[
              'Can view any child complete record as class teacher or subject teacher',
              'Can view own timetable, attendance, classwork, homework, etc.',
              'Can apply for leave, assign homework, assign examination marks, etc.'
            ]}
            path="/teacher"
            />
    </article>
  </section>
);
export default RoleAppSection;
