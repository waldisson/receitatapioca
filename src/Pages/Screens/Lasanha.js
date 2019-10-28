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
import styles from '../../Styles/stylesSalgada';
import Admob from '../../components/Admob';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Salgadas');
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
              source={require('../../assets/img/tapioca/crepioca.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>LASANHA DE CREPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Um belo prato para toda familia.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>3 ovos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>6 colheres de sopa de goma de tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 berinjela;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 cenoura;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 xícaras de molho de tomate;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>250 g de peito de frango cozido e desfiado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Queijo ralado pra finalizar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal e pimenta a gosto;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Misture o frango desfiado com o molho de tomate.
          </Text>
          <Text style={styles.txtPreparo1}>
            Corte a berinjela e a cenoura em fatias bem fininhas.
          </Text>
          <Text style={styles.txtPreparo1}>
            Bata os ovos com a goma de tapioca e uma pitada de sal.
          </Text>
          <Text style={styles.txtPreparo1}>
            Aqueça uma frigideira antiaderente e prepare 3 panquecas com a
            massa.
          </Text>
          <Text style={styles.txtPreparo1}>
            Em um refratário comece a montar a lasanha:
          </Text>
          <Text style={styles.txtPreparo1}>
            primeiro o molho, depois a massa, depois uma camada de berinjela,
            outra de cenoura (se quiser pode temperar a camada de legumes com
            sal e pimenta - e vá intercalando as camadas e finalize com um pouco
            que queijo ralado e algumas ervas, se quiser).
          </Text>
          <Text style={styles.txtPreparo1}>
            Leve ao forno já preaquecido no grau máximo até gratinar.
          </Text>

          <Text style={styles.h2}>fonte: https://www.taofeminino.com.br</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
