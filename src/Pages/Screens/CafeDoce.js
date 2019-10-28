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
              source={require('../../assets/img/tapioca/docedeleite.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>CAFÉ c/ DOCE DE LEITE</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Se a massa ficar borrachuda significa que está muito úmida, então
            acrescente um pouco de polvilho. Se estiver quebradiça precisa de um
            pouco mais de liquido, então adicione um pouco mais de café.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Para a Massa:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>500g de polvilho doce;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>350ml aproximadamente de café de coador (resfriado);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 pitada de sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Para o Recheio:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>500g de doce de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>300g de chocolate amargo (60% de cacau ou mais);</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Para Finalização:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>8 bolas sorvete de canela;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Calda de chocolate;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Raspas de chocolate;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Para a Massa:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Hidrate a massa com o café e uma pitada de sal. É importante saber
            que a quantidade de líquido pode variar de acordo com o polvilho.
          </Text>
          <Text style={styles.txtPreparo1}>
            Depois disso, peneire a massa e espalhe-a na tapioqueira e espere
            até que fique firme.
          </Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Recheio:
            </Text>
          </View>
          <Text style={styles.txtPreparo1}>
            Enquanto a tapioca está no fogo médio, espalhe o doce de leite e o
            chocolate ralado a gosto. Espere alguns instantes para o recheio
            esquentar e feche a tapioca.
          </Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 15,
                borderRadius: 5,
                padding: 5,
              }}>
              Finalização:
            </Text>
          </View>
          <Text style={styles.txtPreparo1}>
            Sirva com o sorvete de canela e decore com a calda e as raspas de
            chocolate.
          </Text>

          <Text style={styles.h2}>
            fonte: http://www.mexidodeideias.com.br/
          </Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
