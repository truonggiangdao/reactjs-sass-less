import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';


it('MainLayout Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
    <BrowserRouter>
      <MainLayout match={{ path: '' }} />
    </BrowserRouter>
  ), div);
  ReactDOM.unmountComponentAtNode(div);
});
