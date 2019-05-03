import {createStackNavigator,createAppContainer} from 'react-navigation';
import MainMenu from './pages/MainMenu';
import AboutUs from './pages/AboutUs';
import CountryList from './pages/CountrysList';
import Description from './pages/Description';
const App = createStackNavigator({
  MainMenu:{screen:MainMenu},
  AboutUs:{screen:AboutUs},
  CountryList:{screen:CountryList},
  Description:{screen:Description},
});
export default createAppContainer(App);

