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
              source={require('../../assets/img/tapioca/abobora.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>TAPIOCA DE ABÓBORA</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            apioca já é leve e saudável, combina muito com um doce de abóbora
            light. Receita muito saborosa e pouco calórica.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>2 Colheres (sopa) de Goma de Tapioca pronta;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 Colher (sopa) de Doce de Abóbora;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>200g de Abóbora Moranga em cubos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 Pau de Canela;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>5 Cravos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>5 Cravos;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>Adoçante a gosto;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            Cozinhe a abóbora, a canela, os cravos, a água e o adoçante por
            cerca de 15 minutos na panela de pressão.
          </Text>
          <Text style={styles.txtPreparo1}>
            Após tirar da panela, misture para obter uma massa.
          </Text>

          <Text style={styles.txtPreparo1}>
            Pegue a massa de tapioca peneirada e leve na frigideira em fogo
            baixo.
          </Text>

          <Text style={styles.txtPreparo1}>
            Espalhe o pó pela superfície da frigideira, de acordo com seu gosto.
            Quanto mais espalhar, mais fina a massa.
          </Text>

          <Text style={styles.txtPreparo1}>
            Passe o recheio de abóbora na massa e feche.
          </Text>
          <Text style={styles.txtPreparo1}>Após um tempo, vire o lado</Text>
          <Text style={styles.txtPreparo1}>
            Espere até dar o ponto, quando estiver suficiente firme, e apague o
            fogo.
          </Text>

          <Text style={styles.h2}>
            fonte: http://www.receitadetapioca.com.br/
          </Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
