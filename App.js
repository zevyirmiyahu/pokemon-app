import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';

import store from './store/Store';
import MainScreen from './screens/MainScreen';
import PokedexScreen from './screens/PokedexScreen';

const MainStackNavigator = createStackNavigator({
  Main: MainScreen,
  Pokedex: PokedexScreen
}); 

const App = createAppContainer(MainStackNavigator);
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
