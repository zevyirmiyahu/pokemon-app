import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { connect} from 'react-redux';

class Test extends Component {

  render() {
    return (
      <View>
          
        <Text> Test </Text>
        <Image 
            source={{uri: this.props.pokemon.image}}
        />
      </View>
    );
  }
}

mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        pokemonList: state.pokemonList
    }
}

export default connect(mapStateToProps)(Test);
