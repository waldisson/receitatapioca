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
              source={require('../../assets/img/tapioca/pizza.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>PIZZA DE FRIGIDEIRA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Opção de recheio a seu gosto: Queijo + tomate Queijo + frango
            desfiado Queijo + lombo Atum + brócolis Peite de peru + queijo
            Frango + tomate seco{' '}
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
            <Text>2 claras (ou um ovo grande);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) de tapioca (20g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (sopa) de azeite (ou manteiga);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (sopa) de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>Sal a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>Temperos opcionais;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Pré-aqueça o forno a 200 graus.
          </Text>
          <Text style={styles.txtPreparo1}>
            Bata ligeiramente as claras de ovo. Dica: Você pode optar por
            colocar apenas uma clara, eu prefiro colocar as duas para me dar
            mais saciedade. Isso é uma ótima estrategia para quem deseja
            emagrecer.
          </Text>
          <Text style={styles.txtPreparo1}>
            Adicione a tapioca, o azeite e o leite. Misture tudo até ficar
            homogêneo. Dica: Se desejar uma massa de pizza crocante, adicione
            mais 2 colheres rasas de tapioca.
          </Text>
          <Text style={styles.txtPreparo1}>
            Adicione o sal e os temperos se desejar, eu gosto de adicionar
            salsinha desidratada.
          </Text>

          <Text style={styles.h2}>fonte: https://receitanatureba.com</Text>

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
