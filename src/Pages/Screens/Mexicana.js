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
              source={require('../../assets/img/tapioca/mexicana.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TAPIOCA MEXICANA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Com uma diversidade de sabores e texturas, a culinária mexicana é,
            sem sombra de dúvida, umas das mais ricas do mundo.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes Para Massa</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>100 g de massa (goma) para tapioca;</Text>
          </View>

          <Text style={styles.h1}>Ingredientes Preparo</Text>

          <Text style={styles.txtPreparo1}>
            Em uma frigideira quente, espalhe a goma de tapioca com uma
            espátula.
          </Text>

          <Text style={styles.txtPreparo1}>
            Deixe assar por 1 minuto e vire, deixando assar por 30 segundos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Tire a tapioca e ainda quente coloque em um rolo comprido, para
            quando esfriar ganhar o formato de taco.
          </Text>

          <Text style={styles.h1}>Ingredientes Para Recheio</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>500 g de carne moída;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>200 g de feijão em conserva;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 cebola picada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 pimentas dedo-de-moça picada, sem semente;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 tomates picados, sem pele e sem semente;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres de extrato de tomate;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>½ pimentão, picado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher de (café) chili em pó;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 dentes de alho picados;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) de salsa, picada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>2 colher de (chá) azeite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>100 ml de água;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Alface americana picada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVermelha2.png')}
              style={styles.iconSeta}
            />
            <Text>Sal a gosto;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Em uma panela separada, doure um pouco da cebola e do alho.
          </Text>
          <Text style={styles.txtPreparo1}>
            Adicione o feijão e a água e deixe ficar bem macio, amasse com a
            concha e reserve.
          </Text>
          <Text style={styles.txtPreparo1}>
            Frite a cebola e o alho no azeite.
          </Text>

          <Text style={styles.txtPreparo1}>
            Acrescente a carne e deixe refogar por alguns instantes.
          </Text>

          <Text style={styles.txtPreparo1}>
            Em seguida, entre com a pimenta, o pimentão, a salsa e o tomate,
            misturando bem todos os ingredientes.
          </Text>

          <Text style={styles.txtPreparo1}>
            Inclua o extrato de tomate e deixe cozinhar por uns 30 minutos ou
            até o molho reduzir.
          </Text>

          <Text style={styles.txtPreparo1}>
            Adicione o feijão cozido e amassado (deve ficar bem pastoso).
          </Text>

          <Text style={styles.txtPreparo1}>
            Recheie os tacos e se, quiser, coloque alface por cima.
          </Text>

          <Text style={styles.h2}>
            fonte: https://www.santamalialimentos.com.br
          </Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
