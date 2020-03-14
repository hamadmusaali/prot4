import { AppRegistry } from "react-native";
import MonitoramentoFerrugem from './src/MonitoramentoFerrugem';
import NovaAmostra from './src/NovaAmostra';
import AmostraMonitoramento from './src/AmostraMonitoramento';

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
    NovaAmostra: {
      screen: NovaAmostra,
      navigationOptions: {
        title: 'Nova Amostra de Monitoramento de Ferrugem'
      },
    },
    AmostraMonitoramento: {
      screen: AmostraMonitoramento,
      navigationOptions: {
        title: 'Amostra de Monitoramento da Ferrugem'
      },
    },

  })
);

export default Routes;

AppRegistry.registerComponent('prot4', () => Routes); 