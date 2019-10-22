//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
import styles from '../Styles/stylesHome';
import {Fab, Icon, Button} from 'native-base';

playstore = () => {
  Alert.alert(
    'Contamos com sua Avaliação!',
    'Estamos trabalhando para te oferecer as melhores receitas de Tapioca e gostariamos de ouvir seu feedback e sua avaliação na play Store!',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {
        text: 'Avaliar App',
        onPress: () =>
          Linking.openURL('market://details?id=com.receitatapioca'),
      },
    ],
    {cancelable: false},
  );
};

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const Sobremesas = () => {
    props.navigation.navigate('Sobremesas');
  };
  const Salgadas = () => {
    props.navigation.navigate('Salgadas');
  };
  const Doces = () => {
    props.navigation.navigate('Doces');
  };
  const Bolos = () => {
    props.navigation.navigate('Bolos');
  };

  return (
    <ImageBackground
      source={require('../assets/img/tapioca/perfilback.fw.png')}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        {/* 
        Criação dos botões de navegação ======================================== 
        */}

        <View>
          <Image
            source={require('../assets/img/tapioca/perfil.jpg')}
            style={styles.areaImageFoto}
          />
        </View>

        <View style={styles.btnsAreaGeral}>
          <TouchableOpacity onPress={Sobremesas}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/tapioca/cafe.jpg')}
                style={styles.imIconCafe}
              />
              <Text
                style={{
                  fontSize: 10,
                  backgroundColor: '#4F4FFF',
                  borderRadius: 5,
                  padding: 5,
                  color: '#fff',
                  elevation: 2,
                }}>
                Sobremesas
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={Salgadas}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/tapioca/salgadas.jpg')}
                style={styles.imIconLanche}
              />
              <Text
                style={{
                  fontSize: 12,
                  backgroundColor: '#FF0000',
                  borderRadius: 5,
                  padding: 3.7,
                  paddingHorizontal: 10,
                  color: '#fff',
                  elevation: 2,
                }}>
                Salgadas
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={Doces}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/tapioca/doce.jpg')}
                style={styles.imIconAlmoco}
              />
              <Text
                style={{
                  fontSize: 12,
                  backgroundColor: '#C95218',
                  borderRadius: 5,
                  padding: 3.7,
                  paddingHorizontal: 12,
                  color: '#fff',
                  elevation: 2,
                }}>
                Doces
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={Bolos}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/img/tapioca/bolo.jpg')}
                style={styles.imIconJantar}
              />
              <Text
                style={{
                  fontSize: 12,
                  backgroundColor: '#546F42',
                  borderRadius: 5,
                  padding: 3.7,
                  paddingHorizontal: 20,
                  color: '#fff',
                  elevation: 2,
                }}>
                Bolos
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.txtReceitas}>"35+ Receitas Tapioca"</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
