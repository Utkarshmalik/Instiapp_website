import React from 'react';
import {render} from 'react-dom';
const CustomerComponent = (props) => (
  <div className="column small-12 medium-expanded large-expanded align-spaced">
    <section className="role-app-card align-self-middle">
      <article className="role-app-card__content">
        <div className="customer-review-card__border">
          <figure>
            <img src={props.pic} className="role-app-card customer-review-card__image-height" />
          </figure>
          <div className="row align-spaced">
            <h3 className="margin-top-default">{props.title}</h3>
            <span>{props.role}</span>
          </div>
          <span className="customer-review-card__text">{props.heading}</span>
        </div>
      </article>
    </section>
  </div>
);
export default CustomerComponent;
