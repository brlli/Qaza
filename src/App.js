import {createStackNavigator,createAppContainer} from 'react-navigation';
import {I18nManager} from 'react-native';
I18nManager.forceRTL(true);
import MainMenu from './pages/MainMenu';
import AboutUs from './pages/AboutUs';
import CountryList from './pages/CountrysList';
import Description from './pages/Description';
import ProvinceList from  './pages/ProvinceList';
const App = createStackNavigator({
  MainMenu:{screen:MainMenu},
  AboutUs:{screen:AboutUs},
  CountryList:{screen:CountryList},
  Description:{screen:Description},
  ProvinceList:{screen:ProvinceList},
});
export default createAppContainer(App);

