import {View, StyleSheet, FlatList} from 'react-native';

import React, {Component} from 'react';
import {SingleItem} from './../components/SingleItem';
import {Navbar} from './../components/Navbar';
import firebase from 'firebase';

// const database = firebase.database();
export class Items extends Component{
    state={
        x:[],
    };
    static navigationOptions = {
        title: 'اختر نوع الخضار',
        header: null
    };

    renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.item}
            >
                <SingleItem key={{index}} details={item}/>
            </View>
        );
    };

    // retrieve() {
    //     firebase.database().ref('/items').then((snapshot)=> {
    //         if(snapshot) {
    //             this.setState({ x: snapshot.val() })
    //         } else {
    //             this.setState({ x:'xx' })
    //         }
    //     });
    // }

    componentDidMount(){
    }

    render() {
        let initialArr = [["اسم8","image1","8"],["اسم4","image2","4"],["اسم4","image2","4"],["اسم4","image2","4"]
            ,["اسم4","image2","4"]];
        const { navigation } = this.props;
        const otherParam = navigation.getParam('otherParam');

        return (
            <View style={styles.container}>
                <Navbar  title={'اختر نوع الخضار'} navigation={this.props.navigation}/>
                <FlatList
                    data={initialArr}
                    style={styles.container}
                    renderItem={this.renderItem}
                    numColumns={2}
                />
                {/*{*/}
                    {/*this.state.x.length > 0*/}
                        {/*? <Text>{this.state.x}</Text>*/}
                        {/*: <Text>No items</Text>*/}
                {/*}*/}

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
