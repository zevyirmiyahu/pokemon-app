import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => props.navigation.navigate(props.title)}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8a211a', // darker red
    backgroundColor: '#eb4034', // red
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  }

});
