//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../Styles/stylesDoces';
import PaodeQueijo from './Screens/PaodeQueijo';
import BolinhoEstudante from './Screens/BolinhoEstudante';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const Bolinhodetapioca = () => {
    props.navigation.navigate('Bolinhodetapioca');
  };

  const SorvetedeTapioca = () => {
    props.navigation.navigate('SorvetedeTapioca');
  };

  const SacoledeTapioca = () => {
    props.navigation.navigate('SacoledeTapioca');
  };

  const GeladoFrutas = () => {
    props.navigation.navigate('GeladoFrutas');
  };

  const SobremesaFacil = () => {
    props.navigation.navigate('SobremesaFacil');
  };

  const CremeGoiabada = () => {
    props.navigation.navigate('CremeGoiabada');
  };

  const GeleiaFramboesa = () => {
    props.navigation.navigate('GeleiadeFramboesa');
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
    <SafeAreaView style={styles.sobremesas}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity onPress={Bolinhodetapioca}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/bolinhoTapioca.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLINHO DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 30 porções</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={SorvetedeTapioca}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/SORVETE-DE-TAPIOCA.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>SORVETE DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 15 porções</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity onPress={SacoledeTapioca}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/geladinho.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>SACOLÉ DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 15 porções</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={GeladoFrutas}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/geladofrutas.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>GELADO DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rendimento 8 porções</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity onPress={SobremesaFacil}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/sobremesafacil.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>SOBREMESA FÁCIL</Text>
                <Text style={styles.subSobremesa}>Rendimento 25 porções</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={CremeGoiabada}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/cremedegaiabada.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>CREME GOIABADA</Text>
                <Text style={styles.subSobremesa}>Rendimento 4 porções</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity onPress={GeleiaFramboesa}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/framboesa.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>GELEIA DE FRAMBOESA</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={Docinhos}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/docinhodefesta.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>DOCINHO DE TAPIOCA</Text>
                <Text style={styles.subSobremesa}>Rende 40 docinhos</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View>
            <TouchableOpacity onPress={PaodeQueijo}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/paodequeijo.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PÃO DE QUEIJO</Text>
                <Text style={styles.subSobremesa}>Rendimento * porções</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={PizzaFrigideira}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/pizza.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>PIZZA DE FRIGIDEIRA</Text>
                <Text style={styles.subSobremesa}>Rende * fatias</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View>
            <TouchableOpacity onPress={BolinhoEstudante}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/bolinhoEstudante.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>BOLINHO ESTUDANTE</Text>
                <Text style={styles.subSobremesa}>Rendimento 6 pessoas</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={TapiocaChocolate}>
              <View style={styles.btnAreaSobremesa}>
                <Image
                  source={require('../assets/img/tapioca/chocolate.jpg')}
                  style={styles.imgSobremesa}
                />
                <Text style={styles.txtSobremesa}>TAPIOCA CHOCOLATE</Text>
                <Text style={styles.subSobremesa}>Rende * poções</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
