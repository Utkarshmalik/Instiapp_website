/***Component for Home Page Headings***/
import React from 'react';
import {render} from 'react-dom';

const SectionHeading = ({text1 ='', text2 ='', text3=''}) => (
  <header className="section__header align-center">
    <h2 className="heading section__title">
      <span className="heading__title_color_primary">{text1}</span>
      <span className="heading__title_color_alternative">{text2}</span>
      <span className="heading__title_color_primary">{text3}</span>
    </h2>
  </header>
);
export default SectionHeading;
