/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';


import {createStackNavigator, createAppContainer} from 'react-navigation';

import {LogIn} from './src/screens/LogIn';
import {SignUp} from './src/screens/SignUp';
import {ChosenItems} from './src/screens/ChosenItems';
import {Background} from './src/components/Background';
import {Delivery} from './src/screens/Delivery';
import {ItemDetails} from './src/screens/ItemDetails';
import {Items} from './src/screens/Items';


type Props = {};
 export default class App extends Component<Props> {
     state={
         loggedIn:null
     }
  render() {
    return (
        <AppContainer/>
    );
  }
     initializeFirebase= ()=> {
         let config = {
             apiKey: "AIzaSyD_68Wn0xXOKpLJ23PRCXGOth1i4xolH7o",
             authDomain: "grocery-882fa.firebaseapp.com",
             databaseURL: "https://grocery-882fa.firebaseio.com",
             projectId: "grocery-882fa",
             storageBucket: "",
             messagingSenderId: "255827487158"
         };
         firebase.initializeApp(config);
     }

  componentDidMount(){
      if (!firebase.apps.length) {
          this.initializeFirebase();
      }

         checkAuth= () => {
             firebase.auth().onAuthStateChanged((user)=>{
                 if(user) {
                    this.setState({LoggedIn:true})
                     // this.props.navigation.navigate('Items')
                 } else {
                     this.setState({LoggedIn:false})
                     // this.props.navigation.navigate('LogIn')
                 }
             })
      }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Stack = createStackNavigator({
    LogIn: {screen: LogIn},
    ItemDetails: {screen: ItemDetails},
    ChosenItems: {screen: ChosenItems},
    Delivery: {screen: Delivery},
    Items: {screen: Items},
    SignUp: {screen: SignUp},

});

const AppContainer =  createAppContainer(Stack);

