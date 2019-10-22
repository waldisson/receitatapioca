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
              source={require('../../assets/img/tapioca/carnedosol.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TAPIOCA DE CARNE DO SOL</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Ponha uma tapioca em cada prato e recheie com duas colheres (sopa)
            de queijo e uma porção de carne-de-sol. Dobre e sirva.{' '}
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
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>500g de goma de tapioca hidratada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>4 xícaras de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 kg de carne-de-sol;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>250 g de queijo mussarela ralado grosso;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>10 rodelas de tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>4 cebolas cortadas em rodelas;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 ramo de cebolinha verde picada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal a gosto;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Para prepara um tapioca de carne de sol, a carne de sol precisa ser
            preparada na noite anterior, retire a gordura e corte-a em cubos
            grandes. Ponha de molho em bastante água, trocando-a pelo menos duas
            vezes para dessalgar e o sal não comprometer a sua tapioca. Escorra.
          </Text>
          <Text style={styles.txtPreparo1}>
            Numa panela média, ponha a carne dessalgada, cubra com água e deixe
            ferver por dez minutos. Escorra e acrescente o leite. Cozinhe por 30
            minutos ou até ficar macia. Escorra, deixe esfriar e desfie. Use um
            garfo para ajudar no processo e reserve.
          </Text>
          <Text style={styles.txtPreparo1}>
            Numa panela, refogue a cebola em metade da manteiga até ficar macia
            e junte a carne. Retire do fogo, acrescente a cebolinha, sal e mexa.
          </Text>

          <Text style={styles.txtPreparo1}>
            Coloque a manteiga restante numa frigideira média e leve ao fogo até
            derreter. Junte a mussarela e deixe desmanchar.
          </Text>

          <Text style={styles.h2}>
            fonte: https://www.santamalialimentos.com.br
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
