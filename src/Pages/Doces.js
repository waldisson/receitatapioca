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
import styles from '../Styles/stylesDoces';
import Admob from '../components/Admob';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const Cuscuz = () => {
    props.navigation.navigate('Cuscuz');
  };

  const doceChocolate = () => {
    props.navigation.navigate('doceChocolate');
  };

  const Cestinha = () => {
    props.navigation.navigate('Cestinha');
  };

  const CremeCoco = () => {
    props.navigation.navigate('CremeCoco');
  };

  const CafeDoce = () => {
    props.navigation.navigate('CafeDoce');
  };

  const Morango = () => {
    props.navigation.navigate('Morango');
  };

  const Manjar = () => {
    props.navigation.navigate('Manjar');
  };

  const Abobora = () => {
    props.navigation.navigate('Abobora');
  };

  const Abacaxi = () => {
    props.navigation.navigate('Abacaxi');
  };

  const DocedeLeite = () => {
    props.navigation.navigate('DocedeLeite');
  };

  const Brownie = () => {
    props.navigation.navigate('Brownie');
  };

  const Coco = () => {
    props.navigation.navigate('Coco');
  };

  /**
   * Inicio do retorno das informações para tela ===============================
   */
  return (
    <SafeAreaView style={styles.doces}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Cuscuz}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/cuscuz.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CUSCUZ DOCE</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={doceChocolate}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/doceChocolate.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA BRIGADEIRO</Text>
                <Text style={styles.subSobremesa}>Rendimento 15 porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Cestinha}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/cestinha.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CESTINHA DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 5 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={CremeCoco}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/cremeCoco.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CREME c/ COCO</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={CafeDoce}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/docedeleite.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CAFÉ c/ DOCE DE LEITE</Text>
                <Text style={styles.subSobremesa}>Rendimento 8 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Morango}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/tapioca_de_morango.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>MORANGO c/ LEITE C...</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Manjar}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/Manjar.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>MANJAR DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 6 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Abobora}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/abobora.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA c/ ABÓBORA</Text>
                <Text style={styles.subSobremesa}>Rende * porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Abacaxi}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/pudim_tapioca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PUDIM DE ABACAXI</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={DocedeLeite}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/tapioca_doce_leite.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>DOCE DE LEITE</Text>
                <Text style={styles.subSobremesa}>Rende * porção</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Brownie}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/brownie.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BROWNIE DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Coco}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/coco.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA c/ COCO</Text>
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
