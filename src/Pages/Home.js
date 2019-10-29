//Importando o hooks do React ==================================================
import React, {useState, useEffect} from 'react';
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
import Shimmer from '../components/Shimmer';

export default props => {
  const shareApp = () => {
    Share.share({
      message:
        'O App 35+ Receitas Tapioca - Tem em seu conteúdo diversas receitas para todas as refeições do seu dia a dia e deixar sua alimentação ainda mais saudáveis. Link para download:  https://play.google.com/store/apps/details?id=com.receitatapioca',
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

  /**
   * Montagem do efeito de loading
   */

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isVisible = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(isVisible);
  }, []);

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
              <Shimmer
                style={styles.shimmerIcon}
                autoRun={true}
                visible={isVisible}>
                <TouchableOpacity style={styles.btnInterno} onPress={contato}>
                  <Image
                    source={require('../assets/icon/black-back-closed-envelope-shape.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </Shimmer>
            </View>
            <View style={styles.btnSuperior}>
              <Shimmer
                style={styles.shimmerIcon}
                autoRun={true}
                visible={isVisible}>
                <TouchableOpacity style={styles.btnInterno} onPress={shareApp}>
                  <Image
                    source={require('../assets/icon/share.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </Shimmer>
            </View>
            <View style={styles.btnSuperior}>
              <Shimmer
                style={styles.shimmerIcon}
                autoRun={true}
                visible={isVisible}>
                <TouchableOpacity style={styles.btnInterno} onPress={playstore}>
                  <Image
                    source={require('../assets/icon/playstore.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </Shimmer>
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
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Sobremesas}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Shimmer
                  style={styles.shimmerBotoes}
                  autoRun={true}
                  visible={isVisible}>
                  <Image
                    source={require('../assets/img/tapioca/cafe.jpg')}
                    style={styles.imIconCafe}
                  />
                  <Text style={styles.txtAzul}>Sobremesas</Text>
                </Shimmer>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Salgadas}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Shimmer
                  style={styles.shimmerBotoes}
                  autoRun={true}
                  visible={isVisible}>
                  <Image
                    source={require('../assets/img/tapioca/salgadas.jpg')}
                    style={styles.imIconLanche}
                  />
                  <Text style={styles.txtVermelho}>Salgadas</Text>
                </Shimmer>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Doces}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Shimmer
                  style={styles.shimmerBotoes}
                  autoRun={true}
                  visible={isVisible}>
                  <Image
                    source={require('../assets/img/tapioca/doce.jpg')}
                    style={styles.imIconAlmoco}
                  />
                  <Text style={styles.txtLaranja}>Doces</Text>
                </Shimmer>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Bolos}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Shimmer
                  style={styles.shimmerBotoes}
                  autoRun={true}
                  visible={isVisible}>
                  <Image
                    source={require('../assets/img/tapioca/bolo.jpg')}
                    style={styles.imIconJantar}
                  />
                  <Text style={styles.txtVerde}>Bolos</Text>
                </Shimmer>
              </View>
            </TouchableHighlight>
          </View>
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
