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
              source={require('../../assets/img/tapioca/docinhodefesta.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>DOCINHO DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            O interessante é que rende muitos docinhos. Uma receita rende em
            média 40 docinhos de 18g cada.
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
            <Text>1 lata de leite condensado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 vidro de leite de coco;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 xícara de tapioca(Escolha a mais fina);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher sopa de margarina;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>25g de coco ralado seco;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Em uma vasilha, misture a tapioca com o leite de coco e o leite
            condensado. Deixe essa mistura descansando por 1:30h. A tapioca vai
            absorver um pouco do leite.
          </Text>
          <Text style={styles.txtPreparo1}>
            Após aguardar esse tempo, leve a mistura ao fogo com o coco e a
            margarina.
          </Text>
          <Text style={styles.txtPreparo1}>
            Mexa sem parar até o ponto de enrolar. Coloque em um prato para
            esfriar.
          </Text>
          <Text style={styles.txtPreparo1}>
            Você vai se assustar, pois esse docinho atinge o ponto rapidamente .
          </Text>
          <Text style={styles.txtPreparo1}>
            Enrole no formato de bolinhas e passe no coco ralado seco.
          </Text>
          <Text style={styles.txtPreparo1}>
            Faça esse docinho com no máximo 1 dia de antecedência da festa para
            mantê-lo fresquinho.
          </Text>

          <Text style={styles.h2}>fonte: http://www.maurorebelo.com.br</Text>

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
