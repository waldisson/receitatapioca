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
              source={require('../../assets/img/tapioca/bolinhoEstudante.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLINHO ESTUDANTE</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Se estiver usando coco ralado seco, hidrate por 1-2 minutos com um
            pouco de água filtrada.{' '}
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
            <Text>3 xícaras de farinha de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1½ xícaras de água morna;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1½ xícaras de leite de coco;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara de açúcar cristal ou refinado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>½ xícara de coco ralado (de preferência fresco);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher de café de sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>açúcar e canela para polvilhar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>óleo para fritar;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            O primeiro passo desta receita de bolinho de estudante passo a passo
            é misturar os primeiros 6 ingredientes em uma tigela. O resultado
            será uma mistura mole que deverá repousar por 30-40 minutos, para
            que a tapioca absorva os líquidos.
          </Text>
          <Text style={styles.txtPreparo1}>
            Após esse tempo, pegue porções da massa e modele em forma de quibes
            ou croquetes de tamanho médio.
          </Text>
          <Text style={styles.txtPreparo1}>
            Esquente o óleo e frite os bolinhos de estudante até que fiquem
            douradinhos. Retire para papel absorvente, para que sequem um pouco,
            e depois mergulhe em uma tigela com o açúcar e canela misturados.
          </Text>
          <Text style={styles.txtPreparo1}>
            Após o passo anterior, o bolinho estudante de tapioca estará pronto
            a servir. Aprecie enquanto quente e diga-nos o que achou!
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
