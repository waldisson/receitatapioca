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
import styles from '../../Styles/stylesGeral';

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
              source={require('../../assets/img/tapioca/cremedegaiabada.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>CREME C/ CALDA DE GOIABADA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>Rende 4 porções. </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>¼ xícara de de farinha de tapioca ;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>350 ml de leite vegetal ;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>200 ml de leite de coco;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>¼ xícara de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>Goiabada cortada em cubinhos;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Deixe a tapioca de molho no leite por 1 hora para hidratar e
            amolecer.
          </Text>
          <Text style={styles.txtPreparo1}>
            Leve a tapioca e o leite ao fogo baixo, junto com o leite de coco e
            o açúcar. Cozinhe, mexendo com uma colher de pau, até que a tapioca
            fique transparente e macia.
          </Text>
          <Text style={styles.txtPreparo1}>
            Retire do fogo e divida em tigelinhas ou copos pequenos. Leve ao
            refrigerador até o momento de servir.
          </Text>
          <Text style={styles.txtPreparo1}>
            Para fazer a calda de goiabada, coloque em uma panela pequena os
            cubinhos de goiabada junto com um pouco de água.
          </Text>
          <Text style={styles.txtPreparo1}>
            Cozinhe em fogo baixo, mexendo com uma colher de pau, até que a
            goiabada comece a amolecer. Se for necessário, junte mais água,
            sempre aos poucos.
          </Text>
          <Text style={styles.txtPreparo1}>
            Espere a calda esfriar por alguns minutos antes de usar para
            enfeitar as tigelinhas com o creme de tapioca.
          </Text>

          <Text style={styles.h2}>fonte: http://www.santolegume.com.br</Text>

          {/* <View style={styles.banner}>
           <AdMobBanner
            adSize="banner"
            adUnitID="ca-app-pub-5749178758370185/8976418652"
            
            />
            </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
