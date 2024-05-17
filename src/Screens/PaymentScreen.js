import {
  Box,
  Center,
  Text,
  ScrollView,
  VStack,
  HStack,
  Image,
  View,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Definimos los métodos de pago con su información correspondiente
const paymentMethodes = [
  {
    image: require("../../assets/efectivo.png"), // Imagen para el método de pago en efectivo
    alt: "efectivo", // Texto alternativo para la imagen
    //icon: "Ionicons", // Icono a utilizar para este método de pago
  },
  {
    image: require("../../assets/visa.png"), // Imagen para el método de pago Visa
    alt: "visa", // Texto alternativo para la imagen
    icon: "Ionicons", // Icono a utilizar para este método de pago
  },
  {
    image: require("../../assets/mastercard.png"), // Imagen para el método de pago Mastercard
    alt: "mastercard", // Texto alternativo para la imagen
    icon: "FontAwesome", // Icono a utilizar para este método de pago
  },
]

function PaymentScreen() {
  const navigation = useNavigation() // Obtenemos el objeto de navegación

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
              onPress={() => navigation.navigate("Placeorder")} 
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
