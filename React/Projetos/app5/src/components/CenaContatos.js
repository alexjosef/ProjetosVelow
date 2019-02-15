import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>

        <StatusBar
          //hidden
          backgroundColor='#61BD8C'
        />

        <BarraNavegacao navigator={this.props.navigator} voltar corDeFundo='#61BD8C' />

        <View style={styles.cabecalho}>
          <Image source={detalheContato} />
          <Text style={styles.txtCabecalho}>Contatos</Text>
        </View>

        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>TEL: (11)1234-1234</Text>
          <Text style={styles.txtContatos}>CEL: (11)91234-1234</Text>
          <Text style={styles.txtContatos}>E-MAIL: contato@atmconsultoria.com</Text>
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
    color: '#61BD8C'
  },
  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContatos: {
    fontSize: 18
  }
});
