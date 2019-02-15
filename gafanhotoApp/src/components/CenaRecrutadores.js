import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import CenaRecrutador from './CenaRecrutador';

export default class CenaRecrutadores extends Component {

  constructor(props) {
    super(props);

    this.state = { listaRecrutadores: [] };
  }

  componentWillMount() {
   axios.get('/recruiters.json')
    .then(response => { this.setState({ listaRecrutadores: response.data.recruiters }); })
    .catch(() => { console.log('Erro ao recuperar dados'); });
  }

  render() {
    return (
      <ScrollView style={styles.tela}>
        { this.state.listaRecrutadores.map(recrutador =>
           (<CenaRecrutador key={recrutador.id} recrutador={recrutador} />)) }
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
