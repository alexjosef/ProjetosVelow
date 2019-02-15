import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class CenaGrupo extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <ScrollView style={styles.detalhesGrupo}>
          <Text style={styles.txtTitulo}>{this.props.grupo.description}</Text>
          <Text style={styles.txtGrupo}>Descrição: {this.props.grupo.comment}</Text>
          <Text style={styles.txtGrupo}>Qualidade: {this.props.grupo.quality}</Text>
          <Text style={styles.txtGrupo}>Aprender: {this.props.grupo.learn}</Text>
          <Text style={styles.txtGrupo}>Grupo ID: {this.props.grupo.id}</Text>
        </ScrollView>

        <View style={styles.botaoGafanhoto}>
        <Button
          onPress={() => { Actions.gafanhotos(); }}
          title="Gafanhotos"
          color="#cae6df"
        />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  tela: {
    borderWidth: 0.5,
    borderColor: '#cae6df',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    flexDirection: 'row'
  },
  txtTitulo: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  txtGrupo: {
    fontSize: 15
  }
});
