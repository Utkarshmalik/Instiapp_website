import React from 'react';
import {render} from 'react-dom';
const NoticeComponent = (props) => (
  <div className="row">
    <div>
      <div className="row">
        <div className="notice-card__icon"><i className={props.icon}></i></div>
        <h2 className="notice-card__heading">{props.title}</h2>
      </div>
      <p className="notice-card__text">{props.heading}</p>
    </div>
  </div>
);
export default NoticeComponent;
