import { Box, Heading, ScrollView } from 'native-base'
import React, { useContext } from 'react'
import Colors from '../color'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import OrderItem from '../Components/OrderItem'
import PlaceOrderModel from '../Components/PlaceOrderModel'
import { UserContext } from '../context/UserContext'

function PlaceOrderScreen() {
  const { user } = useContext(UserContext)

  return (
    <Box bg={Colors.sudOrange} flex={1} safeAreaTop pt={6} py={5}>
        <Box alignItems="center">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <OrderInfo 
              title="CLIENTE" 
              subTitle={`${user.user.name + user.user.surname}`}
              text={`${user.user.cedula}
  ${user.user.email}
  ${user.user.phone}`}
              textStyle={{
                textAlign: "center", // Centra el texto horizontalmente
                alignSelf: "center", // Asegura que el contenedor del texto esté centrado
              }}
              icon={<FontAwesome name="user" size={30} color={Colors.white} />}
            />
            {/*<OrderInfo 
              title="MÉTODO DE PAGO" 
              subTitle={`Método de Pago: ${user.user.city}`}
              icon={
                <FontAwesome5 
                  name="shipping-fast" 
                  size={30} 
                  color={Colors.white} 
                />
              }
            />*/}

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
