import React from 'react';
import ReactDOM from 'react-dom';
import ListImage from './ListImage';

it('ListImage Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
