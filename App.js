import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native'

import MyApp from './src/DrawerNavigator'
import firebase from 'firebase';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools, devToolsEnhancer  } from 'redux-devtools-extension';

import {connect, Provider} from 'react-redux';
import Reducers from './src/Reducers/ItemsReducer';

import {bindActionCreators} from "redux";

import {addItem} from "./src/Actions/ItemsAction";

const store = createStore(Reducers);

 export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
            <MyApp/>
        </View>
      </Provider>
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
  }

}
