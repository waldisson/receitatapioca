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
import Admob from '../../components/Admob';

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
              source={require('../../assets/img/tapioca/doceChocolate.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TAPIOCA DE BRIGADEIRO</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            á pensou juntar duas receitas típicas da cozinha brasileira e assim
            criar algo deliciosamente saboroso? É isso que acontece nesta
            receita que junta a receita de brigadeiro, docinho típico
            brasileiro, com a receita de tapioca.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>
          <Text style={styles.subh3}>Tapioca:</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Goma de Mandioca Hidratada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Coco Ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Sal (1 pitada);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Queijo Coalho;</Text>
          </View>

          <Text style={styles.subh3}>Brigadeiro:</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>01 e ½ colher de sopa de margarina com sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>02 e ½ colheres de achocolatado em pó;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>01 lata de leite condensado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>01 pacote de granulado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Forminhas de Papel;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.subh3}>Modo de Preparo Tapioca:</Text>

          <Text style={styles.txtPreparo1}>
            1- Peneirar uma porção de goma de mandioca hidratada em um
            recipiente.
          </Text>
          <Text style={styles.txtPreparo1}>
            2- Acrescentar a pitada de sal, o queijo coalho a gosto e o coco
            ralado a gosto.
          </Text>
          <Text style={styles.txtPreparo1}>
            3- Preaquecer a frigideira, de preferência antiaderente.
          </Text>
          <Text style={styles.txtPreparo1}>
            4- Polvilhar, usando uma colher, a tapioca na frigideira preenchendo
            toda sua superfície com a goma.
          </Text>
          <Text style={styles.txtPreparo1}>
            5- Passar colher na tapioca para que emparelhar os lados, deixando
            ela plana e uniforme.
          </Text>
          <Text style={styles.txtPreparo1}>
            6- Aquecer na frigideira por cerca de 5 minutos.
          </Text>
          <Text style={styles.txtPreparo1}>
            7- Acrescentar o recheio e enrolar.
          </Text>

          <Text style={styles.subh3}>Modo de Preparo Brigadeiro:</Text>

          <Text style={styles.txtPreparo1}>
            1- Misture todos os ingredientes numa panela, menos o granulado!
          </Text>
          <Text style={styles.txtPreparo1}>
            2- Leve ao fogo e não pare de mexer (caso contrário, vai empelotar.
            ATENÇÃO hein?!).
          </Text>
          <Text style={styles.txtPreparo1}>
            3- Deixe engrossar. O ponto certo para desligar o fogo é quando você
            ver o fundo da panela ao raspar a colher.
          </Text>
          <Text style={styles.txtPreparo1}>
            4- Tire do fogo e espere esfriar.
          </Text>
          <Text style={styles.txtPreparo1}>
            5- Para enrolar, passe um pouco de margarina nas mãos e faça as
            bolinhas do tamanho que quiser.
          </Text>
          <Text style={styles.txtPreparo1}>
            6- Passe as bolinhas no chocolate granulado e coloque cada
            brigadeiro na sua forminha.
          </Text>

          <Text style={styles.txtPreparo1}>7- Sirva com leite condensado</Text>

          <Text style={styles.h2}>
            fonte: http://receitadebrigadeiroagora.com.br/
          </Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
