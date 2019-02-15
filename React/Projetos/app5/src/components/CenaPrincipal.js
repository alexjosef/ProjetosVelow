import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <StatusBar
          //hidden
          backgroundColor='#CCC'
        />

        <BarraNavegacao />

        <View style={styles.imgLogo}>
          <Image source={logo} />
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#B9C941'}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigator.push({ id: 'clientes' });
              }}
            >
              <Image style={styles.imgsMenu} source={menuCliente} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#61BD8C'}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigator.push({ id: 'contatos' });
              }}
            >
              <Image style={styles.imgsMenu} source={menuContato} />
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
            <TouchableHighlight
              underlayColor={'#EC7148'}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigator.push({ id: 'empresa' });
              }}
            >
              <Image style={styles.imgsMenu} source={menuEmpresa} />
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'#19D1C8'}
              activeOpacity={0.5}
              onPress={() => {
                this.props.navigator.push({ id: 'servicos' });
              }}
            >
              <Image style={styles.imgsMenu} source={menuServico} />
            </TouchableHighlight>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgLogo: {
    alignItems: 'center',
    margin: 20
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgsMenu: {
    margin: 20
  }
});
