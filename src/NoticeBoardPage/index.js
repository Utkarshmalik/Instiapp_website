import React from 'react';
import HeaderSection from './Header';
import Footer from '../components/Footer';
const NoticeBoardPage = () => (
  <main>
    <HeaderSection />
    <section>
      <div className="notice-header-background">
        <h1 className="notice-inner-heading">Digital <span className="notice-text-color">Notice</span> Board</h1>
      </div>
      <div className="notice-inner-row">
        <video width="420" height="330" className="notice-inner-video" controls>
          <source src="./public/images/erp2.mp4" type="video/mp4" />
        </video>
        <div>
          <strong className="notice-text">Notice board is primary thing in any school and institution and managing various notices day to day is a tedious procces.
          </strong>
          <p className="notice-inner-text">This project deals with Advance notice board. Create, Manage, Update and Display the information easily on the Digital notice board. All the important school related information will be displayed over the digital notice board. Digital Notice Board is a feature that will help teacher, students, parents in getting all the important notices related to school.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  </main>
);
export default NoticeBoardPage;
