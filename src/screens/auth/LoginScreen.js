import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { 
    FormInput,
    Button
} from 'react-native-elements';


export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <FormInput 
                    placeholder="Email/Username"
                />
                <FormInput 
                    placeholder="Password"
                />
                <Button 
                    backgroundColor="#0092C9"
                    title="LOGIN"
                    buttonStyle={styles.loginButton}
                    containerViewStyle={styles.loginButtonContainer}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 16
    },
    mainText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    loginButton: {
        width: "100%",
    },
    loginButtonContainer: {
        width: "100%"
    }
});