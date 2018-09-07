/**
 * 
 */

import React, { Component } from 'react';
import { 
    createSwitchNavigator,
    createStackNavigator 
} from 'react-navigation';
import { 
    HomeScreen,
    AuthLoginScreen
} from './screens';

const AuthenticationNavigator = createStackNavigator({
    Login: AuthLoginScreen
});

export default createSwitchNavigator({
    Auth: AuthenticationNavigator,
    Home: HomeScreen
});
