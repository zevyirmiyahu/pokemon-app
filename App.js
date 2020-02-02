import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Provider } from 'react-redux';

import store from './src/store/Store';
import MainScreen from './src/screens/MainScreen';
import ItemScreen from './src/screens/ItemScreen';
import PokedexScreen from './src/screens/PokedexScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Main: MainScreen,
  Pokemon: PokedexScreen,
  Items: ItemScreen
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
