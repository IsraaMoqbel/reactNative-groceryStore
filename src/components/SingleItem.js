import {Text, View, StyleSheet, Image} from 'react-native';

import React, {Component} from 'react';

export class SingleItem extends Component{
    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.welcome}>{this.props.details[0]}</Text>
                <Image  source={require('./2.jpg')}
                        style={styles.image}/>
                <Text style={styles.font}> {this.props.details[2]} شيكل </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily:'Changa-Regular',
        width:181,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: '#002',
        fontFamily:'Changa-Regular'
    },
    font: {
        fontFamily:'Changa-Regular',
        paddingBottom:10,
        fontSize:12
    },
    image:{
        width: 120,
        height: 120,
        marginBottom:15
    }
});
