import { Button, Center, HStack, Modal, VStack, Text, Pressable, Image } from 'native-base'
import React, { useState } from 'react'
import Buttone from './Buttone'
import Colors from '../color'
import { useNavigation } from '@react-navigation/native'

const OrdersInfo = [
  {
    title:"Productos",
    price: 34000,
    color:"black"
  },
  {
    title:"Envío",
    price: 10000,
    color:"black"
  },
  {
    title:"Impuesto",
    price: 1700,
    color:"black"
  },
  {
    title:"Monto Total",
    price: 45700,
    color:"main"
  },
]

const OrderModel = () => {
  const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone 
        onPress={() => setShowModel(true)} 
        bg={Colors.main} 
        color={Colors.white} 
        mt={5}
      >
        MOSTRAR MÉTODO DE PAGO Y TOTAL
      </Buttone>
      <Modal 
        isOpen={showModel} 
        onClose={() => setShowModel(false)} 
        size="lg"
      >
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Orden</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => (              
                <HStack key={index} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">
                    {i.title}
                  </Text>
                  <Text color={i.color === "main" ? Colors.main : Colors.black} bold>
                    ₲{i.price}
                  </Text>
                </HStack>)
              )}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable 
              w="full" 
              justifyContent="center" 
              bg={Colors.paypal} 
              h={45}
              rounded={3} 
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image 
                source={require("../../assets/efectivo.png")} 
                alt="efectivo" 
                resizeMode="contain" 
                w="full" 
                h={34}
              />
            </Pressable>
            <Button 
              w="full"
              mt={2}
              bg={Colors.black} 
              h={45} 
              _text={{ 
                color:Colors.white 
              }} 
              onPress={() => {
                navigation.navigate("Home")
                setShowModel(false)
              }} 
              _pressed={{ 
                bg:Colors.black 
              }}
            >
              PAGAR DESPUÉS
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default OrderModel
