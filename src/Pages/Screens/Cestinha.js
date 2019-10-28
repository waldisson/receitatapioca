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
              source={require('../../assets/img/tapioca/cestinha.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>CESTINHA DE TAPIOCA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Chegou o dia daquele jantar especial e você quer surpreender? Essa
            cestinha de tapioca vai deixar qualquer um de boca aberta chocados
            com a sua habilidade culinária e, obviamente, já prontos para comer.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>20 colheres (sopa) de goma de tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) de azeite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 cebola picada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>500g de carne-seca dessalgada, cozida e desfiada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 colheres (sopa) de molho de tomate;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 tomate picado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Sal e cheiro-verde picado a gosto;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de requeijão cremoso;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            1- Para o recheio, aqueça uma panela com o azeite, em fogo médio e
            frite a cebola e a carne-seca por 3 minutos.
          </Text>
          <Text style={styles.txtPreparo1}>
            2- Adicione o molho, o tomate, sal e cheiro-verde e refogue por 3
            minutos. Desligue, misture o requeijão e reserve.
          </Text>
          <Text style={styles.txtPreparo1}>
            3- Para a tapioca, em uma frigideira antiaderente pequena, coloque 4
            colheres (sopa) da goma e espalhe, cobrindo todo o fundo.
          </Text>
          <Text style={styles.txtPreparo1}>
            4- Leve ao fogo médio por 3 minutos, vire, com o auxílio de uma
            espátula e deixe mais 3 minutos do outro lado. Retire e vire sobre
            uma cumbuca pequena de cabeça para baixo para formar a cestinha.
            Aperte para fixar.
          </Text>
          <Text style={styles.txtPreparo1}>
            5- Repita o procedimento com o restante da goma. Divida o recheio
            entre as cestinhas e sirva.
          </Text>

          <Text style={styles.h2}>fonte: https://guiadacozinha.com.br/</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
