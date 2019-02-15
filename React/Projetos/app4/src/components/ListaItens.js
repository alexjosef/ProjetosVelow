import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet
} from 'react-native';
import Axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);

    this.state = { ListaItens: [] };
  }

  componentWillMount() {
    Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ ListaItens: response.data }); })
      .catch(() => { console.log('Erro ao recuperar dados'); });
  }

  render() {
    return (
      <ScrollView style={styles.listaItens}>
        { this.state.ListaItens.map(item => (<Itens key={item.titulo} item={item} />)) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listaItens: {
    backgroundColor: '#DDD'
  }
});
