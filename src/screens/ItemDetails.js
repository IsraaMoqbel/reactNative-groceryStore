import {Text, View, StyleSheet, Image, ScrollView,TouchableHighlight, TouchableNativeFeedback} from 'react-native';

import React, {Component} from 'react';
import {ChosenItem} from './../components/ChosenItem';
import {Navbar} from './../components/Navbar';

export class ItemDetails extends Component{
    static navigationOptions = {
        drawerLabel: () => null
    };
    state={
        pressStatus0:false,
        pressStatus1:false,
        pressStatus2:false
    }
    render() {
        return (
            <View>
                <Navbar title={'بطاطس'} navigation={this.props.navigation}/>
                <View  style={styles.bigContainer}>
                <ScrollView>
                    <Text style={styles.font}>طريقة التقطيع</Text>
                    <View style={styles.container} >
                        <View style={styles.column}>
                            <TouchableNativeFeedback
                                onPress={()=> this.setState({pressStatus0:!this.state.pressStatus0, pressStatus1:false, pressStatus2:false})}>
                            <Image source={require('./2.jpg')}
                                   style={this.state.pressStatus0 ? { borderColor:'lightblue',
                                       width: 100,
                                       height: 100,
                                       borderWidth:1,
                                       borderRadius:3}: { borderColor:'grey',
                                       width: 100,
                                       height: 100,
                                       borderWidth:1,
                                       borderRadius:3}}
                            />
                            </TouchableNativeFeedback>
                            <Text style={styles.font}>شرائح</Text>
                        </View>
                        <View style={styles.column}>
                            <TouchableNativeFeedback
                                onPress={()=> this.setState({pressStatus1:!this.state.pressStatus1,  pressStatus0:false, pressStatus2:false})}>
                            <Image source={require('./2.jpg')}
                                   style={this.state.pressStatus1 ? { borderColor:'lightblue',
                                       width: 100,
                                       height: 100,
                                       borderWidth:1,
                                       borderRadius:3}: { borderColor:'grey',
                                       width: 100,
                                       height: 100,
                                       borderWidth:1,
                                       borderRadius:3}}
                            />
                            </TouchableNativeFeedback>
                            <Text style={styles.font}>مكعبات</Text>
                        </View>
                        <View style={styles.column}>
                            <TouchableNativeFeedback
                                onPress={()=> this.setState({pressStatus2:!this.state.pressStatus2,  pressStatus1:false, pressStatus0:false})}>
                            <Image source={require('./2.jpg')}
                                   style={this.state.pressStatus2 ? { borderColor:'lightblue',
                                       width: 100,
                                       height: 100,
                                       borderWidth:1,
                                       borderRadius:3}: { borderColor:'grey',
                                       width: 100,
                                       height: 100,
                                       borderWidth:1,
                                       borderRadius:3}}/>
                            </TouchableNativeFeedback>
                            <Text style={styles.font}>أصابع</Text>
                        </View>

                    </View>
                    <Text style={styles.font}>الوزن (بالكيلو)</Text>
                    <View  style={styles.uncenteredList}>

                            <Text  style={styles.amount}>1</Text>
                        <Text  style={styles.amount}>2</Text>
                        <Text  style={styles.amount}>3</Text>
                    </View>
                    <Text style={styles.font}>  السعر</Text>
                    <Text style={[styles.font,styles.color]}>  10 شيكل</Text>
                    <View style={styles.list}>
                        <TouchableHighlight onPress={()=>{ this.props.navigation.navigate('Items')}}>
                            <View style={{width: 150, height: 40,justifyContent:'center',alignItems: 'center',
                                backgroundColor: 'lightblue',  borderWidth: 2, borderRadius: 20,margin:10, marginTop:25,
                                borderColor:'lightblue'}}>
                                <Text style={[styles.font,styles.white]}>استكمال التسوق</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=>{ this.props.navigation.navigate('ChosenItems')}}>
                            <View style={{width: 150, height: 40,justifyContent:'center',alignItems: 'center',
                                backgroundColor: '#fff',  borderWidth: 2, borderRadius: 20,margin:10, marginTop:25,
                                borderColor:'lightblue'}}>
                            <Text style={[styles.font,styles.color]}>أضف إلى السلة</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
        marginBottom:20

    },
    welcome: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#002',
    },
    deliver: {
        width:60,
        borderWidth:2,
        borderRadius:10,
        alignSelf:'center',
        alignContent:'center',
        borderColor:'lightblue'
    },
    sum: {
        alignSelf:'center',
        alignContent:'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    amount: {
        borderWidth:1,
        borderColor:'lightblue',
        borderRadius:20,
        width:30,
        height:30,
        fontSize:20,
        textAlign:'center',
        margin:10,
        color:'lightblue'
    },
    list: {
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        alignContent:'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    uncenteredList: {
        display:'flex',
        flexDirection:'row',
        alignSelf:'flex-end',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
        marginBottom:20
    },
    column: {
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        margin:5
    },
    font: {
        fontFamily:'Changa-Regular',
        color:'#000'
    },
    bigContainer: {
        alignItems:'center',
        margin:10,
        marginTop:10
    },
    color: {
        color:'lightblue'
    },
    white : {
        color:'white'
    },
});
