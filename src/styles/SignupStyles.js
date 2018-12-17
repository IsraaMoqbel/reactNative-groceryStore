
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        opacity:1,
    },
    image: {
        width:15,
        height:15,
        borderWidth:1,
        marginTop:25
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        color: '#002',
        paddingTop:60,
        paddingBottom:20,
        fontFamily: 'Changa-Regular',
    },
    font: {
        fontFamily: 'Changa-Regular'
    },
    text: {
        backgroundColor: '#FFF',
        width:130,
        fontFamily: 'Changa-Regular',
        height: 30,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
    },
    textInput: {
        margin: 5,
        padding:5,
        paddingLeft: 10,
        backgroundColor: '#FFF',
        width:250,
        height: 48,
        fontSize: 16,
        fontWeight: '500',
        borderBottomWidth: 1,
        borderRadius: 0,
        color: '#000',
        textAlign:'right',
        fontFamily: 'Changa-Regular',
    },
    submit: {
        backgroundColor:'#68a0cf',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    submitText: {
        color:'#fff',
        textAlign:'center',
        fontFamily: 'Changa-Regular',
    },
    row: {
        display:'flex',
        flexDirection:'row'
    },
    question: {
        paddingBottom:120,
        alignItems: 'center',
        fontSize:40,
        fontFamily:'Changa-Regular'
    },
    error: {
        color:'red'
    },
    underline: {
        textDecorationLine: 'underline'
    }
});