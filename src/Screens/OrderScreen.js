import { Box, Heading, ScrollView } from 'native-base'
import React from 'react'
import Colors from '../color'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import OrderItem from '../Components/OrderItem'
import OrderModel from '../Components/OrderModel'

function OrderScreen() {
  return (
    /* Contenedor principal con fondo naranja y espacio seguro en la parte superior */
    <Box bg={Colors.sudOrange} flex={1} safeAreaTop pt={6} >
        <Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
             {/* Información del envío */}
            <OrderInfo 
              title="INFORMACIÓN DE ENVÍO"
              success
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
             {/* Información de entrega */}
            <OrderInfo 
              title="ENVIAR A" 
              subTitle="Dirección:" 
              danger
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
        {/* Componente para mostrar los productos de la orden */}
        <OrderItem />
        {/* TOTAL */} 
        {/* Componente para mostrar el modelo de la orden */}
        <OrderModel />
      </Box>
    </Box>
  )
}

export default OrderScreen
