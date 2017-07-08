import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import NoticeComponent from '../components/NoticeComponent';
import PageHeading from '../components/PageHeading';
const data = [
  { title: 'Know real time location', heading: 'Once the child is in the school bus parents are able to track the real time location of the school bus and would get push notifications for all the routes taken by the school bus, any unscheduled route change, etc.', icon: "fa fa-bus"},
  { title: 'Recieve real time notifications', heading: 'Once there child is in the school bus parents would get push notifications related to all unscheduled stops, any change in bus route, current speed of the school bus and when the bus reaches the school.', icon: "fa fa-bell"},
  { title: 'Role based view', heading: 'People would be able to see things according to there role parents would see activities related to child, transport manager would have admin access and driver would only see current bus routes possible.', icon: "fa fa-user"},
  { title: 'View any route member', heading: 'Transport manager is able to see any route member, view any school bus route, monitor speed of all the school buses and could know the reason for delay of any school bus, manager could also communicate with any bus driver.', icon: "fa fa-map"},
  { title: 'Monitor speed', heading: 'Push notifications related to speed of the school bus would be send to parents and transport manager would monitor the speed of the school bus regularly any unnecessary route change would also be monitored.', icon: "fa fa-dashboard"},
  { title: 'View Scheduled Route', heading: 'Parents are able to see the scheduled route of the school bus from which there child would reach school, push notification would be send if there is any change in the scheduled route.', icon: "fa fa-map-marker"},
];
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="row align-spaced gps-card__row">
      <NoticeComponent {...data[0]} />
      <NoticeComponent {...data[1]} />
    </div>
  </div>
)
const TransportPage = () => {
  const rowData = _.chunk(data, 2);
  return(
    <main className="page page-gps">
      <HeaderSection />
      <section>
        <header className="section-gps-header">
          <PageHeading
            text1='GPS '
            text2='Bus '
            text3='Tracking'
            classes=' heading_theme_white'
          />
        </header>
        <div>
          {rowData.map((item, index) =>
           <RowCard key={index} data={item} />
          )}
        </div>
        <section className="section-gps__middle-image"></section>
        <section>
          <h1 className="align-self-middle">
            <span className="heading__title_color_primary">GPS</span>
            <span className="heading__title_color_alternative"> Bus</span>
            <span className="heading__title_color_primary"> Tracking</span>
          </h1>
          <article className="row align-spaced section__content section-squeezed">
            <figure>
              <img src="./public/images/transport-bg.jpg" className="section-gps__image"/>
            </figure>
            <article>
              <span className="section-gps__text text-justify">
                GPS bus tracking is designed specially for tracking the school buses that will
                pick school students from there home. Transport manager will have full watch on
                all the routes of all the buses and the parents of the students would recieve
                push notifications on any change in bus routes, bus schedule, etc. Transport
                manager will also be in touch with all the bus drivers and will also monitor
                speed of all buses to ensure safety of all students. GPS bus tracking would
                provide you the summary of all routes that a school bus is scheduled to travel
                and any change in the scheduled route would be known to the parents through a
                push notification.
              </span>
            </article>
          </article>
        </section>
        <Footer />
      </section>
    </main>
  );
};
export default TransportPage;
