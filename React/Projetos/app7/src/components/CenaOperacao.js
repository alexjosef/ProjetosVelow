import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class CenaOperacao extends Component {
  render() {
    return (
      <Picker
        style={styles.operacao}
        selectedValue={this.props.operacao}
        onValueChange={op => { this.props.atualizaOperacao(op); }}
      >

        <Picker.Item label='Somar' value='soma' />
        <Picker.Item label='Subtrair' value='subtrair' />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
});
