//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import styles from '../../Styles/stylesGeral';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Omelete</Text>
    </SafeAreaView>
  );
};
