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
              source={require('../../assets/img/tapioca/tapioca_doce_leite.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>DOCE DE LEITE</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Rendimento: 6 porções Tempo de preparo: 45 minutos (+ tempo de
            hidratação).{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

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
              Massa:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>
              1 e ½ xícara (chá) de goma de tapioca seco ou polvilho doce (200
              g);
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>¾ xícara (chá) de água (180 g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 pitadas de sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>3 cravos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Margarina Primor todo dia para untar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Recheio:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>6 colheres (sopa) de doce de leite (120 g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Acompanhamento e decoração:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>12 pequenas fatias de queijo coalho (120 g);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Coco fresco ralado a gosto;</Text>
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
              Massa:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Em uma vasilha coloque a goma e, aos poucos, umedeça com a água.
          </Text>

          <Text style={styles.txtPreparo1}>
            Deixe descansar por cerca de 30 minutos ou até que a água tenha sido
            totalmente absorvida.
          </Text>

          <Text style={styles.txtPreparo1}>
            Passe a massa pela peneira, adicione uma pitada de sal e misture.
          </Text>

          <Text style={styles.txtPreparo1}>
            Aqueça uma frigideira de tamanho médio, pincele o fundo com
            margarina Primor todo dia, polvilhe uma pequena quantidade de massa,
            com a ajuda de uma peneira com malha média, até forrar o fundo por
            completo.
          </Text>

          <Text style={styles.txtPreparo1}>
            Em fogo médio, deixe cozinhar até que as beiradas comecem a se
            desprender.
          </Text>

          <Text style={styles.txtPreparo1}>
            Vire com uma espátula, passe mais um pouco de margarina Primor todo
            dia por cima, retire e reserve.
          </Text>

          <Text style={styles.txtPreparo1}>
            Recheie as tapiocas com o doce de leite e reserve
          </Text>

          <Text style={styles.txtPreparo1}>
            Sobre uma grelha untada com margarina Primor todo dia, leve as
            fatias de queijo coalho para aquecer bem.
          </Text>

          <Text style={styles.txtPreparo1}>
            Sirva-as com as tapiocas polvilhadas com coco fresco ralado.
          </Text>

          <Text style={styles.h2}>fonte: http://maisequilibrio.com.br/</Text>

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
