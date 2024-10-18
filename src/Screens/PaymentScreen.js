import {
  Box,
  Center,
  Text,
  ScrollView,
  VStack,
  HStack,
  Image,
  Modal,
  View,
  Button
} from "native-base";
import React, { useState, useContext } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { CartContext } from '../context/CartContext';

// Definimos los métodos de pago con su información correspondiente
const paymentMethodes = [
  {
    image: require("../../assets/efectivo.png"), // Imagen para el método de pago en efectivo
    alt: "efectivo", // Texto alternativo para la imagen
    //icon: "Ionicons", // Icono a utilizar para este método de pago
  },
  {
    image: require("../../assets/qr.png"), // Imagen para el método de pago Visa
    alt: "qr", // Texto alternativo para la imagen
    icon: "Ionicons", // Icono a utilizar para este método de pago
  },
  {
    image: require("../../assets/tigo.png"), // Imagen para el método de pago Mastercard
    alt: "tigo", // Texto alternativo para la imagen
    icon: "FontAwesome", // Icono a utilizar para este método de pago
  },
]



function PaymentScreen() {
  const navigation = useNavigation() // Obtenemos el objeto de navegación
  const [showModel, setShowModel] = useState(false)
  const { cart } = useContext(CartContext);
  
  // Calcular los valores dinámicos
  const productsTotal = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
  const tax = cart.reduce((sum, item) => sum + item.iva * item.quantity, 0);; // Impuesto
  const total = productsTotal + tax; // Total final
  
  // Crear el array dinámico con los datos calculados
  const OrdersInfo = [
    {
      title: "Productos",
      price: productsTotal,
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
  const [check, setCheck] = useState({
    efectivo: true,
    mastercard: false,
    visa: false,
  })

  return (    
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          MÉTODO DE PAGO
        </Text>
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
      {/* SELECTION */}
      <Box h="full" bg={Colors.sudOrange} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5} >
            {paymentMethodes.map((i, index) => (
              <HStack
                onTouchStart={() => setCheck( { efectivo: false, mastercard: false, visa: false, [i.alt]: true}) } 
                key={index}
                alignItems='center' 
                bg={Colors.white} 
                px={3} 
                py={1} 
                justifyContent="space-between"
                rounded={10}
              >
                {/* Mostramos la imagen del método de pago */}
                <Box>
                  <Image 
                    source={i.image} 
                    alt={i.alt} 
                    resizeMode="contain" 
                    w={60} 
                    h={50}
                  />                          
                </Box>
                {/* Renderizamos el icono correspondiente según el tipo de método de pago */}
                { check[i.alt] ? (
                  <Ionicons 
                    name="checkmark-circle" 
                    size={30} 
                    color={Colors.main} 
                  />
                  ) : (
                    <FontAwesome
                      name="circle-thin"
                      size={30} 
                      color={Colors.main} 
                    />  
                  ) 
                }               
              </HStack>
            ))}

            {/* Botón para continuar con el proceso de pago */}
            <Buttone 
              onPress={() => setShowModel(true)}
              bg={Colors.main} 
              color={Colors.white} 
              mt={5}
            >
              CONTINUAR
            </Buttone>
            {/* Información sobre el método de pago por defecto */}
            <Text italic textAlign="center">El método de pago es <Text bold>Efectivo</Text> por defecto</Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  )
}

export default PaymentScreen
