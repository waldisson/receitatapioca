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

  const Docinhos = () => {
    props.navigation.navigate('Docinhos');
  };

  const PaodeQueijo = () => {
    props.navigation.navigate('PaodeQueijo');
  };

  const PizzaFrigideira = () => {
    props.navigation.navigate('PizzaFrigideira');
  };

  const BolinhoEstudante = () => {
    props.navigation.navigate('BolinhoEstudante');
  };

  const TapiocaChocolate = () => {
    props.navigation.navigate('TapiocaChocolate');
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
            <TouchableHighlight underlayColor="#e8e8e8" onPress={Docinhos}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/docinhodefesta.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>DOCINHO DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rende 40 docinhos</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableHighlight underlayColor="#e8e8e8" onPress={PaodeQueijo}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/paodequeijo.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PÃO DE QUEIJO</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight
              underlayColor="#e8e8e8"
              onPress={PizzaFrigideira}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/pizza.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PIZZA DE FRIGIDEIRA</Text>
                <Text style={styles.subSobremesa}>Rende * fatias</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View>
            <TouchableHighlight
              underlayColor="#e8e8e8"
              onPress={BolinhoEstudante}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/bolinhoEstudante.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLINHO ESTUDANTE</Text>
                <Text style={styles.subSobremesa}>Rendimento 6 pessoas</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight
              underlayColor="#e8e8e8"
              onPress={TapiocaChocolate}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/chocolate.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA CHOCOLATE</Text>
                <Text style={styles.subSobremesa}>Rende * poções</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
