import {StyleSheet} from 'react-native';
// ========================== PARTE DA SOBREMESA =============================

const styles = StyleSheet.create({
  // ========================== PARTE DA SALGADA =============================

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
    color: '#FF0000',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  subSobremesa: {
    fontSize: 12,
    fontWeight: '200',
    marginTop: 5,
    color: '#FF0000',
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
    borderColor: '#FF0000',
    borderRadius: 13,
    backgroundColor: '#FF0000',
  },
  iconSeta: {
    width: 16,
    height: 16,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  areaIconSeta: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  h1: {
    backgroundColor: '#FF0000',
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
    color: '#FF0000',
  },
  txtResumo: {
    textAlign: 'center',
    textAlign: 'justify',
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
