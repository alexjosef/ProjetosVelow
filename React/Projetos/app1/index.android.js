import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const GeraNumeroAleatorio = () => {
  var numero_random = Math.random();

  numero_random = Math.floor(numero_random * 10);
  alert(numero_random);
}


const App = () => {

  return (
    <View>
      <Text>Gerador de números randômicos</Text>
      <Button
        title="Gerar número randômico"
        onPress={GeraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);
