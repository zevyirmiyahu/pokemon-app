import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from 'react-redux';

import store from './src/store/Store';
import MainScreen from './src/screens/MainScreen';
import PokedexScreen from './src/screens/PokedexScreen';
import TitleScreen from './src/screens/TitleScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Main: MainScreen,
  Pokedex: PokedexScreen
});

const StackNavigator = createStackNavigator({
  Title: TitleScreen,
  Main: BottomTabNavigator,
}); 

const App = createAppContainer(StackNavigator);
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
