import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';

const imgGafanhoto = require('../imgs/gafanhoto1.png');

export default class CenaGafanhoto extends Component {
  render() {
    return (
      <ScrollView style={styles.telaGafanhoto}>
        <View>
          <Image style={styles.fotoGafanhoto} source={imgGafanhoto} />
        </View>
        <View>
          <Text style={styles.txtGafanhoto}>Nome: {this.props.gafanhoto.description}</Text>
          <Text style={styles.txtGafanhoto}>Idade: {this.props.gafanhoto.age}</Text>
          <Text style={styles.txtGafanhoto}>Grupo: ID{this.props.gafanhoto.group_id}</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  telaGafanhoto: {
    borderWidth: 0.5,
    borderColor: '#cae6df',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 5,
    flexDirection: 'row'
  },
  fotoGafanhoto: {
    tintColor: '#cae6df'
  },
  txtGafanhoto: {
    fontSize: 15
  }
});
