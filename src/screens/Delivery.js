import {Text, View, TouchableNativeFeedback,  StyleSheet, TextInput} from 'react-native';

import React, {Component} from 'react';
import {Navbar} from './../components/Navbar';

export class Delivery extends Component{
    state = {
        city: '',
        sreet:'',
        area:'',
        building:'',
        apartment:''};
    static navigationOptions = {
        title: 'التوصيل',
        header: null
    };
    render() {
        return (
            <View>
                <Navbar title={'التوصيل'} navigation={this.props.navigation}/>
                <View  style={styles.bigContainer}>
                <View style={styles.container}>
                    <Text style={styles.Text} >المدينة</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={city => {
                            this.setState({city});
                        }}
                        value={this.state.city}
                        placeholder={'غزة'}
                    />
                </View>
                <View style={styles.container}>
                <Text style={styles.Text}>اسم الشارع</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={street => {
                        this.setState({street});
                    }}
                    value={this.state.street}
                    placeholder={'شارع عمر المختار'}
                />
                </View>
                <View style={styles.container}>
                    <Text style={styles.Text}>اسم المنطقة</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={area => {
                            this.setState({area});
                        }}
                        value={this.state.area}
                        placeholder={'الساحة'}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.Text}>اسم /رقم العمارة</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={building => {
                            this.setState({building});
                        }}
                        value={this.state.text}
                        placeholder={'عمارة الحويطي'}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.Text}>رقم الشقة/ الطابق</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={apartment => {
                            this.setState({apartment});
                        }}
                        value={this.state.apartment}
                        placeholder={'شقة رقم 5'}
                    />
                </View>
                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    >
                    <View style={{width: 150, height: 40,justifyContent:'center',alignItems: 'center',
                        backgroundColor: '#fff',  borderWidth: 2, borderRadius: 20, marginTop:25,
                        borderColor:'lightblue'}}>
                        <Text style={styles.Text} onPress={()=>{ this.props.navigation.navigate('Items')}}>موافق</Text>
                    </View>
                </TouchableNativeFeedback>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        borderColor:'#444',
        alignSelf:'flex-end',
        margin:7
    },
    welcome: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#002',
    },

    textInput: {
        margin: 5,
        paddingLeft: 10,
        backgroundColor: '#FFF',
        width:250,
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:3,
        height:30,
        padding:5,
        fontFamily:'Changa-Regular'
    },

    bigContainer: {
        alignItems:'center',
        margin:40,
        marginTop:0
    },
    Text: {
        fontFamily:'Changa-Regular'
    }
});
