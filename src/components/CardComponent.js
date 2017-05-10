import React from 'react';
import {render} from 'react-dom';
const CardComponent = (props) => (
  <div className="border-section">
    <span dangerouslySetInnerHTML={{__html: props.heading}} className="permissions-card-texts"></span>
    <img src={props.pic} className="permissions-card-images"/>
  </div>
);
export default CardComponent;
