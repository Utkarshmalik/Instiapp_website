import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import PageHeading from '../components/PageHeading';
import NoticeComponent from '../components/NoticeComponent';
import data from './data';
const rowData = [
  { pic: './public/images/tv.png',
    text: 'This project deals with Advance notice board. Create, Manage, Update and Display\
           the information easily on the Digital notice board. All the important school related\
           information will be displayed over the digital notice board. Digital Notice Board is\
           a feature that will help teacher, students, parents in getting all the important notices\
           related to school. Digital notice board will help keeping all students, parents, teachers\
           updated with all school related activities. One of the main feature of this app is that it\
           is completely offline that is there is no need of internet in running this app. The only\
           requirement of this app is a android device on which it will run. Updating the data of\
           digital notice board is also very easy. There is a multiple page image gallery in digital notice board also.'
  }
];
const RowCard = ({pic, text}) => (
  <section className="row notice-row-card__wrapper">
    <div className="column small-12 large-4">
      <figure>
        <img src={pic} className="notice-row-card__image" />
      </figure>
    </div>
    <div className="column small-12 large-expanded text-justify notice-row-card__content">
      {text}
    </div>
  </section>
);
const NoticeBoardPage = () => {
  return(
    <div className="page page-gps">
      <HeaderSection />
      <section>
        <header className="section_notice__background align-center">
          <PageHeading
            text1='Digital '
            text2='Notice '
            text3='Board'
            classes=' heading_theme_white'
          />
        </header>
        <main>
          <RowCard {...rowData[0]}/>
          <article className="section-notice__background-color">
            <header>
              <h2 className="text-center">Key Features</h2>
            </header>
            <section className="row align-spaced section__content">
                {data.map((item, index) =>
                 <NoticeComponent key={index} {...item} />
                )}
            </section>
          </article>
        </main>
      </section>
      <Footer />
    </div>
  );
};
export default NoticeBoardPage;
