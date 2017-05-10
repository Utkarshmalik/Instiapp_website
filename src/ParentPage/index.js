import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import HeaderComponent from '../components/HeaderComponent';
import CardComponent from '../components/CardComponent';
const data = [
  { pic:'./public/images/news.png', heading: 'News'},
  { pic:'./public/images/homework2.png', heading: 'Homework'},
  { pic:'./public/images/assesment2.png', heading: 'Assesment'},
  { pic:'./public/images/timetable2.png', heading: 'Timetable'},
  { pic:'./public/images/f3.png', heading: 'Fee Information'},
  { pic:'./public/images/classwork.png', heading: 'Classwork'},
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
const ParentPage = ()=> {
  const rowData = _.chunk(data, 3);
  return(
    <main>
      <HeaderSection />
      <section>
        <HeaderComponent src="./public/images/parent-image.png" name='Parent App' />
        <div className="section-content">
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </div>
        <div className="drawer-row">
          <img src="./public/images/parent-drawer.png" className="drawer-image"/>
          <div className="drawer-column">
            <h2 className="drawer-heading">About Parent App</h2>
            <ul className="drawer-section">
              <li className="drawer-inner-text"><span className="drawer-text">Helpful to parents:</span> Parent App will help parents in monitoring there child.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Better bonding:</span> Parents and children could have a more better bonding with each other.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Easy problem solving:</span> All queries regarding child performance could be made.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Parent teacher interaction:</span> Frequent parent and teacher interaction is possible.</li>
              <li className="drawer-inner-text"><span className="drawer-text">Recieve child updates:</span> Updates regarding there child are recieved.</li>
            </ul>
          </div>
        </div>
        <div className="review-section">
          <ul className="review-query-border">
            <li className="review-query-text">Can i get updates if my child is absent from school?</li>
          </ul>
          <div className="review-column">
            <ReviewCard src="./public/images/r8.PNG" name='You can get all updates regarding your child by the help of Insti App.' />
            <ReviewCard src="./public/images/r9.jpg" name='You will recieve a text message if your child is not in school.' />
          </div>
          <div className="review-column">
            <ReviewCard src="./public/images/r10.jpg" name='Your child attendance is been displayed on the attendance page of Insti App.' />
            <ReviewCard src="./public/images/r3.jpg" name='Attendance of the child is shown on attendance page.' />
          </div>
        </div>
        <div className="review-section">
          <ul className="review-query-border">
            <li className="review-query-text">Is Bus route notifications are possible using Insti App?</li>
          </ul>
          <div className="review-column">
            <ReviewCard src="./public/images/r5.jpg" name='Notifications regarding bus routes are send using text messages.' />
            <ReviewCard src="./public/images/r3.jpg" name='Insti App will send all messages regarding the bus routes to your mobile number.' />
          </div>
          <div className="review-column">
            <ReviewCard src="./public/images/r2.png" name='You will recieve text messages for all your bus routes.' />
            <ReviewCard src="./public/images/r1.jpg" name='Current route of a bus is been send to all related parents.' />
          </div>
        </div>
        <Footer />
      </section>
    </main>
  );
};
export default ParentPage;
