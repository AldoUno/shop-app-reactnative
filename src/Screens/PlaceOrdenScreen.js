import { Box, Heading, ScrollView } from 'native-base'
import React from 'react'
import Colors from '../color'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import OrderItem from '../Components/OrderItem'
import PlaceOrderModel from '../Components/PlaceOrderModel'

function PlaceOrderScreen() {
  return (
    <Box bg={Colors.sudOrange} flex={1} safeAreaTop pt={6} >
        <Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <OrderInfo 
              title="CLIENTE" 
              subTitle="Usuario Ana" 
              text="admin@example.com"
              icon={<FontAwesome name="user" size={30} color={Colors.white} />}
            />
            <OrderInfo 
              title="INFORMACIÓN DE ENVÍO" 
              subTitle="Envío: Capiatá" 
              text="Método de Pago: Efectivo"
              icon={
                <FontAwesome5 
                  name="shipping-fast" 
                  size={30} 
                  color={Colors.white} 
                />
              }
            />
            <OrderInfo 
              title="ENVIAR A" 
              subTitle="Dirección:" 
              text="Capiatá, La Candelaria, Edificio Yvyraty N° 1234"
              icon={
                <Ionicons 
                  name="location-sharp" 
                  size={30} 
                  color={Colors.white} 
                />
              }
            />
          </ScrollView>
        </Box>
        {/* ORDER ITEM */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTOS
        </Heading>
        <OrderItem />
        {/* TOTAL */} 
        <PlaceOrderModel />
      </Box>
    </Box>
  )
}

export default PlaceOrderScreen
