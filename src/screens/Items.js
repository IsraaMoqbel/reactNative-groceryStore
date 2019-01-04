import {View, StyleSheet, FlatList, TouchableNativeFeedback, TouchableHighlight,Text} from 'react-native';

import React, {Component} from 'react';
import SingleItem from './../components/SingleItem';
import {Navbar} from './../components/Navbar';
import firebase from 'firebase';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem} from "../Actions/ItemsAction";

 class Items extends Component{
   constructor(props) {
         super(props);
         this.state = {
         x:'Heeeeyyy'
         };
     }
    static navigationOptions = {
        drawerLabel: 'القائمة',
    };

    renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.item}
            >
                <SingleItem key={index} details={item} navigation={this.props.navigation}/>
            </View>
        );
    };

render() {

        let initialArr = [["طماطم","image1","8"],["خيار","image2","4"],["كوسا","image2","4"],["باذنجان","image2","4"]
            ,["بطاطا","image2","4"]];
        const { navigation } = this.props;
        const otherParam = navigation.getParam('otherParam');
        return (
            <View style={styles.container}>
                <Navbar  title={'اختر نوع الخضار'} navigation={this.props.navigation}/>
                <FlatList
                    data={this.props.possible}
                    style={styles.container}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ccc'
    },
    welcome: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        margin: 10,
        color: '#002',
    },
    itemText: {
        color: '#fff',
    },
    item: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        width:181,
    },
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addItem
    }, dispatch)
)


const mapStateToProps = (state) => {
    return {
    possible:state.itemsReducer.possible}
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
