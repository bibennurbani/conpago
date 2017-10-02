import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, TouchableOpacity, Alert, View, } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { LeftNavigation } from '../navigations/LeftNavigation';

export default class MainScreen extends React.Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <LeftNavigation />
                </View>
                <View style={styles.midle}>
                    <Text>Middle Side</Text>
                </View>
                <View style={styles.right}>
                    <Text>Right Side</Text>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    left: {
        flex: 0.2,
        backgroundColor: 'red'
    },
    midle: {
        flex: 0.6,
        backgroundColor: 'white'
    },
    right: {
        flex: 0.2,
        backgroundColor: 'blue'
    }
});
