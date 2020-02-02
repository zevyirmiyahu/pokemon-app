import React, { Component } from 'react';
import { View, Text, Modal, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default class TitleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
        };
    }

    render() {
        let props = { ...this.props, title: "Main" };
        let size = 50;
        return (
            <View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType='slide'
                    
                >
                    <View style={{ padding: 50 }}>
                        <Image
                            style={{ alignSelf: 'center', width: 410, height: 154 }}
                            source={require('../images/pokemon-logo.png')}
                        />

                    </View>
                    <Button {...props} />

                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});