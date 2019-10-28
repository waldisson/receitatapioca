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
              source={require('../../assets/img/tapioca/simples.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLO SIMPLES </Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            A Receita de Bolo de Tapioca Simples (Não Vai Ao Forno) é deliciosa
            e muito fácil de fazer.{' '}
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
            <Text>500g de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>800ml de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>½ xícara de chá de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 vidro pequeno de leite de coco (200ml);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 caixas de leite condensado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>100g de coco ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>100g de coco em flocos;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Em uma leiteira, esquente o leite.
          </Text>

          <Text style={styles.txtPreparo1}>
            Em uma tigela, misture a tapioca granulada, o leite quente, o açúcar
            e o coco ralado.
          </Text>

          <Text style={styles.txtPreparo1}>
            Deixe descansar por 10 minutos. Depois de 5 minutos, dê uma
            misturadinha e deixe descansar mais 5 minutos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Você vai perceber que a tapioca chupou todo o líquido e a mistura
            ficou mais sequinha.
          </Text>

          <Text style={styles.txtPreparo1}>
            Acrescente o leite de coco e 1 caixa de leite condensado e misture
            bem.
          </Text>

          <Text style={styles.txtPreparo1}>
            Despeje a mistura em uma forma de furo central untada com margarina.
          </Text>

          <Text style={styles.txtPreparo1}>
            Leve à geladeira por cerca de 2 horas antes de servir.
          </Text>

          <Text style={styles.txtPreparo1}>
            Retire da geladeira, desenforme e cubra com leite condensado e coco
            em flocos a gosto.
          </Text>

          <Text style={styles.txtPreparo1}>Sirva em seguida.</Text>

          <Text style={styles.h2}>fonte: https://receitatodahora.com.br/</Text>

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
