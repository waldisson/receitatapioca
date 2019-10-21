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
              source={require('../../assets/img/tapioca/geladofrutas.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>GELADO COM FRUTAS</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            30 minutos de preparo e rende 8 porções.{' '}
          </Text>

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
            <Text>200 g de tapioca em farinha;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 1/2 litro de água;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>250 g de açúcar para o gelado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>100 g de açúcar para a calda;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>200 ml de leite de coco para o gelado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>200 ml de leite de coco para a calda;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 pitada de sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>50 ml de água;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>Frutas a escolher como damasco, lichia, coco etc;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo}>
            Junte em uma panela a tapioca com a água.
          </Text>
          <Text style={styles.txtPreparo}>
            Cozinhe até ficar transparente e encorpada.
          </Text>
          <Text style={styles.txtPreparo1}>Mexa sempre.</Text>
          <Text style={styles.txtPreparo1}>
            Junte o açúcar e o leite de coco e a pitada de sal.
          </Text>
          <Text style={styles.txtPreparo1}>
            Continue mexendo por mais cinco minutos.
          </Text>
          <Text style={styles.txtPreparo1}>
            Coloque em taças individuais e leve a geladeira.
          </Text>

          <Text style={styles.h1}>Modo de preparo da Calda</Text>

          <Text style={styles.txtPreparo1}>
            Leve os 100 g de açúcar, 50 ml de água e os 200 ml de leite de coco
            ao fogo, forma uma calda com uns cinco minutos de fervura.
          </Text>
          <Text style={styles.txtPreparo1}>Leve à geladeira.</Text>
          <Text style={styles.txtPreparo1}>
            Na hora de servir coloque um pouco da calda em cada taça por cima da
            tapioca e por cima da calda coloque um pouco de coco fresco ralado
            grosso com a fruta picada que escolheu (eu escolhi damasco).
          </Text>

          <Text style={styles.h2}>fonte:https://www.tudogostoso.com.br</Text>

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
