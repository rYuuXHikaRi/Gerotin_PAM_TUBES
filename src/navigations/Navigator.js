import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import splashscreen from '../screens/splashscreen'
import Login from '../screens/Login';
import Register from '../screens/Register';


const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    splashscreen:{screen:splashscreen},
    Login:{screen:Login},
    Register:{screen:Register},
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);