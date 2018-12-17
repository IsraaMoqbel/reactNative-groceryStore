import React, {Component} from 'react';
import {View,TextInput, Text,TouchableOpacity} from 'react-native';

const Button = ({label}) =>{

    return (
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    )
}
const styles={
    btn:{
        borderRadius:10,
        borderColor:'#65F',
        borderWidth:1,
        paddingLeft:5,
        paddingRight:5
    },

    label: {
        fontSize:14,
        paddingLeft:5,
        paddingRight:5
    },
    text: {
        alignSelf:'stretch',
        fontSize:18,
        // fontColor:'#24ffc7',
        alignSelf:'center',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        fontWeight:'bold',
        margin:'auto'


    }

}

export default Button;