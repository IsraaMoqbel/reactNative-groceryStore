import React, {Component} from 'react';
import {View,TextInput, Text} from 'react-native';

 const Input = ({label, placeholder,value, onChangeText, secureTextEntry}) =>{

    return (
        <View style={styles.view}>
        <Text style={styles.label}>{label}</Text>
            <TextInput placeholder={placeholder}
                       autoCorrect={false}
                       value={value}
                       style={styles.input}
                       onChangeText={onChangeText}
                       secureTextEntry={secureTextEntry}/>
        </View>
    )
}

const styles={
    view:{
        height:40,
        alignItems:'center',
        flexDirection: 'row',
        flex:1,
    },
    input: {
        color:'#000',
        fontSize:18,
        paddingLeft:5,
        paddingRight:5,
        lineHeight:20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    label: {
        fontSize:14,
        paddingLeft:5,
        paddingRight:5

    }
}

export default Input;