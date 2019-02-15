import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>

        <StatusBar
          //hidden
          backgroundColor='#19D1C8'
        />

        <BarraNavegacao navigator={this.props.navigator} voltar corDeFundo='#19D1C8' />

        <View style={styles.cabecalho}>
          <Image source={detalheServicos} />
          <Text style={styles.txtCabecalho}>Nossos Serviços</Text>
        </View>

        <View style={styles.detalheServicos}>
          <Text style={styles.txtServicos}>Consultoria</Text>
          <Text style={styles.txtServicos}>Processos</Text>
          <Text style={styles.txtServicos}>Acompanhamento de projetos</Text>
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
    color: '#19D1C8'
  },
  detalheServicos: {
    marginTop: 20,
    padding: 20
  },
  txtServicos: {
    fontSize: 18
  }
});
