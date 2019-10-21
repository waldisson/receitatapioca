//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableHighlight} from 'react-native';
import styles from '../Styles/stylesGeral';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const botao = () => {
    props.navigation.navigate('Omeletedetapioca');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={botao}>
        <Text>Doces</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
