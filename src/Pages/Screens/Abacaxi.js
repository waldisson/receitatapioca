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
import styles from '../../Styles/stylesDoces';

export default props => {
  /**
   * Transição de botões =======================================================
   */
  const voltar = () => {
    props.navigation.navigate('Doces');
  };
  return (
    <SafeAreaView style={styles.sobremesas}>
      <ScrollView>
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
              source={require('../../assets/img/tapioca/pudim_tapioca.jpg')}
              style={styles.imgBolinho}
            />
          </View>

          <Text style={styles.titulo}>PUDIM DE ABACAXI</Text>
          <Text style={styles.h1}>Resumo:</Text>
          <Text style={styles.txtResumo}>
            Quando o pudim estiver firme, desenforme e sirva-o acompanhado da
            calda de abacaxi.{' '}
          </Text>

          <Text style={styles.h1}>Ingredientes</Text>

          {/* <View style={styles.banner}>
         <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-5749178758370185/8976418652"
          />
         </View> */}

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>4 xícaras (chá) de leite desnatado;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de adoçante culinário em pó;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 pau de canela;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>3 cravos;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>½ xícara (chá) de farinha tapioca;</Text>
          </View>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 e ½ pacote de gelatina incolor;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 xícara (chá) de coco ralado fresco;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 colher (chá) de essência de baunilha;</Text>
          </View>
          <Text style={styles.h1}>Calda</Text>

          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>1 abacaxi bem maduro, em cubos;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>3 colheres (sopa) de adoçante culinário em pó;</Text>
          </View>
          <View style={styles.areaIconSeta}>
            <Image
              source={require('../../assets/icon/setaLaranjaDescricao.png')}
              style={styles.iconSeta}
            />
            <Text>½ colher (sopa) de fécula de batata;</Text>
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
              Pudim:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Em uma panela grande, junte o leite, o adoçante, a canela e os
            cravos e leve ao fogo, até ferver.
          </Text>
          <Text style={styles.txtPreparo1}>
            Desligue o fogo, junte a tapioca e deixe-a hidratando no leite
            quente por 30 minutos, mexendo de vez em quando para que os grãos de
            tapioca fiquem soltinhos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Em uma vasilha pequena, disponha 5 colheres (sopa) de água (65 ml)
            e, sobre a água, salpique a gelatina, de modo que se forme uma
            camada uniforme de gelatina sobre a água.
          </Text>

          <Text style={styles.txtPreparo1}>
            Deixe a gelatina hidratando por 5 minutos. Caso tenha pontos de
            gelatina que não esteja hidratada, adicione sobre estes pontos
            algumas gotas de água.
          </Text>

          <Text style={styles.txtPreparo1}>
            Leve a gelatina hidratada ao micro-ondas, em potência média, por 30
            segundos. Mexa em seguida e, caso a gelatina ainda não esteja
            dissolvida, retorne-a ao micro-ondas por mais 10 segundos.
          </Text>

          <Text style={styles.txtPreparo1}>
            Adicione a gelatina dissolvida, o coco e a essência de baunilha ao
            leite com a tapioca hidratada. Mexa bem e disponha a mistura em
            forma com furo central, de 20 cm de diâmetro por 9 cm de altura,
            ligeiramente untada com óleo. Leve à geladeira por 4 horas ou até
            endurecer.
          </Text>

          <View style={styles.areaIconSeta}>
            <Text
              style={{
                backgroundColor: '#ccc',
                marginLeft: 5,
                borderRadius: 5,
                padding: 5,
              }}>
              Calda:
            </Text>
          </View>

          <Text style={styles.txtPreparo1}>
            Junte o abacaxi e o adoçante em uma panela, e leve ao fogo baixo.
            Cozinhe por 15 minutos ou até que os cubos de abacaxi comecem a se
            desmanchar.
          </Text>

          <Text style={styles.txtPreparo1}>
            Dissolva a fécula em 1 colher (sopa) de água (13 ml), e junte-a ao
            abacaxi, mexendo constantemente. Cozinhe por mais 3 minutos, passe a
            calda para uma vasilha e deixe-a esfriar.
          </Text>

          <Text style={styles.h2}>fonte: http://maisequilibrio.com.br/</Text>

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
