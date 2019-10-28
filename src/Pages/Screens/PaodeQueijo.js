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
import styles from '../../Styles/stylesSobremesa';
import Admob from '../../components/Admob';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Sobremesas');
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
              source={require('../../assets/img/tapioca/paodequeijo.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>PÃO DE QUEIJO</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Para congelar faça as bolinhas e coloque em um saquinho estilo
            ziploc. Leve ao freezer e conserve por até 30 dias.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara leite integral;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 xícara polvilho doce;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara queijo mussarela ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1 ovo;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>1/2 colher de chá sal;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaAzul.png')}
              style={styles.iconSeta}
            />
            <Text>Azeite para untar a forma;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo}>Pré-aqueça o forno a 200 graus.</Text>
          <Text style={styles.txtPreparo}>
            Em uma vasilha hidrate a tapioca no leite por cerca de 5 minutos.
          </Text>
          <Text style={styles.txtPreparo}>
            Acrescente o ovo ligeiramente batido, junto com o sal.
          </Text>
          <Text style={styles.txtPreparo}>
            Adicione o polvilho e, por fim, a mussarela.
          </Text>
          <Text style={styles.txtPreparo}>Misture bem.</Text>
          <Text style={styles.txtPreparo}>
            Unte uma assadeira e passe um pouco de azeite nas mãos.
          </Text>
          <Text style={styles.txtPreparo}>
            Faça bolinhas com a massa do tamanho que desejar.
          </Text>
          <Text style={styles.txtPreparo1}>
            Leve ao forno a 200 gruas, por aproximadamente 20 minutos.
          </Text>
          <Text style={styles.h2}>fonte:https://saudevidatotal.com</Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
