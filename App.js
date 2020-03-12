import { AppRegistry } from "react-native";
import MonitoramentoFerrugem from './src/MonitoramentoFerrugem';
import NovaAnotCampo from './src/NovaAnotCampo';
import AnotCampos from './src/AnotCampos';
import infoAnotCampos from './src/infoAnotCampos';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'componentWillMount'
]);

const Routes = createAppContainer(
  createStackNavigator({
    MonitoramentoFerrugem: {
      screen: MonitoramentoFerrugem,
      navigationOptions: {
        title: 'Monitoramento da Ferrugem'
      },
    },
  })
);

export default Routes;

AppRegistry.registerComponent('prot4', () => Routes); 