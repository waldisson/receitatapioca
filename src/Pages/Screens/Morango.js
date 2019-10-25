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
              source={require('../../assets/img/tapioca/tapioca_de_morango.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>MORANGO c/ LEITE COND...</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            No nordeste também é conhecido como beiju, trata-se basicamente da
            fécula extraída da mandioca.{' '}
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
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 kg de polvilho doce;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 copos (americanos) de água;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Você pode usar a massa pronta;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Dica de Recheio:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200 gr de morango picados;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200 gr de leite condensado de aveia;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <Text style={styles.txtPreparo1}>
            Coloque o polvilho doce (ou fécula) em uma bacia e vá acrescentando
            a água aos poucos. O segredo é misturar bem (com as mãos) para que
            ela fique úmida por igual. A pitada de sal eu coloco no primeiro
            copo de água.
          </Text>
          <Text style={styles.txtPreparo1}>
            Depois disso (pasmem!) é só passar na peneira e fazer sua tapioca.
          </Text>

          <Text style={styles.txtPreparo1}>
            Coloque a frigideira no fogo alto, espere ela esquentar e baixe o
            fogo. Com as mãos mesmo, pegue um pouco da tapioca e vá jogando
            dentro da frigideira.
          </Text>

          <Text style={styles.txtPreparo1}>
            Você pode jogar no meio e ir distribuindo para os lados, por
            exemplo. Use uma colher para fazer isso ou continue com a mão, mas
            cuidado pra não se queimar.
          </Text>

          <Text style={styles.txtPreparo1}>
            O tempo pra virar é importante: se virar logo pode esfarelar tudo e
            se demorar pode ficar dura demais e até queimar. Como ela não gruda,
            você pode perceber quando é a hora com uma colher ou espátula.
          </Text>

          <Text style={styles.txtPreparo1}>
            Virou! Espere menos tempo dessa vez e pode colocar no prato, rechear
            com o que quiser e saborear.
          </Text>

          <Text style={styles.h2}>fonte: https://ideianutri.com/</Text>

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
