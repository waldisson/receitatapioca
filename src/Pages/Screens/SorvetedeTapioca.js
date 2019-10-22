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
              source={require('../../assets/img/tapioca/SORVETE-DE-TAPIOCA.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>SORVETE DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            180 minutos de preparo e rende 15 porções.{' '}
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
            <Text>2 1/2 xícaras (chá) de tapioca em grãos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 1/2 lata de leite condensado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 litro de leite integral;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de coco ralado de preferência</Text>
          </View>
          <Text style={{marginLeft: 35}}> fresco;</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (sopa) de essência de baunilha;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo}>
            Ferva o leite e acrescente a tapioca.
          </Text>
          <Text style={styles.txtPreparo}>
            Deixe por 30 minutos, a tapioca irá dobrar de tamanho.
          </Text>
          <Text style={styles.txtPreparo1}>
            Coloque a leite condensado e o açúcar, a essência de baunilha e o
            coco ralado, bata na batedeira por aproximadamente 40 minutos.
          </Text>
          <Text style={styles.txtPreparo1}>
            Retire e bata novamente por uns 20 minutos.
          </Text>
          <Text style={styles.txtPreparo1}>Não bata no liquidificador.</Text>
          <Text style={styles.txtPreparo1}>
            Faça esse processo de bater na batedeira 3 vezes.
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
