import {createStackNavigator} from 'react-navigation-stack';

/**
 * Importando as paginas de navegação da Stack =================================
 */
import Home from '../Pages/Home';
import Sobremesas from '../Pages/Sobremesas';
import Salgadas from '../Pages/Salgadas';
import Doces from '../Pages/Doces';
import Bolos from '../Pages/Bolos';

/**Page de Sobremesas */

import Bolinhodetapioca from '../Pages/Screens/Bolinhodetapioca';
import SorvetedeTapioca from '../Pages/Screens/SorvetedeTapioca';
import SacoledeTapioca from '../Pages/Screens/SacoledeTapioca';
import GeladoFrutas from '../Pages/Screens/GeladoFrutas';
import SobremesaFacil from '../Pages/Screens/SobremesaFacil';
import CremeGoiabada from '../Pages/Screens/CremedeGoiabada';
import GeleiadeFramboesa from '../Pages/Screens/GeleiadeFramboesa';
import Docinhos from '../Pages/Screens/Docinhos';
import PaodeQueijo from '../Pages/Screens/PaodeQueijo';
import PizzaFrigideira from '../Pages/Screens/PizzaFrigideira';
import BolinhoEstudante from '../Pages/Screens/BolinhoEstudante';
import TapiocaChocolate from '../Pages/Screens/TapiocaChocolate';

/**Page de Salgados */

import Omelete from '../Pages/Screens/Omelete';
import Legumes from '../Pages/Screens/Legumes';
import Carnedosol from '../Pages/Screens/Carnedosol';
import Atum from '../Pages/Screens/Atum';
import Frango from '../Pages/Screens/Frango';
import Torta from '../Pages/Screens/Torta';
import Dadinho from '../Pages/Screens/Dadinho';
import Coxinha from '../Pages/Screens/Coxinha';
import Mexicana from '../Pages/Screens/Mexicana';
import Panqueca from '../Pages/Screens/Panqueca';
import Paozinho from '../Pages/Screens/Paozinho';
import Lasanha from '../Pages/Screens/Lasanha';

/**Page de Doces */

import Cuscuz from '../Pages/Screens/Cuscuz';
import doceChocolate from '../Pages/Screens/doceChocolate';
import Cestinha from '../Pages/Screens/Cestinha';
import CremeCoco from '../Pages/Screens/CremeCoco';
import CafeDoce from '../Pages/Screens/CafeDoce';
import Morango from '../Pages/Screens/Morango';
import Manjar from '../Pages/Screens/Manjar';
import Abobora from '../Pages/Screens/Abobora';
import Abacaxi from '../Pages/Screens/Abacaxi';
import DocedeLeite from '../Pages/Screens/DocedeLeite';
import Brownie from '../Pages/Screens/Brownie';
import Coco from '../Pages/Screens/Coco';

/**Page de Bolos */

import Liquidificador from '../Pages/Screens/Liquidificador';
import BoloTapioca from '../Pages/Screens/BoloTapioca';
import Cremoso from '../Pages/Screens/Cremoso';
import Tripioca from '../Pages/Screens/Tripioca';
import Simples from '../Pages/Screens/Simples';
import CarocoPiaui from '../Pages/Screens/CarocoPiaui';
import BoloChocolate from '../Pages/Screens/BoloChocolate';
import Vulcao from '../Pages/Screens/Vulcao';
import Presunto from '../Pages/Screens/Presunto';
import Salsinha from '../Pages/Screens/Salsinha';

console.disableYellowBox = true;
const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Sobremesas: {
      screen: Sobremesas,
      navigationOptions: {
        title: 'Sobremesas',
      },
    },
    Salgadas: {
      screen: Salgadas,
      navigationOptions: {
        title: 'Salgadas',
      },
    },
    Doces: {
      screen: Doces,
      navigationOptions: {
        title: 'Doces',
      },
    },
    Bolos: {
      screen: Bolos,
      navigationOptions: {
        title: 'Bolos',
      },
    },
    Bolinhodetapioca: {
      screen: Bolinhodetapioca,
      navigationOptions: {
        title: 'Bolinho de tapioca',
        header: null,
      },
    },
    SorvetedeTapioca: {
      screen: SorvetedeTapioca,
      navigationOptions: {
        title: 'Sorvete de Tapioca',
        header: null,
      },
    },

    SacoledeTapioca: {
      screen: SacoledeTapioca,
      navigationOptions: {
        title: 'Sacolé de Tapioca',
        header: null,
      },
    },
    GeladoFrutas: {
      screen: GeladoFrutas,
      navigationOptions: {
        title: 'Gelado de Frutas',
        header: null,
      },
    },
    SobremesaFacil: {
      screen: SobremesaFacil,
      navigationOptions: {
        title: 'Sobremesa Fácil',
        header: null,
      },
    },
    CremeGoiabada: {
      screen: CremeGoiabada,
      navigationOptions: {
        title: 'Creme Goiabada',
        header: null,
      },
    },
    GeleiadeFramboesa: {
      screen: GeleiadeFramboesa,
      navigationOptions: {
        title: 'Geleia de Framboesa',
        header: null,
      },
    },
    Docinhos: {
      screen: Docinhos,
      navigationOptions: {
        title: 'Docinhos de Tapioca',
        header: null,
      },
    },
    PaodeQueijo: {
      screen: PaodeQueijo,
      navigationOptions: {
        title: 'Pao de Queijo',
        header: null,
      },
    },
    PizzaFrigideira: {
      screen: PizzaFrigideira,
      navigationOptions: {
        title: 'Pizza de Frigideira',
        header: null,
      },
    },
    BolinhoEstudante: {
      screen: BolinhoEstudante,
      navigationOptions: {
        title: 'Bolinho Estudante',
        header: null,
      },
    },
    TapiocaChocolate: {
      screen: TapiocaChocolate,
      navigationOptions: {
        title: 'Tapioca Chocolate',
        header: null,
      },
    },
    Omelete: {
      screen: Omelete,
      navigationOptions: {
        title: 'Omelete de Tapioca',
        header: null,
      },
    },
    Legumes: {
      screen: Legumes,
      navigationOptions: {
        title: 'Tapioca com Legumes',
        header: null,
      },
    },
    Carnedosol: {
      screen: Carnedosol,
      navigationOptions: {
        title: 'Tapioca com Carne do Sol',
        header: null,
      },
    },
    Atum: {
      screen: Atum,
      navigationOptions: {
        title: 'Tapioca com Atum',
        header: null,
      },
    },
    Frango: {
      screen: Frango,
      navigationOptions: {
        title: 'Tapioca com Frango',
        header: null,
      },
    },
    Torta: {
      screen: Torta,
      navigationOptions: {
        title: 'Torta de Tapioca',
        header: null,
      },
    },
    Dadinho: {
      screen: Dadinho,
      navigationOptions: {
        title: 'Dadinho Assado',
        header: null,
      },
    },
    Coxinha: {
      screen: Coxinha,
      navigationOptions: {
        title: 'Coxinha de Tapioca',
        header: null,
      },
    },
    Mexicana: {
      screen: Mexicana,
      navigationOptions: {
        title: 'Tapioca Mexicana',
        header: null,
      },
    },
    Panqueca: {
      screen: Panqueca,
      navigationOptions: {
        title: 'Panqueca de Tapioca',
        header: null,
      },
    },
    Paozinho: {
      screen: Paozinho,
      navigationOptions: {
        title: 'Paozinho de Tapioca',
        header: null,
      },
    },
    Lasanha: {
      screen: Lasanha,
      navigationOptions: {
        title: 'Lasanha de Crepioca',
        header: null,
      },
    },
    Cuscuz: {
      screen: Cuscuz,
      navigationOptions: {
        title: 'Cuscuz Doce',
        header: null,
      },
    },
    doceChocolate: {
      screen: doceChocolate,
      navigationOptions: {
        title: 'Tapioca de Brigadeiro',
        header: null,
      },
    },
    Cestinha: {
      screen: Cestinha,
      navigationOptions: {
        title: 'Cestinha de Tapioca',
        header: null,
      },
    },
    CremeCoco: {
      screen: CremeCoco,
      navigationOptions: {
        title: 'Creme c/ Coco',
        header: null,
      },
    },
    CafeDoce: {
      screen: CafeDoce,
      navigationOptions: {
        title: 'Café c/ Doce de leite',
        header: null,
      },
    },
    Morango: {
      screen: Morango,
      navigationOptions: {
        title: 'Morango c/ Leite Condesado',
        header: null,
      },
    },
    Manjar: {
      screen: Manjar,
      navigationOptions: {
        title: 'Manjar de Tapioca',
        header: null,
      },
    },
    Abobora: {
      screen: Abobora,
      navigationOptions: {
        title: 'Tapioca doce de abóbora',
        header: null,
      },
    },
    Abacaxi: {
      screen: Abacaxi,
      navigationOptions: {
        title: 'Pudim de Abacaxi',
        header: null,
      },
    },
    DocedeLeite: {
      screen: DocedeLeite,
      navigationOptions: {
        title: 'Doce de Leite',
        header: null,
      },
    },
    Brownie: {
      screen: Brownie,
      navigationOptions: {
        title: 'Brownie de Tapioca',
        header: null,
      },
    },
    Coco: {
      screen: Coco,
      navigationOptions: {
        title: 'Tapioca c/ Coco',
        header: null,
      },
    },
    Liquidificador: {
      screen: Liquidificador,
      navigationOptions: {
        title: 'Bolo de Liquidificador',
        header: null,
      },
    },
    BoloTapioca: {
      screen: BoloTapioca,
      navigationOptions: {
        title: 'Bolo de Tapioca',
        header: null,
      },
    },
    Cremoso: {
      screen: Cremoso,
      navigationOptions: {
        title: 'Bolo Cremoso',
        header: null,
      },
    },
    Tripioca: {
      screen: Tripioca,
      navigationOptions: {
        title: 'Bolo Tripioca',
        header: null,
      },
    },
    Simples: {
      screen: Simples,
      navigationOptions: {
        title: 'Bolo Simples',
        header: null,
      },
    },

    CarocoPiaui: {
      screen: CarocoPiaui,
      navigationOptions: {
        title: 'Bolo Caroço do Piauí',
        header: null,
      },
    },

    BoloChocolate: {
      screen: BoloChocolate,
      navigationOptions: {
        title: 'Bolo c/ Chocolate',
        header: null,
      },
    },
    Vulcao: {
      screen: Vulcao,
      navigationOptions: {
        title: 'Bolo Vulcão ',
        header: null,
      },
    },
    Presunto: {
      screen: Presunto,
      navigationOptions: {
        title: 'Bolinho de Presunto ',
        header: null,
      },
    },

    Salsinha: {
      screen: Salsinha,
      navigationOptions: {
        title: 'Bolinho com Salsinha ',
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
  },
);

export default MainNavigator;
