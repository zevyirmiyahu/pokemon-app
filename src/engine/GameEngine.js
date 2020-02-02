
/**
 * This is all the game logic
 */

import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
export default class GameEngine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        };
    }

    // This screen is to notify the player when he finds a Pokemon
    Alert = () => {
        return (
            <Modal
                visible={this.state.modalVisible}
                transparent={false}
                slide='fade'
            >
                <View style={styles.alertContainter}>
                    <Text style={styles.header}>Pokemon Discovered!</Text>
                    <Text style={styles.subHeader}>You found a ... Pikachu!</Text>
                    <Divider style={{ height: 20, backgroundColor: 'blue' }} />
                    <View style={styles.buttonsGroupContainer}>
                        <this.CatchButton />
                        <this.RunButton />
                    </View>
                </View>
            </Modal>
        );
    }

    // Player chooses to catch the discovered Pokemon
    CatchButton = () => {
        return (
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Catch!</Text>
            </TouchableOpacity>
        );
    }

    // Player chooses NOT to catch the discovered Pokemon
    RunButton = () => {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({ modalVisible: false })}
            >
                <Text style={styles.buttonText}>Run Away!</Text>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            <View>
                <this.Alert />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    alertContainter: {
        backgroundColor: '#CE2029', // fire engine red
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    header: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold'
    },
    subHeader: {
        color: 'white',
        fontSize: 28,
        fontStyle: 'italic'
    },
    buttonsGroupContainer: {
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    button: {
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#8a211a', // darker red
        backgroundColor: '#eb4034', // red
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
