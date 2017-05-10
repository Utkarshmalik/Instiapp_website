import React from 'react';
import {render} from 'react-dom';
const HeaderComponent = (props) => (
  <section>
    <div className="background-row">
      <span dangerouslySetInnerHTML={{__html: props.name}} className="heading"></span>
      <img src={props.src} className="header-image"/>
    </div>
  </section>
);
export default HeaderComponent;
