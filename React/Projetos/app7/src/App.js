import React, { Component } from 'react';
import { View } from 'react-native';

import { CenaTopo, CenaResultado, CenaPainel } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.num1) + parseFloat(this.state.num2);
        break;

      case 'subtrair':
        resultado = parseFloat(this.state.num1) - parseFloat(this.state.num2);
        break;

      default:
        break;
    }
    this.setState({ resultado: resultado.toString() });
  }

  atualizaValor(nomeCampo, numero) {
    const obj = {};
    obj[nomeCampo] = numero;

    this.setState(obj);
  }

  atualizaOperacao(operacao) {
    this.setState({ operacao });
  }

  render() {
    return (
      <View>
        <CenaTopo />
        <CenaResultado
          resultado={this.state.resultado}
        />
        <CenaPainel
          num1={this.state.num1}
          num2={this.state.num2}
          operacao={this.state.operacao}
          calcular={this.calcular}
          atualizaValor={this.atualizaValor}
          atualizaOperacao={this.atualizaOperacao}
        />
      </View>
    );
  }
}
