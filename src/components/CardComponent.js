import React from 'react';
import {render} from 'react-dom';
const CardComponent = (props) => (
  <div className="column small-12 medium-expanded large-expanded align-spaced shrink">
    <section className="role-card role-card__border align-self-middle">
      <div className="row align-spaced">
        <div className="column">
          <article className="row-card__heading-border shrink">
            <figure>
              <img src={props.pic} className="role-card__image"/>
            </figure>
            <h3 className="text-center role-card__heading">{props.title}</h3>
          </article>
        </div>
        <ul className="role-card__text">
          <li>{props.heading1}</li>
          <li>{props.heading2}</li>
          <li>{props.heading3}</li>
          <li>{props.heading4}</li>
          <li>{props.heading5}</li>
        </ul>
      </div>
    </section>
  </div>
);
export default CardComponent;
