import React from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from '../screens/Main';
import CalendarScreen from '../screens/Calendar';
import MessageScreen from '../screens/Messages';
import NotepadScreen from '../screens/Notepad';
import PhotosScreen from '../screens/Photos';
import SettingScreen from '../screens/Setting';

const ConpagoNavigation = StackNavigator(
    {
        Home: { screen: MainScreen },
        Calendar: { screen: CalendarScreen },
        Messages: { screen: MessageScreen },
        Photos: { screen: PhotosScreen },
        Notepad: { screen: NotepadScreen },
        Setting: { screen: SettingScreen },
    },
    {
        initialRouteName: "Home",
        headerMode: "none",
    }
);

export default ConpagoNavigation;
