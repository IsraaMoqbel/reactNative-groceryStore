import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, TouchableNativeFeedback, TextInput, ImageBackground, Image} from 'react-native';
import Background from './components/Background';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button';
export default class App extends Component {
    render() {
        return (
            <Container>



                <Background>
                    <View style={styles.view}>
                        <Text style={styles.text}> LOGO</Text>
                    </View>
                    <View style={styles.view}>
                        <Input label={"username"} placeholder={"Add username"} secureTextEntry={false} />
                    </View>

                    <View style={styles.view}>
                        <Input  label={"Password"} placeholder={"Add password"} secureTextEntry={false}/>
                    </View>

                    <View style={styles.view}>
                        <Input  label={"Mobile"} placeholder={"Add number"} secureTextEntry={true} />

                    </View>
                    <Button label={'Log in'}/>
                </Background>
            </Container>

        )
    }
}
const styles={
    text:{
        fontSize:40,
        padding:5
    },
    view:{
        alignItems: 'center',
        padding:30,
    }
}