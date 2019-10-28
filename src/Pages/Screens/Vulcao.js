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
              source={require('../../assets/img/tapioca/vulcao.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLO VULCÃO </Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Oi pessoal, tudo bem com vocês? Acordou pensando em fazer bolo? Esse
            não vai ao forno! Super fácil. Hoje eu faço um bolo de tapioca no
            estilo bolo vulcão com recheio de coco.{' '}
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
            <Text>400 gramas de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>700 ml de leite integral;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200 ml de leite de coco;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>100 gramas de coco ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1.1/2 xícara de chá de açúcar cristal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 caixa de leite condensado (caixa com 395 gramas).</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Recheio de Coco:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 caixas de leite condensado (caixa com 395 gramas);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200 ml de leite de coco;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher de sopa de manteiga/margarina;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 gemas de ovos;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Bolo:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Coloque todos os ingredientes em um bowl (tigela) misturando sempre
            no intervalo entre acrescentar um ingrediente e o outro.
          </Text>

          <Text style={styles.txtPreparo1}>
            Deixe descansar por 20 minutos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Despeje a mistura em uma fôrma com furo no meio levemente untada
            apenas com manteiga/margarina.
          </Text>

          <Text style={styles.txtPreparo1}>
            Leve para geladeira por 6 horas coberto com plastico filme! o ideal
            é que ele esteja bem firme ao toque, então teste antes de retirar.
          </Text>
          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Recheio de Coco:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Coloque todos os ingredientes em uma panela e misture bem. Leve em
            fogo médio mexendo sempre para não queimar.
          </Text>

          <Text style={styles.txtPreparo1}>
            Quando ganhar um pouco de consistência e começar fazer aquelas
            borbulhas mais grossas marque um minuto, continue mexendo e retire
            do fogo!
          </Text>

          <Text style={styles.txtPreparo1}>
            Despeje em um recipiente e cubra com plastico filme em contato até
            esfriar.
          </Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Montagem:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Com o bolo firme e desenformado despeje todo o recheio no sempre do
            furo do bolo até escorres igual um vulcão. Para decorar você pode
            jogar por cima um pouco de coco ralado.
          </Text>

          <Text style={styles.txtPreparo1}>Polvilhe com coco e sirva.</Text>

          <Text style={styles.h2}>
            fonte: http://www.gabriellfreitass.com.br/
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
