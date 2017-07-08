import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
import NoticeComponent from '../components/NoticeComponent';
import PageHeading from '../components/PageHeading';
const data = [
  { title: 'Android TV based', heading: 'Digital notice board is completely Android Tv based App developed for keeping all parents, students and teachers updated with all activities of the school.', icon: "fa fa-tv"},
  { title: 'Completely offline App', heading: 'Digital notice board will work without the use and need of internet means it is completely a offline App developed for the school.', icon: "fa fa-feed"},
  { title: 'Multiple Screens', heading: 'Digital notice board provides the facility of multiple screens that will help in displaying the notices and latest updates in a more organised manner.', icon: "fa fa-tablet"},
  { title: 'Multi page Image Gallery', heading: 'There are multiple pages in image gallery that will display latest images related to activities, events performed in the school.', icon: "fa fa-image"},
  { title: 'Built in form to update data', heading: 'Multiple forms are there in the digital notice board that will help the school admin in filling, updating the data on the digital notice board.', icon: "fa fa-file"},
  { title: 'Unique design for your school', heading: 'Digital notice board has a very unique and simple interface designed specially keeping the schools and there needs in mind, it is quiet easy to use as well.', icon: "fa fa-book"},
];
const RowCard = ({data}) => (
  <div className="section-content">
    <div className="row align-spaced">
      <NoticeComponent {...data[0]} />
      <NoticeComponent {...data[1]} />
    </div>
  </div>
)
const NoticeBoardPage = () => {
  const rowData = _.chunk(data, 2);
  return(
    <main className="page page-notice-board">
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
        <section className="row align-spaced section__content">
          <figure>
            <img src="./public/images/tv.png" className="section_notice__image" />
          </figure>
          <span className="section_notice__text">
            This project deals with Advance notice board. Create, Manage, Update and Display
            the information easily on the Digital notice board. All the important school related
            information will be displayed over the digital notice board. Digital Notice Board is
            a feature that will help teacher, students, parents in getting all the important notices
            related to school. Digital notice board will help keeping all students, parents, teachers
            updated with all school related activities. One of the main feature of this app is that it
            is completely offline that is there is no need of internet in running this app. The only
            requirement of this app is a android device on which it will run. Updating the data of
            digital notice board is also very easy. There is a multiple page image gallery in digital notice board also.
          </span>
        </section>
        <section className="section_notice__background-color">
          <h1 className="text-center">
            <span className="section__title_color_primary">Key</span>
            <span className="section__title_color_alternative"> Features</span>
          </h1>
          <article>
            {rowData.map((item, index) =>
             <RowCard key={index} data={item} />
            )}
          </article>
        </section>
        <Footer />
      </section>
    </main>
  );
};
export default NoticeBoardPage;
