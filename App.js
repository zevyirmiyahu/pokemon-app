import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import { Provider } from 'react-redux';

import store from './src/store/Store';
import MainScreen from './src/screens/MainScreen';
import ItemScreen from './src/screens/ItemScreen';
import PokedexScreen from './src/screens/PokedexScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='home' type={FontAwesome5}
          color='#e91e63' />
      )
    }
  },
  Pokemon: {
    screen: PokedexScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='adb' type='material'
          color='#e91e63' />
      )
    }
  },
  Items: {
    screen: ItemScreen,
    navigationOptions: {
      tabBarIcon: () => (
        <Icon name='shopping-cart' type='material'
          color='#e91e63' />
      )
    }
  },
},
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        labelStyle: {
          fontSize: 18,
          fontFamily: 'Heiti SC'
        },
        labelPosition: 'beside-icon',
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',
      },
    },

  });

// const StackNavigator = createStackNavigator({
//   Title: TitleScreen,
//   Main: BottomTabNavigator,
// }); 

const App = createAppContainer(BottomTabNavigator);
export default App;

// export default class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <SafeAreaView>
//           <View>
//             <PokedexScreen />
//           </View>
//         </SafeAreaView>
//       </Provider>
//     )
//   }
// }
