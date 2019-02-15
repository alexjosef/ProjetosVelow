import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import CenaPrincipal from './components/CenaPrincipal';
import CenaRecrutadores from './components/CenaRecrutadores';
import CenaGrupos from './components/CenaGrupos';
import CenaGafanhotos from './components/CenaGafanhotos';

const Rotas = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='principal' component={CenaPrincipal} initil title='Projeto Gafanhoto' />
    <Scene key='recrutadores' component={CenaRecrutadores} title='Recrutadores' />
    <Scene key='grupos' component={CenaGrupos} title='Grupos' />
    <Scene key='gafanhotos' component={CenaGafanhotos} title='Gafanhotos' />
  </Router>
);

export default Rotas;
