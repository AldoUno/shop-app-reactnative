import { Button, Center, HStack, Modal, VStack, Text, Pressable, Image } from 'native-base';
import React, { useState, useContext } from 'react';
import Buttone from './Buttone';
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const OrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  const { cart } = useContext(CartContext);

  // Calcular los valores dinámicos
  const productsTotal = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
  const shipping = 15000; // Precio del envío (fijo)
  const tax = cart.reduce((sum, item) => sum + item.iva * item.quantity, 0); // Impuesto
  const total = productsTotal + shipping + tax; // Total final

  // Crear el array dinámico con los datos calculados
  const OrdersInfo = [
    {
      title: "Productos",
      price: productsTotal,
      color: "black",
    },
    {
      title: "Envío",
      price: shipping,
      color: "black",
    },
    {
      title: "Impuesto",
      price: tax,
      color: "black",
    },
    {
      title: "Monto Total",
      price: total,
      color: "main",
    },
  ];

  return (
    <Center>
      <Buttone onPress={() => setShowModel(true)} bg={Colors.main} color={Colors.white} mt={5}>
        MOSTRAR MÉTODO DE PAGO Y TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Orden</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => (
                <HStack key={index} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text color={i.color === "main" ? Colors.main : Colors.black} bold>
                    ₲{i.price}
                  </Text>
                </HStack>
              ))}
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
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.black }}
            >
              PAGAR DESPUÉS
            </Button>
            
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.black }}
            >
              PAGAR AHORA
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
