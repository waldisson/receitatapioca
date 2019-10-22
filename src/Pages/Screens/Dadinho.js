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
              source={require('../../assets/img/tapioca/dadinho.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TORTA DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Fica muito gostoso com queijo e um molhinho a acompanhar.{' '}
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
            <Text>250 gramas de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>500 mililitros de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>300 gramas de queijo ralado</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>pimenta do reino;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            1 - Coloque o leite numa panela e leve ao fogo para ferver. Tempere
            a gosto com sal e pimenta.
          </Text>
          <Text style={styles.txtPreparo}>
            2 - Quando o leite estiver fervendo coloque a tapioca e mexa para
            misturar e hidratar. Quando virar uma pasta consistente desligue o
            fogo, coloque o queijo e mexa rápido para misturar.
          </Text>
          <Text style={styles.txtPreparo1}>
            3 – Coloque a massa numa assadeira generosamente untada com manteiga
            ou óleo. Espalhe e alise com uma espátula, cubra com plástico filme
            e faça alguns furos para a massa liberar o vapor. Reserve na
            geladeira por 2-3 horas ou até ficar nem firme.
          </Text>

          <Text style={styles.txtPreparo1}>
            4 – Desenforme a massa de tapioca, corte em quadrinhos e coloque
            numa assadeira com papel manteiga. Leve para assar no forno
            pré-aquecido a 200ºC até dourar (mais ou menos 15 minutos) e está
            pronto seu dadinho de tapioca com queijo parmesão!
          </Text>

          <Text style={styles.h2}>fonte: https://www.tudoreceitas.com</Text>

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
