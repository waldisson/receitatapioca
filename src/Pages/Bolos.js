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
import styles from '../Styles/stylesBolos';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const Liquidificador = () => {
    props.navigation.navigate('Liquidificador');
  };

  const BoloTapioca = () => {
    props.navigation.navigate('BoloTapioca');
  };

  const Cremoso = () => {
    props.navigation.navigate('Cremoso');
  };

  const Tripioca = () => {
    props.navigation.navigate('Tripioca');
  };

  const Simples = () => {
    props.navigation.navigate('Simples');
  };

  const CarocoPiaui = () => {
    props.navigation.navigate('CarocoPiaui');
  };

  const BoloChocolate = () => {
    props.navigation.navigate('BoloChocolate');
  };

  const Vulcao = () => {
    props.navigation.navigate('Vulcao');
  };

  const Presunto = () => {
    props.navigation.navigate('Presunto');
  };

  const Salsinha = () => {
    props.navigation.navigate('Salsinha');
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
            <TouchableHighlight
              underlayColor="#e8e8e8"
              onPress={Liquidificador}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/liquidificador.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLO DE LIQUIDIFI..</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={BoloTapioca}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/bolo-de-tapioca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLO DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 15 porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Cremoso}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/cremoso.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLO CREMOSO</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Tripioca}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/tripioca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLO TRIPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 20 porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Simples}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/simples.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLO SIMPLES</Text>
                <Text style={styles.subSobremesa}>Rendimento 20 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={CarocoPiaui}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/piaui.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CAROÇO DO PIAUÍ</Text>
                <Text style={styles.subSobremesa}>Rendimento 8 porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={BoloChocolate}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/tapiocaChocolate.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLO C/ CHOCOLATE</Text>
                <Text style={styles.subSobremesa}>Rendimento 8 porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Vulcao}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/vulcao.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>VULCÃO DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rende * porções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Presunto}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/presunto.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLINHO c/ PRESUNTO</Text>
                <Text style={styles.subSobremesa}>Rendimento 10 unidades</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Salsinha}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/salsinha.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLINHO c/ SALSINHA</Text>
                <Text style={styles.subSobremesa}>Rende 10 unidades</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
