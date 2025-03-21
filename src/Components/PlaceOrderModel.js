import { Button, Center, HStack, Modal, VStack, Text } from 'native-base'
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

const PlaceOrderModel = () => {
  const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone 
        onPress={() => setShowModel(true)} 
        bg={Colors.black} 
        color={Colors.white} 
        mt={5}
      >
        MOSTRAR TOTAL
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
            <Button 
              flex={1} 
              bg={Colors.main} 
              h={45} 
              _text={{ color:Colors.white }} 
              onPress={() => { 
                navigation.navigate("Order")
                setShowModel(false)
              }} 
              _pressed={{ bg:Colors.main }}
            >
              REALIZAR UN PEDIDO
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default PlaceOrderModel
