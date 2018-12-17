import React from 'react';
import {View} from 'react-native';

const Container =(props)=>{
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles={
    container:{
        marginRight:5,
        marginLeft:5,
        marginTop:5,
    }
}

export default Container;