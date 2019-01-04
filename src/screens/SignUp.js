import {Text, View, TouchableNativeFeedback, TextInput,ImageBackground, Image} from 'react-native';
import {styles} from '../styles/SignupStyles'

import React, {Component} from 'react';
import firebase from 'firebase';

export class SignUp extends Component{
    static navigationOptions = {
        drawerLabel: () => null
    };
    state = {text: '',
        password:'',
        email:'',
        username:'',
        errorMsg:'',
        errorCode:''};

    renderButton(){
        const {email,password,username} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{this.props.navigation.navigate('Items', {otherParam: 'اختر نوع الخضار'});
            const userId = firebase.auth().currentUser.uid;
                firebase.database().ref('users/' + userId).set({
                    username: username,
                    email: email
                });
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
                    <Text style={styles.error}>{this.state.errorCode}: {"\n"} {this.state.errorMsg}</Text>
                    <View style={styles.row}>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={username => {
                                this.setState({username});
                            }}
                            value={this.state.username}
                            placeholder={'اسم المستخدم'}
                            placeholderTextColor='#000'
                        />
                        <Image source={require('./../icons/pass.png')}
                        style={styles.image}/>
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

                    </View>


                    <View style={{paddingBottom:40}}>
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackground()}
                            style={styles.submit}
                            onPress={() => {
                                this.renderButton()}}>
                            <View style={{width: 130, height: 35,justifyContent:'center',alignItems: 'center',
                                backgroundColor: '#fff',  borderWidth: 2, borderRadius: 20,
                                borderColor:'lightblue'}}
                            >
                                <Text style={{color:'lightblue', fontFamily:'Changa-Regular'}}>تسجيل</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.question}>
                        <Text style={styles.font}>
                            لديك حساب؟
                        </Text>
                        <Text  style={[styles.font,styles.underline]}
                              onPress={() => this.props.navigation.navigate('LogIn')}
                        >سجل دخول</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

}