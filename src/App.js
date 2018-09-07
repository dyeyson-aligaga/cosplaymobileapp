/**
 * Cosplan Mobile App
 * https://github.com/dyeyson-aligaga/cosplaymobileapp
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppNavigator from './AppNavigator';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated', 
    'Module RCTImageLoader'
]);

export default class App extends Component {
    render () {
        return (
            <AppNavigator />
        );
    }
}