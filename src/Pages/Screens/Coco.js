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
              source={require('../../assets/img/tapioca/coco.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TAPIOCA c/ COCO</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            DICAS: - Se preferir, utilize coco seco ralado. Deixe-o hidratar
            previamente em água morna antes de rechear. - Ao fritar a tapioca,
            não deixe-a dourar pois pode ficar muito ressecada. Assim que a
            massa ficar unida ela deve ser virada. - Você pode incrementar o
            recheio da tapioca com banana ou queijo coalho ralado ou ainda fazer
            recheios salgados de sua preferência.{' '}
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
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>4 xícaras (chá) de polvilho doce;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 Leite MOÇA (lata ou caixinha);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>300 g de coco fresco ralado grosso;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Em um recipiente coloque o polvilho e regue-o aos poucos com 200ml
            de água, misturando bem e esfregando-o com as mãos até obter uma
            farinha granulada, solta e umedecida.
          </Text>

          <Text style={styles.txtPreparo1}>
            Leve uma frigideira antiaderente ao fogo e deixe aquecer.
          </Text>

          <Text style={styles.txtPreparo1}>
            Peneire o polvilho umedecido sobre a frigideira, cobrindo todos os
            espaços, formando uma camada uniforme semelhante a uma panqueca.
          </Text>

          <Text style={styles.txtPreparo1}>
            Espere a massa ficar unida e vire-a, deixando fritar rapidamente do
            outro lado. Recheie com LEITE MOÇA e distribua o coco ralado. Dobre
            ao meio e sirva a seguir.
          </Text>

          <Text style={styles.txtPreparo1}>
            Repita o processo até terminar a massa.
          </Text>

          <Text style={styles.h2}>
            fonte: https://www.receitasnestle.com.br/
          </Text>

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
