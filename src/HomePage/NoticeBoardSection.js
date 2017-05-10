import React from 'react';
import {render} from 'react-dom';
const NoticeBoardSection = () => (
  <section>
    <div className="notice-board-section">
      <img src="./public/images/noticeboard-image.gif" className="notice-board-image" />
      <div className="notice-board-content">
        <h1 className="notice-board-heading">Digital <span className="notice-color">Notice</span> Board</h1>
        <div className="notice-board-paragraph">
          Notice board is primary thing in any school and institution and
          managing various notices day to day is a tedious procces so the need for such a notice board arises.This
          project deals with Advance notice board.
          Create, Manage, Update and Display the information easily on
          the Digital notice board.
        </div>
      </div>
    </div>
  </section>
);
export default NoticeBoardSection;
