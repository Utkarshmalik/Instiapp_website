import React from 'react';
import {render} from 'react-dom';

const Card = (props) => (
  <div className="container">
    <img src={props.src} className="permissions-card-image"/>
    <div className="overlay">
      <ul>
        <li dangerouslySetInnerHTML={{__html: props.name}} className="overlay-text"></li>
        <li dangerouslySetInnerHTML={{__html: props.name}} className="overlay-text"></li>
        <li dangerouslySetInnerHTML={{__html: props.name}} className="overlay-text"></li>
      </ul>
    </div>
    <span dangerouslySetInnerHTML={{__html: props.title}} className="permissions-name-section"></span>
  </div>
);
const PermissionsSection = () => (
  <section>
    <div className="permissions-background-section">
      <h1 className="permissions-heading-section">Permissions and <span className="notice-color">role</span> based App</h1>
      <div className="permissions-section">
        <div className="permissions-border-section">
          <Card src="./public/images/p1.png" title= '<a href="/principal" style="color:tomato;">Principal App</a>' name= 'Can view any child complete record parent information, attendance record, circulars, examination report, etc' />
        </div>
        <div className="permissions-border-section">
          <Card src="./public/images/p2.png" title= '<a href="/teacher" style="color:tomato">Teacher App</a>' name= 'Can view any classwise data homework, classwork, timetable,etc' />
        </div>
        <div className="permissions-border-section">
          <Card src="./public/images/p3.png" title= '<a href="/parent" style="color:tomato">Parent App</a>' name= 'Can view any teacher or staff data attendance, leave, application, homework assigned, etc.' />
        </div>
      </div>
    </div>
  </section>
);
export default PermissionsSection;
