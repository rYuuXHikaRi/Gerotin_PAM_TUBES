import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import splashscreen from '../screens/splashscreen'

const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    splashscreena:{screen:splashscreen},
    Login:{screen:Login},
    Register:{screen:Register},
    
},
{
    defaultNavigationOptions : stackNavigatorOptions
}  
);
export default createAppContainer(AppNavigator);