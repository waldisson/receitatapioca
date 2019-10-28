//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  Alert,
  Share,
  Linking,
} from 'react-native';
import styles from '../Styles/stylesHome';
import Admob from '../components/Admob';

export default props => {
  const shareApp = () => {
    Share.share({
      message:
        'O App 35+ Receitas Tapioca - Tem em seu conteúdo diversas receitas para todas as refeições do seu dia a dia e deixar sua alimentação ainda mais saudáveis. Link para download:  https://play.google.com/store/apps/details?id=com.trintaecinco',
    });
  };

  const contato = () => {
    Alert.alert(
      'Contato',
      'Fale conosco através do Email: wal.dev2019@gmail.com.br  e nos envie: dúvidas, sugestões e receitas vegana que você quer ver em nosso app.',
      [
        {
          text: 'ok',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  const playstore = () => {
    Alert.alert(
      'Contamos com sua Avaliação!',
      'Estamos trabalhando para te oferecer as melhores receitas com tapioca e gostariamos de receber seu feedback e sua avaliação na play Store!',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },

        {
          text: 'Avaliar App',
          onPress: () =>
            Linking.openURL('market://details?id=com.receitatapioca'),
        },
      ],
      {cancelable: false},
    );
  };

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
          <View style={styles.areaGeralSuperior}>
            <View style={styles.btnSuperior}>
              <TouchableOpacity style={styles.btnInterno} onPress={contato}>
                <Image
                  source={require('../assets/icon/black-back-closed-envelope-shape.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.btnSuperior}>
              <TouchableOpacity style={styles.btnInterno} onPress={shareApp}>
                <Image
                  source={require('../assets/icon/share.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.btnSuperior}>
              <TouchableOpacity style={styles.btnInterno} onPress={playstore}>
                <Image
                  source={require('../assets/icon/playstore.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginLeft: 15}}>
          <Image
            source={require('../assets/img/tapioca/perfil.jpg')}
            style={styles.areaImageFoto}
          />
        </View>

        <View style={styles.btnsAreaGeral}>
          <TouchableHighlight underlayColor="#e8e8e8" onPress={Sobremesas}>
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
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#e8e8e8" onPress={Salgadas}>
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
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#e8e8e8" onPress={Doces}>
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
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#e8e8e8" onPress={Bolos}>
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
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.txtReceitas}>"35+ Receitas Tapioca"</Text>
        </View>
      </SafeAreaView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </ImageBackground>
  );
};
