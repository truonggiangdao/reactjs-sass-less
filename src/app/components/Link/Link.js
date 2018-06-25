import React from 'react';
import './Link.scss';

const Link = props => (
  <div className="">
    <a className="link-text" text={props.text} href="a">{props.text}</a>
  </div>
);

export default Link;
