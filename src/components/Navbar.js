import React, {Component} from 'react';
import {View,Image, Text, TouchableNativeFeedback} from 'react-native';

export class Navbar extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback   onPress={()=> this.props.navigation.navigate('ChosenItems')}>
                <Image source={require('./../icons/cart.png')} style={styles.image}
                />
                </TouchableNativeFeedback>
                <Text style={[styles.font,styles.margin]}>{this.props.title}</Text>

                <TouchableNativeFeedback onPress={() =>  this.props.navigation.navigate('Items')}>
                <Image source={require('./../icons/menu.png')}
                style={styles.image}
                />
                </TouchableNativeFeedback>
                {/*<NavigationBar*/}
                    {/*title={<Text style={styles.font} onPress={()=> alert('heeey')}>{this.props.title}</Text>}*/}
                    {/*leftButton={<Image source={require('./../icons/cart.png')} style={styles.image}*/}
                                       {/*onPress={()=> alert('heeey')}/>}*/}
                    {/*rightButton={*/}
                            {/*<Image source={require('./../icons/menu.png')}*/}
                            {/*style={styles.image}*/}
                            {/*onPress={() => alert('Bulbazaaaavr!')}/>}*/}
                {/*/>*/}
            </View>
        );
    }
}

const styles = {
    container: {
        fontFamily:'Changa-Regular',
        backgroundColor:'white',
        zIndex:100,
        height:50,
        borderBottom:2,
        borderColor:'#ccc',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'space-between'


    },
    image: {
        width:22,
        height:22,
        margin:10
    },
    font: {
        fontFamily:'Changa-Regular',

    },
    margin: {
        margin:10
    }
};
