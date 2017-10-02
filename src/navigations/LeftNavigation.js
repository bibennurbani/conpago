import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export class LeftNavigation extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button iconLeft style={styles.navButton}>
          <Icon name='calendar' />
          <Text>Calendar</Text>
        </Button>
        <Button iconLeft style={styles.navButton}>
          <Icon name='mail' />
          <Text>Messages</Text>
        </Button>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navButton: {
    flex: 0.5
  }
});