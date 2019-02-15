import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import axios from 'axios';

import Rotas from './src/Rotas';

export default class gafanhotoApp extends Component {

  componentWillMount() {
    axios.defaults.baseURL = 'http://10.1.1.233:3000';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('gafanhotoApp', () => gafanhotoApp);
