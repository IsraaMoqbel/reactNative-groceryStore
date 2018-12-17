import {Text, View, TouchableNativeFeedback,  StyleSheet, TextInput,Image, TouchableHighlight} from 'react-native';

import React, {Component} from 'react';

export class ChosenItem extends Component{
    state = {text: ''};
    render() {
        return (
            <View  style={styles.container}>
                <Text style={styles.welcome}>{this.props.details[0]}</Text>
                <Text style={styles.font}>{this.props.details[2]} شيكل</Text>
                <Image  source={require('./2.jpg')}
                        style={styles.image}/>
                <View  style={styles.list}>
                    <TouchableHighlight onPress={this._onPressButton} >
                        <Text  style={styles.amount}>1</Text>
                    </TouchableHighlight>
                    <Text  style={styles.amount} onPress={()=> alert('heeey')}>2</Text>
                    <Text  style={styles.amount}>3</Text>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        color: '#002',
        fontFamily:'Changa-Regular'
    },
    list: {
        display:'flex',
        flexDirection:'row'
    },
    amount: {
        borderColor:'lightblue',
        borderWidth:1,
        borderRadius:20,
        width:25,
        fontSize:20,
        textAlign:'center',
        margin:5
    },
    font: {
        fontFamily:'Changa-Regular',
        fontSize:12
    },
    image:{
        width: 120,
        height: 120,
        marginBottom:15
    }

});
