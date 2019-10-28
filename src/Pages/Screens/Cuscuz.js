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
              source={require('../../assets/img/tapioca/cuscuz.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>CUSCUZ DOCE</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Por ser feita apenas de mandioca, a tapioca é um alimento natural
            com baixo teor de sódio, sem gordura, rico em carboidratos de fácil
            digestão e sem glúten.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranja.png')}
              style={styles.iconSeta}
            />
            <Text>1 litro de leite;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranja.png')}
              style={styles.iconSeta}
            />
            <Text>500g de tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranja.png')}
              style={styles.iconSeta}
            />
            <Text>2 xícaras de açúcar;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranja.png')}
              style={styles.iconSeta}
            />
            <Text>170g de coco fresco ralado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranja.png')}
              style={styles.iconSeta}
            />
            <Text>leite condensado a gosto;</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          <Text style={styles.txtPreparo1}>
            1- Coloque o leite em uma panela e deixe ferver
          </Text>
          <Text style={styles.txtPreparo1}>
            2- Em uma tigela, misture bem a tapioca e o açúcar
          </Text>
          <Text style={styles.txtPreparo1}>
            3- Adicione o leite fervido e misture até ficar cremoso
          </Text>
          <Text style={styles.txtPreparo1}>
            4- Acrescente o coco fresco ralado e misture até ficar homogêneo
          </Text>
          <Text style={styles.txtPreparo1}>
            5- Transfira essa mistura para uma forma
          </Text>
          <Text style={styles.txtPreparo1}>
            6- Reserve na geladeira até ficar firme
          </Text>

          <Text style={styles.txtPreparo1}>7- Sirva com leite condensado</Text>

          <Text style={styles.h2}>
            fonte: https://www.deliciastododia.com.br/
          </Text>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
