import React, {Component} from 'react';

import {Platform, StyleSheet, Text, View, Button, TouchableNativeFeedback, TextInput, ImageBackground, Image} from 'react-native';

const Background = (props)=> {
    const {children}= props;
    return (
        <ImageBackground
         source={require('../icons/back.png')}
         style={{width:'100%', height:'100%',}}>
            {children}
        </ImageBackground>
    )
}
export default Background