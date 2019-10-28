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
    </SafeAreaView>
  );
};
