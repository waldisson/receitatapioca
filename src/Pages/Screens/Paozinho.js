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
              source={require('../../assets/img/tapioca/paozinhodetapioca.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>PÃOZINHO DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            O parmesão aparece 2 vezes na receita porque vai dentro da massa e
            depois as bolinhas também são passadas no queijo antes de assar. Mas
            para frente ficará claro{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 ½ xícara (chá) de leite (360 ml);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>¼ xícara (chá) de óleo (60 ml);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>sal a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>¾ xícara (chá) de tapioca granulada (150 g);</Text>
          </View>

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
            <Text>½ xícara (chá) de queijo parmesão ralado (50 g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>½ xícara (chá) de polvilho doce (60 g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de queijo parmesão ralado (100 g);</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Leve uma panela ao fogo médio com 1 ½ xícara (chá) de leite, ¼
            xícara (chá) de óleo e sal a gosto e mexa até ferver. Reserve.
          </Text>
          <Text style={styles.txtPreparo1}>
            Misture numa tigela ¾ xícara (chá) de tapioca granulada e o leite
            fervente da panela (feito acima) e deixe esfriar. Mexa a cada 5
            minutos com o batedor de arame para ajudar a engrossar mais rápido.
          </Text>
          <Text style={styles.txtPreparo1}>
            Depois da mistura fria, que virará uma espécie de goma, acrescente 1
            ovo, ½ xícara (chá) de queijo parmesão ralado e ½ xícara (chá) de
            polvilho doce e misture bem. Com as mãos, pegue pequenas porções de
            massa, faça bolinhas e passe em 1 xícara (chá) de queijo parmesão
            ralado (não passei no queijo, assei direto)
          </Text>
          <Text style={styles.txtPreparo1}>
            Coloque as bolinhas numa assadeira untada com manteiga e leve ao
            forno médio pré- aquecido a 180ºC por +/- 30 minutos ou até dourar.
            Retire do forno e sirva em seguida.
          </Text>

          <Text style={styles.h2}>fonte: https://panelaterapia.com</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
