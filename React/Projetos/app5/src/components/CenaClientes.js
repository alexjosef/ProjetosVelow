import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          //hidden
          backgroundColor='#B9C941'
        />

        <BarraNavegacao navigator={this.props.navigator} voltar corDeFundo='#B9C941' />

        <View style={styles.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={styles.txtCabecalho}>Nossos clientes</Text>
        </View>

        <View style={styles.detalheClientes}>
          <Image source={cliente1} />
          <Text style={styles.txtCliente}>Lorem ipsum dolorem</Text>
        </View>

        <View style={styles.detalheClientes}>
          <Image source={cliente2} />
          <Text style={styles.txtCliente}>Lorem ipsum dolorem</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtCabecalho: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 10,
    color: '#B9C941'
  },
  detalheClientes: {
    margin: 25
  },
  txtCliente: {
    marginLeft: 20,
    fontSize: 15
  }
});
