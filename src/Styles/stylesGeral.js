//Importando os components do REact native =====================================
import {StyleSheet} from 'react-native';

//importando para todos as paginas o STYLES;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //=========================TELA HOME =========================================
  background: {
    flex: 1,
  },
  imageSuperior: {
    width: '100%',
    height: 180,
  },
  //texto receitas
  txtReceitas: {
    marginTop: 40,
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
    marginBottom: 25,
  },
  //Medicos
  btnsAreaGeral: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
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

  // ========================== PARTE DA SOBREMESA =============================

  sobremesas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSobremesa: {
    width: 130,
    height: 80,
    borderRadius: 15,
    elevation: 3,
  },

  btnAreaSobremesa: {
    backgroundColor: '#fff',
    margin: 6,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    padding: 5,
  },

  txtSobremesa: {
    fontSize: 12,
    fontWeight: '200',
    marginTop: 10,
    color: '#4F4FFF',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  subSobremesa: {
    fontSize: 12,
    fontWeight: '200',
    marginTop: 5,
    color: '#4F4FFF',
    alignItems: 'center',
    marginBottom: 5,
  },

  btnSeta: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginTop: 25,
  },
  banner: {
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  setaVoltar: {
    width: 26,
    height: 26,
  },

  imgBolinho: {
    width: '100%',
    height: 200,
    marginTop: -48,
    marginBottom: 15,
  },
  btnBack: {
    width: 30,
    height: 30,
    zIndex: 99,
    margin: 10,
  },
  btnVoltar: {
    width: 26,
    height: 26,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#4F4FFF',
    borderRadius: 13,
    backgroundColor: '#4F4FFF',
  },
  iconSeta: {
    width: 16,
    height: 16,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 5,
  },
  areaIconSeta: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  h1: {
    backgroundColor: '#4F4FFF',
    textAlign: 'center',
    padding: 5,
    marginBottom: 5,
    color: '#fff',
    marginTop: 6,
  },
  h2: {
    backgroundColor: '#ccc',
    textAlign: 'center',
    padding: 5,

    color: '#fff',
  },
  titulo: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4F4FFF',
  },
  txtResumo: {
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  txtPreparo: {
    textAlign: 'center',
    marginHorizontal: 15,
    marginTop: 5,
    textAlign: 'justify',
  },
  txtPreparo1: {
    textAlign: 'center',
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'justify',
  },
  banner: {
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default styles;
