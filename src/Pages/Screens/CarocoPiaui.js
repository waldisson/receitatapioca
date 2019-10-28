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
              source={require('../../assets/img/tapioca/piaui.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLO CAROÇO DO PIAUÍ </Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Resultado se parece bastante com pão de queijo, mas há duas
            diferenças básicas. A primeira está no ingrediente principal, que
            aqui não é polvilho, nem doce, nem azedo, e sim a tapioca granulada,
            aquela toda quebradinha usada também pra fazer cuscuz gelado.{' '}
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
            <Text>1 e ½ xícara (chá) de leite (360 ml);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 e ¾ de xícara (chá) tapioca granulada (250 g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 ovos;</Text>
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
            <Text>50 g de manteiga em temperatura ambiente;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>
              1 e ½ xícara (chá) de queijo meia cura ralado grosso (150 g);
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Óleo pra untar;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Aqueça o forno a 180ºC (médio-alto).
          </Text>

          <Text style={styles.txtPreparo1}>
            Unte bem com óleo uma assadeira média.
          </Text>

          <Text style={styles.txtPreparo1}>
            Coloque o leite e a tapioca numa tigela e deixe repousar por 5min,
            só mesmo até começar a amaciar. Não deixe mais tempo, pois a tapioca
            firma e a massa pesa.
          </Text>

          <Text style={styles.txtPreparo1}>
            Junte os ovos, o sal, a manteiga e misture até conseguir uma massa
            macia.
          </Text>

          <Text style={styles.txtPreparo1}>
            Acrescente o queijo e despeje na assadeira.
          </Text>

          <Text style={styles.txtPreparo1}>
            Asse por uns 35min, até que fique bem crescido, dourado e com a
            casca crocante.
          </Text>

          <Text style={styles.h2}>fonte: https://nacozinhadahelo.com.br/</Text>

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
