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
import styles from '../../Styles/stylesDoces';
import Admob from '../../components/Admob';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Doces');
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
              source={require('../../assets/img/tapioca/Manjar.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>MANJAR DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Esta receita e de um delicioso manjar bem fácil de ser preparado.{' '}
            Dica - Se quiser, adicione uma xícara de vinho antes de levar a
            panela ao fogo .{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 embalagem de 200 ml de leite de coco Sococo;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 embalagem de 100 gramas de coco ralado Sococo;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 e meia xícaras de chá de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 pitada de sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara de chá de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>
              125 gramas de tapioca com os grãos finos hidratada em 2 xícaras de
              chá de água e escorrido.;
            </Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Coloque numa panela o leite, o leite de coco Sococo, o sal e o
            açúcar e deixe ferver.
          </Text>
          <Text style={styles.txtPreparo1}>
            Junte o coco ralado Sococo e a tapioca hidratada e escorrida e
            cozinhe por mais 20 minutos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Despeje o manjar em forma de sua preferência. Deixe esfriar e leve à
            geladeira coberto com filme plástico.
          </Text>

          <Text style={styles.txtPreparo1}>
            Sirva gelado, desenformado e decorado com a calda de sua
            preferência.
          </Text>

          <Text style={styles.h1}>Calda de frutas vermelhas</Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Ingredientes:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            1 xícara de chá de frutas vermelhas picadas (morango, amora, cereja
            etc) Meia xícara de chá de açúcar cristal.
          </Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Preparo:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Amasse as frutas para que fiquem pedaços. Junte o açúcar e leve ao
            fogo. Deixe ferver e mexa bastante até ganhar a consistência
            desejada (cerca de 10 minutos).
          </Text>

          <Text style={styles.h2}>fonte: http://www.sabordacidade.com.br/</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
