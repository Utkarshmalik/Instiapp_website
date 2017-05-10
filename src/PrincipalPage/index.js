import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
const data = [
  { pic:'./public/images/children.png', heading: 'View childs complete record'},
  { pic:'./public/images/class.png', heading: 'View class wise data'},
  { pic:'./public/images/data.png', heading: 'View any teacher data'},
  { pic:'./public/images/message.png', heading: 'Messages to classes,teacher,parents'},
  { pic:'./public/images/syllabus.png', heading: 'View any class syllabus'},
  { pic:'./public/images/news.png', heading: 'View any school news'},
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
const PrincipalPage = ()=> {
  const rowData = _.chunk(data, 3);
  return(
    <main>
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/principal.png" name='Principal App' />
        <div className="section-content">
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </div>
        <div className="drawer-row">
          <img src="./public/images/principal-drawer.png" className="drawer-image"/>
          <div className="drawer-column">
            <h2 className="drawer-heading">About Principal App</h2>
            <ul className="drawer-section">
              <li className="drawer-inner-text"><span className="drawer-text">Better administration:</span> Principal App will help the principal in maintaining better administration.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Increase efficiency:</span> Efficiency of the principal could be increased.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Enhanced coordination:</span> Good coordination between principal and teachers is possible.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Role based access:</span> Principal would be able to see all students record,teacher record etc.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Improved management:</span> Optimum resource utilization is possible by the principal.</li>
            </ul>
          </div>
        </div>
        <div className="review-section">
          <ul className="review-query-border">
            <li className="review-query-text">How can Insti App helps in attendance management?</li>
          </ul>
          <div className="review-column">
            <ReviewCard src="./public/images/r1.jpg" name='Insti App provides a attendance page with total.' />
            <ReviewCard src="./public/images/r9.jpg" name='You can see all class wise attendance on its attendance page.' />
          </div>
          <div className="review-column">
            <ReviewCard src="./public/images/r5.jpg" name='Class wise attendance summary is been given with total by the Insti App.' />
            <ReviewCard src="./public/images/r3.jpg" name='Insti App has a simple attendance page.' />
          </div>
        </div>
        <div className="review-section">
          <ul className="review-query-border">
            <li className="review-query-text">Does attendance of teachers is also shown by the help of Insti App?</li>
          </ul>
          <div className="review-column">
            <ReviewCard src="./public/images/r10.jpg" name='Yes it shows teachers attendance also.' />
            <ReviewCard src="./public/images/r7.jpg" name='All staff attendance is been displayed by Insti App.' />
          </div>
          <div className="review-column">
            <ReviewCard src="./public/images/r2.png" name='All updates are given in News section of the App.' />
            <ReviewCard src="./public/images/r1.jpg" name='Insti App has circular and news pages that show all updates.' />
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default PrincipalPage;
