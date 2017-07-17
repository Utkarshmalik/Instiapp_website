import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
import NoticeComponent from '../components/NoticeComponent';
import SectionHeading from '../components/SectionHeading';
import data from './data';
const rowData = [
  { pic: './public/images/transport-bg.jpg',
    text: 'GPS bus tracking is designed specially for tracking the school buses that will\
           pick school students from there home. Transport manager will have full watch on\
           all the routes of all the buses and the parents of the students would recieve\
           push notifications on any change in bus routes, bus schedule, etc. Transport\
           manager will also be in touch with all the bus drivers and will also monitor\
           speed of all buses to ensure safety of all students. GPS bus tracking would\
           provide you the summary of all routes that a school bus is scheduled to travel\
           and any change in the scheduled route would be known to the parents through a\
           push notification. GPS bus tracking is a new feature that is been provided\
           to the school for ensuring safety of every child in the school. The aim of\
           GPS bus tracking is to provide safe environment to all the childern that are\
           travelling in the school bus. A push notification will be send to all parents\
           when there child reaches and leaves the school.'
  }
];
const RowCard = ({pic, text}) => (
  <section className="row gps-row-card__wrapper">
    <div className="column small-12 large-4">
      <figure>
        <img src={pic} className="gps-row-card__image" />
      </figure>
    </div>
    <div className="column small-12 large-expanded text-justify notice-row-card__content">
      {text}
    </div>
  </section>

);
const TransportPage = () => {
  return(
    <main className="page page-gps">
      <HeaderSection />
      <section>
        <article>
          <header className="section-gps-header">
            <PageHeading
              text1='GPS '
              text2='Bus '
              text3='Tracking'
              classes=' heading_theme_white'
            />
          </header>
          <section>
            <article className="row align-spaced section__content">
                {data.map((item, index) =>
                 <NoticeComponent key={index} {...item} />
                )}
            </article>
            <article>
              <figure>
                <img src="./public/images/transport.png" className="section-gps__image"/>
              </figure>
            </article>
            <article className="section-gps__background-color">
              <header>
                <SectionHeading
                  text1="GPS "
                  text2="Bus "
                  text3="Tracking"
                />
              </header>
              <RowCard {...rowData[0]}/>
            </article>
          </section>
        </article>
      </section>
      <Footer />
    </main>
  );
};
export default TransportPage;
