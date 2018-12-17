import {View, StyleSheet,Text, FlatList, TouchableNativeFeedback} from 'react-native';

import React, {Component} from 'react';
import {ChosenItem} from './../components/ChosenItem';
import {Navbar} from './../components/Navbar';

export class ChosenItems extends Component{
    static navigationOptions = {
        title: 'السلة الشرائية',
        header: null
    };
    renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <ChosenItem key={{index}} details={item}/>
            </View>
        );
    };
    render() {
        let initialArr = [["خيار","image1","2"],["طماطم","image2","5"]];
        return (
            <View>
                <Navbar title={'السلة الشرائية'} navigation={this.props.navigation}/>
                <FlatList
                    data={initialArr}
                    style={styles.container}
                    renderItem={this.renderItem}
                    numColumns={2}
                />
                <Text style={styles.welcome}> المجموع 7 شيكل</Text>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                    style={styles.submit}
                    onPress={() => null}>
                    <View style={styles.button}
                    >
                        <Text style={styles.buttonText}
                              onPress={()=>{ this.props.navigation.navigate('Delivery')}}>موافق</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ccc',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#002',
        fontFamily:'Changa-Regular'
    },
    item: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: .5,
        width:181,
    },
    button: {
        width: 130,
        height: 35,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 20,
        borderColor:'lightblue',
        alignSelf:'center',
    },
    buttonText: {
        color:'lightblue',
        fontFamily:'Changa-Regular',
        fontSize:15
    }

});
