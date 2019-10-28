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
              source={require('../../assets/img/tapioca/frango.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TAPIOCA DE FRANGO</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Receita de frango desfiado definitiva, mas, com certeza, uma das
            mais queridas e com a cara do Brasil é a tapioca de frango, um
            lanche nutritivo e leve, muito rápido e simples. .{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 Filé de Frango;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Suco de ½ limão;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal e pimenta-do-reino a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) de manteiga;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>½ xícara de mussarela;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 tomate;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Orégano fresco a gosto;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Tempere o Filé de Frango SEARA com sal, pimenta-do-reino e limão.
          </Text>
          <Text style={styles.txtPreparo1}>
            Pique o tomate e a mussarela e reserve.
          </Text>
          <Text style={styles.txtPreparo1}>
            Em uma panela, aqueça uma colher de manteiga e frite o filé de
            frango, dourando bem dos dois lados.
          </Text>

          <Text style={styles.txtPreparo1}>Deixe esfriar e desfie.</Text>

          <Text style={styles.txtPreparo1}>
            Volte para a panela, adicione o tomate e refogue por 3 minutos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Aqueça uma frigideira média, pincele um pouco de manteiga e adicione
            1 concha da tapioca granulada, espalhando com o auxílio de uma
            colher.
          </Text>

          <Text style={styles.txtPreparo1}>
            Aqueça uma frigideira média, pincele um pouco de manteiga e adicione
            1 concha da tapioca granulada, espalhando com o auxílio de uma
            colher.
          </Text>

          <Text style={styles.txtPreparo1}>
            Dobre a tapioca e deixe por mais alguns segundos no fogo.
          </Text>

          <Text style={styles.txtPreparo1}>
            Salpique orégano fresco e sirva a seguir.
          </Text>

          <Text style={styles.h2}>fonte: https://www.hojetemfrango.com.br</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
