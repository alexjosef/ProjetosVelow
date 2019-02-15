import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

const imgRecrutador = require('../imgs/recrutador.png');

export default class CenaRecrutador extends Component {
  render() {
    return (
      <View style={styles.recrutador}>
        <View>
          <Image source={imgRecrutador} />
        </View>

        <View style={styles.detalheRecrutador}>
          <Text style={styles.txtTitulo}>{this.props.recrutador.descripton}</Text>
          <Text>Local: {this.props.recrutador.street}</Text>
          <Text>Número: {this.props.recrutador.number}</Text>
          <Text>Telefone: {this.props.recrutador.phone}</Text>
          <Text>ID: {this.props.recrutador.id}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  recrutador: {
    borderWidth: 0.5,
    borderColor: '#cae6df',
    backgroundColor: '#cae6df',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
    flexDirection: 'row'
  },
  detalheRecrutador: {
    marginLeft: 20
  },
  txtTitulo: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
