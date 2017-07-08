import React from 'react';
import {render} from 'react-dom';

const PageHeading = ({text1 ='', text2 ='', text3='', classes=''}) => (
  <h1 className={`heading page__title${classes}`}>
    <span className="heading__title_color_primary">{text1}</span>
    <span className="heading__title_color_alternative">{text2}</span>
    <span className="heading__title_color_primary">{text3}</span>
  </h1>
);
export default PageHeading;
