import React, { Component } from 'react';
import { Text } from 'react-native';

export default class CenaSobreJogo extends Component {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: '#61BD8C' }}>
        Aqui podem ser informadas informações sobre o seu jogo!
      </Text>
    );
  }
}
