import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const imgRecrutadores = require('../imgs/recrutadores1.png');
const imgGrupos = require('../imgs/grupos1.png');
const imgLogo = require('../imgs/grasshopper.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={styles.tela}>

        <View style={styles.logo}>
          <Image style={styles.foto} source={imgLogo} />
        </View>

        <View style={styles.botoes}>
          <TouchableHighlight onPress={() => { Actions.recrutadores(); }}>
            <Image style={styles.imgBotoes} source={imgRecrutadores} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { Actions.recrutadores(); }}>
            <Text style={styles.txtRecrutadores}>Recrutadores</Text>
          </TouchableHighlight>

        </View>

        <View style={styles.botoes}>
          <TouchableHighlight onPress={() => { Actions.grupos(); }}>
            <Image style={styles.imgBotoes} source={imgGrupos} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => { Actions.grupos(); }}>
            <Text style={styles.txtGrupos}>Grupos</Text>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#0a674f'
  },
  foto: {
    width: 250,
    height: 250,
    tintColor: '#cae6df'
  },
  logo: {
    alignItems: 'center'
  },
  botoes: {
    alignItems: 'center',
    marginTop: 10,
  },
  imgBotoes: {
    tintColor: '#cae6df'
  },
  txtRecrutadores: {
    fontSize: 15,
    color: '#cae6df'
  },
  txtGrupos: {
    fontSize: 15,
    color: '#cae6df'
  }
});
