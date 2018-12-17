import {Text, View, TouchableNativeFeedback, TextInput, ImageBackground, Image} from 'react-native';
import {styles} from '../styles/LoginStyles.js';

import React, {Component} from 'react';
import firebase from 'firebase';

export class LogIn extends Component{
    static navigationOptions = {
        title: 'Log in screen',
        header: null
    };
    state = {text: '',
        password:'',
        email:'',
        errorMsg:'',
        errorCode:''};

    renderButton(){
        const {email,password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
                this.setState({email:'', password:''});
                this.props.navigation.navigate('Items', {otherParam: 'اختر نوع الخضار'});
            })
            .catch((error)=> {
                this.setState({errorMsg:error.message});
                this.setState({errorCode:error.code});
            })
    }

    render() {
        return (
            <View  style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('./../icons/back.png' )}
                >
                <Text style={styles.welcome}>L O G O</Text>
                    <Text style={styles.error}>{this.state.errorCode}: {'\n'} {this.state.errorMsg}</Text>
                    <View style={{marginBottom:25}}>
                        <View style={styles.row}>

                            <TextInput
                                style={styles.textInput}
                                onChangeText={email => {
                                    this.setState({email});
                                }}
                                value={this.state.email}
                                placeholder={'رقم الموبايل'}
                                placeholderTextColor='#000'
                            />
                            <Image source={require('./../icons/mobile.png')} style={styles.image}/>
                        </View>
                        <View style={styles.row}>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={password => {
                                    this.setState({password});
                                }}
                                value={this.state.password}
                                placeholder={'كلمة المرور'}
                                placeholderTextColor='#000'
                                // secureTextEntry={true}
                            />
                            <Image source={require('./../icons/pass.png')} style={styles.image}/>
                        </View>
                    </View>


                    <View style={{paddingBottom:40}}>
                        <Text style={styles.font}>
                            نسيت كلمة المرور؟
                        </Text>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}
                            style={styles.submit}
                            onPress={() => this.renderButton()}>
                            <View style={{width: 130, height: 35,justifyContent:'center',alignItems: 'center',
                                backgroundColor: '#fff',  borderWidth: 2, borderRadius: 20,
                                borderColor:'lightblue'}}
                            >
                                <Text style={{color:'lightblue'}}>دخـــول</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.font}>
                            ليس لديك حساب؟
                        </Text>
                        <Text onPress={() => this.props.navigation.navigate('SignUp')}
                              style={[styles.font,styles.underline]}>سجل الآن</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}

