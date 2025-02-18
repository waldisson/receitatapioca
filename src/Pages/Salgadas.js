//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import styles from '../Styles/stylesSalgada';
import Admob from '../components/Admob';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const Omelete = () => {
    props.navigation.navigate('Omelete');
  };

  const Legumes = () => {
    props.navigation.navigate('Legumes');
  };

  const Carnedosol = () => {
    props.navigation.navigate('Carnedosol');
  };

  const Atum = () => {
    props.navigation.navigate('Atum');
  };

  const frango = () => {
    props.navigation.navigate('Frango');
  };

  const Torta = () => {
    props.navigation.navigate('Torta');
  };

  const Dadinho = () => {
    props.navigation.navigate('Dadinho');
  };

  const Coxinha = () => {
    props.navigation.navigate('Coxinha');
  };

  const Mexicana = () => {
    props.navigation.navigate('Mexicana');
  };

  const Panqueca = () => {
    props.navigation.navigate('Panqueca');
  };

  const Paozinho = () => {
    props.navigation.navigate('Paozinho');
  };

  const TapiocaChocolate = () => {
    props.navigation.navigate('TapiocaChocolate');
  };

  const Lasanha = () => {
    props.navigation.navigate('Lasanha');
  };

  /**
   * Inicio do retorno das informações para tela ===============================
   */
  return (
    <SafeAreaView style={styles.sobremesas}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Omelete}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/omelete.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>OMELETE DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Legumes}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/legumes.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA c/ LEGUMES</Text>
                <Text style={styles.subSobremesa}>Rendimento 5 porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Carnedosol}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/carnedosol.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CARNE DO SOL</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Atum}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/atum.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA c/ ATUM</Text>
                <Text style={styles.subSobremesa}>Rendimento 8 porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={frango}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/frango.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA c/ FRANGO</Text>
                <Text style={styles.subSobremesa}>Rendimento 1 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Torta}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/torta.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TORTA DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Dadinho}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/dadinho.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>DADINHO ASSADO</Text>
                <Text style={styles.subSobremesa}>Rendimento 4 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Coxinha}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/coxinha.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>COXINHA DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rende * Coxinhas</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Mexicana}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/mexicana.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA MEXICANA</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Panqueca}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/panqueca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PANQUECA</Text>
                <Text style={styles.subSobremesa}>Rende * porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Paozinho}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/paozinhodetapioca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PÃOZINHO</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Lasanha}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/crepioca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>LASANHA</Text>
                <Text style={styles.subSobremesa}>Rende * poções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Admob />
      </View>
    </SafeAreaView>
  );
};
