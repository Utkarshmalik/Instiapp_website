import React from 'react';
import {render} from 'react-dom';
const PushNotificationSection = () => (
  <section>
    <div className="push-section">
      <div className="push-border">
        <img src="./public/images/push1.png" className="push-image" />
        <h2 className="push-text">Push Notification</h2>
      </div>
      <div className="push-content">
        <img src="./public/images/push2.png" className="push-image" />
        <h2 className="push-heading">GPS</h2>
      </div>
    </div>
  </section>
);
export default PushNotificationSection;
