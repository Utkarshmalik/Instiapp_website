import React from 'react';
import {render} from 'react-dom';
const HeaderComponent = (props) => (
  <section className="section row section-header-component">
    <div className="align-center">
      <h1 className="heading page__title">
        <span className="heading__title_color_primary">{props.text1}</span>
        <span className="heading__title_color_alternative">{props.text2}</span>
      </h1>
    </div>
    <img src={props.src} className="section-app-bg__image"/>
  </section>
);
export default HeaderComponent;
