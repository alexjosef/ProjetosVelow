import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import CenaGafanhoto from './CenaGafanhoto';

export default class CenaGafanhotos extends Component {

  constructor(props) {
    super(props);

    this.state = { listaGafanhotos: [] };
  }

  componentWillMount() {
   axios.get('/grasshoppers.json')
    .then(response => { this.setState({ listaGafanhotos: response.data.grasshoppers }); })
    .catch(() => { console.log('Erro ao recuperar dados'); });
  }

  render() {
    return (
      <ScrollView style={styles.tela}>
        { this.state.listaGafanhotos.map(gafanhoto =>
          (<CenaGafanhoto key={gafanhoto.id} gafanhoto={gafanhoto} />)) }
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
