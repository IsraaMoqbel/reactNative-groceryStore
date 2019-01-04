import {LogIn} from './screens/LogIn';
import {SignUp} from './screens/SignUp';
import ChosenItems from './screens/ChosenItems';
import {Delivery} from './screens/Delivery';
import {ItemDetails} from './screens/ItemDetails';
import Items from './screens/Items';
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

const MyDrawerNavigator = createDrawerNavigator({
    LogIn: {screen: LogIn,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })},
    SignUp: {screen: SignUp,
        navigationOptions: ({navigation}) => ({
            drawerLockMode: 'locked-closed'
        })},
        Items: {screen: Items},
        ChosenItems: {screen: ChosenItems},
        Delivery: {screen: Delivery},
        ItemDetails: {screen: ItemDetails},

}, {
    drawerPosition: 'right',
    initialRouteName: 'Items',
    drawerBackgroundColor: 'lightblue',
    drawerWidth: 200
});

 export default MyApp = createAppContainer(MyDrawerNavigator);

// >>>STACK NAVIGATION
// const Stack = createStackNavigator({
//     Items: {screen: Items},
//     ItemDetails: {screen: ItemDetails},
//     ChosenItems: {screen: ChosenItems},
//     LogIn: {screen: LogIn},
//     Delivery: {screen: Delivery},
//     SignUp: {screen: SignUp},
// });
// const AppContainer =  createAppContainer(Stack);
