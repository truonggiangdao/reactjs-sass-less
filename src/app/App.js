import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from './containers/Login';
import MainLayout from './containers/MainLayout';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={MainLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
