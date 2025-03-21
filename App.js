
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider, StatusBar } from 'native-base'
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import OrderScreen from './src/Screens/OrderScreen'
import BottomNav from './src/Navigations/BottomNav'
import { CartProvider } from './src/context/CartContext'

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <CartProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={true}/>
          <Stack.Navigator 
            initialRouteName="Login" 
            screenOptions={{ 
              headerShown:false,
            }}
          >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Order' component={OrderScreen} />
            <Stack.Screen name='Bottom' component={BottomNav} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </CartProvider>
  ); 
}


