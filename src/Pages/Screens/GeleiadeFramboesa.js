//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from 'react-native';
import styles from '../../Styles/stylesSobremesa';
import Admob from '../../components/Admob';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Sobremesas');
  };
  return (
    <SafeAreaView style={styles.sobremesas}>
      <ScrollView>
        <View>
          <TouchableOpacity
            underlayColor="#ccc"
            onPress={voltar}
            style={styles.btnBack}>
            <Image
              source={require('../../assets/icon/left-arrow.png')}
              style={styles.btnVoltar}
            />
          </TouchableOpacity>

          <View style={styles.container}>
            <Image
              resizeMode="cover"
              source={require('../../assets/img/tapioca/framboesa.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>CREME GELEIA DE FRAMBOESA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Facílimo de fazer e rende que é uma beleza! Dá para inventar mil
            coberturas: chocolate, coco queimado, geleia do sabor que você
            quiser, frutas picadas, etc…{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara de tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 litro de leite (usei semi desnatado);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 lata de leite condensado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>6 colheres sopa de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 vidro de leite de coco (200ml);</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 pacote de 100g de coco ralado;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Leve todos os ingredientes ao fogo médio mexendo sem parar.
          </Text>
          <Text style={styles.txtPreparo1}>
            Quando ferver abaixe o fogo e mexa por 20 minutos .
          </Text>
          <Text style={styles.txtPreparo1}>Desligue o fogo.</Text>
          <Text style={styles.txtPreparo1}>
            Nesse momento você terá um creme grosso e as “pérolas” de tapioca
            estarão grandes e transparentes.
          </Text>
          <Text style={styles.txtPreparo1}>
            Coloque em taças individuais ou em um recipiente único, espere
            esfriar e leve à geladeira por 3 horas.
          </Text>
          <Text style={styles.txtPreparo1}>
            Cubra com a geleia de sua preferência.
          </Text>

          <Text style={styles.h2}>fonte: https://panelaterapia.com</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
