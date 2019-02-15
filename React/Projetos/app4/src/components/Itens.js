import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class ListaItens extends Component {
  render() {
    return (
      <View style={styles.painelItem}>
        <View style={styles.fotoItem}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.tituloItem}>{this.props.item.titulo}</Text>
          <Text style={styles.valorItem}>R${this.props.item.valor}</Text>
          <Text>Local: {this.props.item.local_anuncio}</Text>
          <Text>Publicado: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  painelItem: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row'
  },
  fotoItem: {
    width: 102,
    height: 102
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  tituloItem: {
    fontSize: 16,
    color: 'darkblue',
    marginBottom: 5
  },
  valorItem: {
    fontSize: 15,
    fontWeight: 'bold'
  }
});
