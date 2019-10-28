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
              source={require('../../assets/img/tapioca/presunto.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLINHO c/ PRESUNTO </Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Bolinho de tapioca recheado com presunto é a prova de que uma
            receita com tapioca pode, sim, ter muito sabor e servir de aperitivo
            para uma noite descontraída ao lado dos amigos. Tempo :1h (+2h30 de
            descanso)
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
            <Text>2 xícaras (chá) de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>4 xícaras (chá) de leite fervente;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 ovo batido;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de queijo parmesão ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Sal a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>100g de presunto em cubos.</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 ovos batidos para empanar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 e 1/2 xícara (chá) de leite gelado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Farinha Panko para empanar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Óleo para fritar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Molho de pimenta para acompanhar;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Em uma tigela, misture a tapioca com metade do leite. Misture, deixe
            amornar e junte o ovo, o queijo e sal. Deixe descansar por 2 horas.
            Misture o leite restante e deixe descansar por mais 30 minutos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Abra pequenas porções de massa na palma da mão e recheie com um cubo
            do presunto, modelando da forma como desejar. Passe pelos ovos
            misturados ao leite, pela farinha Panko e frite em óleo quente até
            dourar.
          </Text>

          <Text style={styles.txtPreparo1}>
            Escorra em papel absorvente e sirva acompanhado de molho de pimenta.
          </Text>

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
