import { Button, Center, HStack, Modal, VStack, Text } from 'native-base'
import React, { useState, useContext } from 'react'
import Buttone from './Buttone'
import Colors from '../color'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../context/CartContext';

const PlaceOrderModel = () => {
  const navigation = useNavigation()
  const [showModel, setShowModel] = useState(false)
  const { cart } = useContext(CartContext);

  // Calcular los valores dinámicos
  const productsTotal = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
  const shipping = 15000; // Precio del envío
  const tax = cart.reduce((sum, item) => sum + item.iva * item.quantity, 0);; // Impuesto
  const total = productsTotal + shipping + tax; // Total final

  // Crear el array dinámico con los datos calculados
  const OrdersInfo = [
    {
      title: "Productos",
      price: productsTotal,
      color: "black"
    },
    {
      title: "Envío",
      price: shipping,
      color: "black"
    },
    {
      title: "Impuesto",
      price: tax,
      color: "black"
    },
    {
      title: "Monto Total",
      price: total,
      color: "main"
    },
  ];

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
              REALIZAR PEDIDO
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default PlaceOrderModel
