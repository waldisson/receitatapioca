//Importando o hooks do React ==================================================
import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
} from 'react-native';
import styles from '../../Styles/stylesBolos';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Bolos');
  };
  return (
    <SafeAreaView style={styles.sobremesas}>
      <ScrollView style={styles.bolos}>
        <View>
          <TouchableOpacity
            underlayColor="#ccc"
            onPress={voltar}
            style={styles.btnBack}>
            <Image
              source={require('../../assets/icon/left-arrow.png')}
              style={styles.btnVoltar}
            />
          </TouchableOpacity>

          <View style={styles.container}>
            <Image
              resizeMode="cover"
              source={require('../../assets/img/tapioca/tripioca.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>BOLO TRIPIOCA </Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Massa cremosa, sabores harmoziosos entre si e que te proporcionarão
            prazer absoluto ao desfrutar desta delícia. *Esse bolo possui 3
            coberturas, por isso o nome TRIpioca.
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              1a Fase:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>
              *1 litro de leite integral (caso houver restrição à lactose, pode
              ser o leite de soja, zero lactose ou de sua preferência);
            </Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*250 grs de tapioca granulada;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*50grs de coco em flocos sem açúcar e desidratado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*200ml de leite de coco;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              2a Fase:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*1 colher de sopa de manteiga;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*3 ovos inteiros</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*2 xícaras de chá de açúcar cristal</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Coberturas:
            </Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text>● 1a cobertura - Cocadinha especial:</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*1 lata de leite condensado de boa qualidade</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*100 gramas de coco ralado seco e sem açúcar</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*1 caixa de creme de leite (sem soro)</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text>● 2a cobertura - Doce de leite cremoso</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*1 lata de doce de leite de qualidade</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Text>● 3a cobertura - Geléia de goiabada</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaVerdeDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>*1 pote de geléia de goiabada de qualidade</Text>
          </View>

          <Text style={styles.h1}>Modo de preparo</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              1a Fase:
            </Text>
          </View>

          <View>
            <Text style={styles.txtPreparo1}>
              Em um bowl (com capacidade para 3 litros) vc juntará todos os
              ingredientes da 1a FASE e irá misturar levemente a cada 20 minutos
              com um fouet, até a tapioca estar completamente hidratada. Isso
              deve ser feito no tempo de 1hora. Reserve e faça em seguida a 2a
              Fase.
            </Text>

            <Text style={styles.txtPreparo1}>NÃO PRECISA De BATEDEIRA</Text>

            <View style={styles.areaIconSeta}>
              <Text
                style={{
                  backgroundColor: '#ccc',
                  marginLeft: 5,
                  borderRadius: 5,
                  padding: 5,
                }}>
                2a Fase:
              </Text>
            </View>

            <Text style={styles.txtPreparo1}>
              Em um bowl médio vc juntará todos os ingredientes da 2a FASE e irá
              misturar todos juntos com um fouet até essa mistura estar
              homogeneizada.
            </Text>

            <Text style={styles.txtPreparo1}>não precisa de batedeira.</Text>

            <Text style={styles.txtPreparo1}>
              Desta forma, utilize a mistura do bowl da 2a fase e agregue ao
              bowl da 1a fase. Misture com o fouet todos os
            </Text>

            <Text style={styles.txtPreparo1}>
              Ingredientes ate estarem todos homogeneizados.
            </Text>

            <Text style={styles.txtPreparo1}>não precisa de batedeira.</Text>

            <Text style={styles.txtPreparo1}>
              Unte bem uma forma com manteiga ou óleo de milho e enfarinhe com
              trigo.
            </Text>

            <Text style={styles.txtPreparo1}>
              Passe essa mistura para uma forma grande de furo no meio.
            </Text>

            <Text style={styles.txtPreparo1}>
              Não precisa deixar muito espaço para a borda, pois esse bolo não
              vai fermento.
            </Text>

            <Text style={styles.txtPreparo1}>
              Leve ao forno médio e deixe assar por 1h40min (uma hora e quarenta
              minutos), até estar dourado por cima e ao colocar a mão estará
              firme a massa.
            </Text>

            <Text style={styles.txtPreparo1}>
              Deixe amornar e com uma faca redonda solte todas as laterais do
              bolo com cuidado inclusive o meio da forma e desenforme.
            </Text>

            <View style={styles.areaIconSeta}>
              <Text
                style={{
                  backgroundColor: '#ccc',
                  marginLeft: 5,
                  borderRadius: 5,
                  padding: 5,
                }}>
                Coberturas:
              </Text>
            </View>

            <Text style={styles.txtPreparo1}>
              ● Cocadinha cremosa: una todos os ingredientes e leve ao fogo
              médio até desgrutar o fundo da panela. Reserve.
            </Text>

            <Text style={styles.txtPreparo1}>
              ● Doce de leite: compre de marca boa
            </Text>

            <Text style={styles.txtPreparo1}>
              ● Geléia de goiabada: compre de marca boa
            </Text>
            <Text style={styles.txtPreparo1}>
              Trace uma LINHA IMAGINARIA e divida o bolo em três partes iguais.
              Utilize uma parte de cada uma das 3 coberturas para cobrir as 3
              partes do bolo.
            </Text>
            <Text style={styles.txtPreparo1}>
              Nao é para sobrepor as camadas de cobertura uma em cima da outra!
              É para ficar 3 pattes do bolo e cada um com a respectiva
              cobertura.
            </Text>

            <Text style={styles.txtPreparo1}>
              Assm vc terá um bolo dividido em 3 coberturas. Pode salpicar coco
              raldo sobre a cocadinha.
            </Text>

            <Text style={styles.txtPreparo1}>
              Esse bolo é fantástico. Super simples e impossível comer só 1
              pedaço.{' '}
            </Text>
          </View>
          <Text style={styles.h2}>fonte: https://gshow.globo.com/</Text>

          {/* <View style={styles.banner}>
           <AdMobBanner
            adSize="banner"
            adUnitID="ca-app-pub-5749178758370185/8976418652"
            
            />
            </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
