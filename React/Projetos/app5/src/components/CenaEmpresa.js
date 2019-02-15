import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>

        <StatusBar
          //hidden
          backgroundColor='#EC7148'
        />

        <BarraNavegacao navigator={this.props.navigator} voltar corDeFundo='#EC7148' />

        <View style={styles.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={styles.txtCabecalho}>A Empresa</Text>
        </View>

        <View style={styles.detalheEmpresa}>
          <Text style={styles.txtEmpresa}>Lorem ipsum dolorem lorem ipsum dolorem</Text>
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
    color: '#EC7148'
  },
  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
