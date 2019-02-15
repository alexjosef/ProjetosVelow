import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput
      style={styles.txtInput}
      placeholder='Resultado'
      Editable={false}
      value={props.resultado}
    />
  </View>
);

const styles = StyleSheet.create({
  txtInput: {
    height: 100,
    fontSize: 30
  }
});
