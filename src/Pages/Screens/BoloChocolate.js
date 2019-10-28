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
import styles from '../../Styles/stylesBolos';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Bolos');
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
              source={require('../../assets/img/tapioca/tapiocaChocolate.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLO c/ COBERTURA DE CHOLATE </Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Bolo cremoso de tapioca com calda de chocolate, que além de ficar
            uma delícia, é muito fácil e prático de fazer!{' '}
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
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 vidro de leite de coco (200ml);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 e 1/2 xícaras (chá) de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 lata de leite condensado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 xícaras (chá) de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200g de coco ralado em flocos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 xícara (chá) de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (chá) de sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Óleo para untar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Coco ralado em flocos para polvilhar;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Calda:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200g de chocolate meio amargo derretido;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 caixa de creme de leite (100g);</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Leve uma panela ao fogo médio com o leite de coco, o leite e o leite
            condensando até ferver.
          </Text>

          <Text style={styles.txtPreparo1}>
            Em uma tigela, misture a tapioca, o coco, o açúcar e o sal.
          </Text>

          <Text style={styles.txtPreparo1}>
            Junte a mistura de leite quente, aos poucos, mexendo até incorporar.
          </Text>

          <Text style={styles.txtPreparo1}>
            Transfira para uma fôrma de buraco no meio de 24cm de diâmetro
            untada, cubra e leve à geladeira por 2 horas.
          </Text>

          <Text style={styles.txtPreparo1}>
            Retire, desenforme sobre um prato e regue com os ingredientes da
            calda misturados.
          </Text>

          <Text style={styles.txtPreparo1}>Polvilhe com coco e sirva.</Text>

          <Text style={styles.h2}>fonte: https://guiadacozinha.com.br/</Text>

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
