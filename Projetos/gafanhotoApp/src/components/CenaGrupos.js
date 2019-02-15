import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import CenaGrupo from './CenaGrupo';

export default class CenaGrupos extends Component {

  constructor(props) {
    super(props);

    this.state = { listaGrupos: [] };
  }

  componentWillMount() {
   axios.get('/groups.json')
    .then(response => { this.setState({ listaGrupos: response.data.groups }); })
    .catch(() => { console.log('Erro ao recuperar dados'); });
  }

  render() {
    return (
      <ScrollView style={styles.tela}>
        { this.state.listaGrupos.map(grupo => (<CenaGrupo key={grupo.id} grupo={grupo} />)) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#0a674f'
  }
});
