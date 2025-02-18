//Importando os components do REact native =====================================
import {StyleSheet} from 'react-native';

//importando para todos as paginas o STYLES;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  //=========================TELA HOME =========================================

  background: {
    flex: 1,
  },
  imageSuperior: {
    width: '100%',
    height: 180,
  },
  areaGeralSuperior: {
    flexDirection: 'row-reverse',
    marginBottom: 30,
  },
  btnSuperior: {
    width: 50,
    height: 50,
    margin: 5,
    marginTop: 30,
  },
  btnInterno: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
  },
  //texto receitas
  txtReceitas: {
    marginTop: 20,
    marginBottom: 30,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  //Imagem de vagana
  areaImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  //Imagem normal
  areaImageFoto: {
    width: 310,
    height: 200,
  },
  //Medicos
  btnsAreaGeral: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 25,
  },

  imageIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -55,
    zIndex: 5,
    borderWidth: 5,
    borderColor: '#008000',
  },

  //Bolinha do café
  imIconCafe: {
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 5,
    borderWidth: 5,
    borderColor: '#4F4FFF',
    marginVertical: 10,
    margin: 5,
    paddingHorizontal: 5,
    elevation: 3,
  },
  //Bolinha do Lanche
  imIconLanche: {
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 5,
    borderWidth: 5,
    borderColor: '#FF0000',
    marginVertical: 10,
    margin: 5,
    paddingHorizontal: 5,
    elevation: 3,
  },

  //Bolinha do Almoço
  imIconAlmoco: {
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 5,
    borderWidth: 5,
    borderColor: '#C95218',
    marginVertical: 10,
    margin: 5,
    paddingHorizontal: 5,
    elevation: 3,
  },

  //Bolinha do Jantar
  imIconJantar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 5,
    borderWidth: 5,
    borderColor: '#546F42',
    marginVertical: 10,
    margin: 5,

    elevation: 3,
  },
  banner: {
    marginTop: 80,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  shimmerIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  shimmerBotoes: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  txtVerde: {
    fontSize: 12,
    backgroundColor: '#546F42',
    borderRadius: 5,
    padding: 3.7,
    paddingHorizontal: 20,
    color: '#fff',
    elevation: 2,
    margin: 5,
    textAlign: 'center',
  },
  txtLaranja: {
    fontSize: 12,
    backgroundColor: '#C95218',
    borderRadius: 5,
    padding: 3.7,
    paddingHorizontal: 12,
    color: '#fff',
    elevation: 2,
    margin: 5,
    textAlign: 'center',
  },
  txtVermelho: {
    fontSize: 12,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    padding: 3.7,
    paddingHorizontal: 10,
    color: '#fff',
    elevation: 2,
    margin: 5,
    textAlign: 'center',
  },
  txtAzul: {
    fontSize: 10,
    backgroundColor: '#4F4FFF',
    borderRadius: 5,
    padding: 5,
    color: '#fff',
    elevation: 2,
    margin: 5,
    textAlign: 'center',
  },
});

export default styles;
