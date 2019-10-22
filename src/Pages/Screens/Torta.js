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
              source={require('../../assets/img/tapioca/torta.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TORTA DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Opções de Recheio: Legumes, Carne moída, Atum, Sardinha, Calabresa
            com brócolis, Queijo com salame, etc...{' '}
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
            <Text>4 ovos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>5 colheres (sopa) cheia de tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) bem cheias</Text>
          </View>
          <Text style={{marginLeft: 35}}>
            de requeijão (ou creme de ricota);
          </Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) de queijo ralado opcional;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Ervas a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (sobremesa ) de fermento em pó;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo do Recheio</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            1 – Refogue 1 cebola grande, 1 dente de alho e 1 tomate picado na
            manteiga. Adicione 200 g de peito de frango e deixe dourar. Cubra
            com água e deixe cozinhar por 20 minutos após pegar pressão.
          </Text>
          <Text style={styles.txtPreparo}>
            2 – Depois separe a água, e somente com o frango dentro da panela,
            tampe e sacuda por varias vezes até que tenha desfiado totalmente o
            frango.
          </Text>
          <Text style={styles.txtPreparo1}>
            3 – Adicione os temperos desejados e misture.
          </Text>

          <Text style={styles.txtPreparo1}>
            4 – Rale 1 cenoura e misture com o frango desfiado. Reserve.
          </Text>

          <Text style={styles.txtPreparo1}>
            Obs: Sempre que faço a receita somente da massa, algumas pessoas
            ficam revoltadas. Então vou ensinar brevemente como eu fiz o meu
            recheio, mas é opcional.
          </Text>

          <Text style={styles.h1}>Modo de preparo da Massa</Text>

          <Text style={styles.txtPreparo1}>
            1 – Em um liquidificador, bata os ovos, a tapioca, o requeijão e o
            queijo ralado. Deixe bater por cerca de 2 minutos. Dica: Também pode
            ser batido na mão.
          </Text>
          <Text style={styles.txtPreparo}>
            2 – Adicione o sal e as ervas, bata novamente.
          </Text>
          <Text style={styles.txtPreparo1}>
            3 – Desligue o liquidificador, adicione o fermento e misture com uma
            colher.
          </Text>

          <Text style={styles.txtPreparo1}>
            4 – Unte uma forma média ou use uma forma de silicone.
          </Text>

          <Text style={styles.txtPreparo1}>
            5 – Transfira metade da massa, coloque o recheio e cubra com o
            restante da massa.
          </Text>

          <Text style={styles.txtPreparo1}>
            6 – Salpique mussarela a gosto e decore com tomate cereja e orégano.
          </Text>

          <Text style={styles.txtPreparo1}>
            7 – Leve ao forno preaquecido a 180° C, por cerca de 25 minutos.
          </Text>

          <Text style={styles.txtPreparo1}>
            8 – Retire do forno e sirva! Fica mega gostoso.
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
