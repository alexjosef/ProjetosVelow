import React from 'react';
import { View } from 'react-native';

import CenaEntrada from './CenaEntrada';
import CenaOperacao from './CenaOperacao';
import CenaComando from './CenaComando';

const CenaPainel = props => (
  <View>
    <CenaEntrada
      num1={props.num1}
      num2={props.num2}
      atualizaValor={props.atualizaValor}
    />
    <CenaOperacao
      atualizaOperacao={props.atualizaOperacao}
      operacao={props.operacao}
    />

    <CenaComando acao={props.calcular} />
  </View>
);

export { CenaPainel };
