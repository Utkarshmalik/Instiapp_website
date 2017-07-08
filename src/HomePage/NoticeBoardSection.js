import React from 'react';
import {render} from 'react-dom';
import SectionHeading from '../components/SectionHeading';
const NoticeBoardSection = () => (
  <section className="section section-notice-board section-squeezed">
    <SectionHeading
      text1="Digital "
      text2="Notice "
      text3="Board"
    />
    <article className="row align-spaced section__content">
      <section className="column small-12 large-expanded middle-expanded">
        <figure>
          <img src="./public/images/noticeboard-image.gif" className="section-notice-board__image align-self-middle" />
        </figure>
      </section>
      <section className="column small-12 large-expanded middle-expanded">
        <div className="section-notice-board__content">
          <h3 className="text-center notice-board__footer-title">Android Tv based Digital Notice Board</h3>
          <span className="customer-review-card__text text-justify notice-board__footer-text section-notice-board__text">Notice board is primary
            thing in any school and institution and managing various notices day to day is a tedious procces so the need
            for such a notice board arises. This project deals with Advance notice board. Create, Manage, Update and
            Display the information easily on the Digital notice board. Digital notice board will help keeping all
            students, teachers updated with all school related activities. Digital Notice Board will help all students and
            teachers in getting all school related information informatioin on daily basis.
          </span>
        </div>
        <div>
          <a href="/noticeBoard" className="text-center notice-board__footer-button">NOTICE BOARD DEMO</a>
        </div>
      </section>
    </article>
  </section>
);
export default NoticeBoardSection;
