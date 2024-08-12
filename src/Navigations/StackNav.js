import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import SingleProductsScreen from '../Screens/SingleProductsScreen'
import ShippingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import PlaceOrdenScreen from '../Screens/PlaceOrdenScreen'
import CartScreen from '../Screens/CartScreen'
import CartEmpty from '../Components/CartEmpty'

const Stack = createNativeStackNavigator() 
const StackNav = () => {
  return (
    <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
            headerShown:false,
        }}
    >
      

        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Single' component={SingleProductsScreen} />
        <Stack.Screen name='Shipping' component={ShippingScreen} />
        <Stack.Screen name='Checkout' component={PaymentScreen} />
        <Stack.Screen name='Placeorder' component={PlaceOrdenScreen} />
        <Stack.Screen name='CartScreen' component={CartScreen} />
        <Stack.Screen name='CartEmpty' component={CartEmpty} />
    </Stack.Navigator>
  )
}

export default StackNav