import {createStackNavigator} from 'react-navigation-stack';

/**
 * Importando as paginas de navegação da Stack =================================
 */
import Home from '../Pages/Home';
import Sobremesas from '../Pages/Sobremesas';
import Salgadas from '../Pages/Salgadas';
import Doces from '../Pages/Doces';
import Bolos from '../Pages/Bolos';

import Bolinhodetapioca from '../Pages/Screens/Bolinhodetapioca';
import Omeletedetapioca from '../Pages/Screens/Omeletedetapioca';
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
    Omeletedetapioca: {
      screen: Omeletedetapioca,
      navigationOptions: {
        title: 'Omelete de tapioca',
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
  },
  {
    initialRouteName: 'Home',
    // headerMode: 'none',
  },
);

export default MainNavigator;
