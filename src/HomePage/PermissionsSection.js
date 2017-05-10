import React from 'react';
import {render} from 'react-dom';

const Card = (props) => (
  <div>
    <img src={props.src} className="permissions-card-image"/>
    <span dangerouslySetInnerHTML={{__html: props.name}} className="permissions-name-section"></span>
  </div>
);
const PermissionsSection = () => (
  <section>
    <div className="permissions-background-section">
      <h1 className="permissions-heading-section">Permissions and <span className="notice-color">role</span> based App</h1>
      <div className="permissions-section">
        <div className="permissions-border-section">
          <Card src="./public/images/p1.png" name='<a href="/principal" style="color:tomato">Principal App</a>' />
        </div>
        <div className="permissions-border-section">
          <Card src="./public/images/p2.png" name='<a href="/teacher" style="color:tomato">Teacher App</a>' />
        </div>
        <div className="permissions-border-section">
          <Card src="./public/images/p3.png" name='<a href="/parent" style="color:tomato">Parent App</a>' />
        </div>
      </div>
    </div>
  </section>
);
export default PermissionsSection;
