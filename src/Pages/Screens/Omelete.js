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
              source={require('../../assets/img/tapioca/omelete.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>OMELETE DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Use a criatividade e crie diversos recheios, carne, alho poro,
            queijos, salmão, calabresa, vegetais refogados e assim por diante.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 ovo;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (sopa) de tapioca pronta;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>½ colher (sopa) de queijo parmesão ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Azeite de oliva;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal e pimenta;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Em um recipiente quebre o ovo, bata juntamente com a colher de
            tapioca, adicione o queijo ralado, coloque sal e pimenta a gosto.
          </Text>
          <Text style={styles.txtPreparo1}>
            Aqueça uma frigideira pequena, unte levemente com azeite de oliva e
            despeje o ovo batido, deixe cozinhar de um lado, vire para cozinhar
            o outro lado, não cozinhe demais para que não fique ressecada.
          </Text>
          <Text style={styles.txtPreparo1}>
            Coloque o recheio e feche o omelete, deixe com o fogo baixo por mais
            um tempinho para derreter o queijo e aquecer um pouco os
            ingredientes e sirva.
          </Text>

          <Text style={styles.h2}>fonte: https://melepimenta.com</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
