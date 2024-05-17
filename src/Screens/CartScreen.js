import {
  Box,
  Text,
  Center,
  ScrollView,
  HStack,
  Button,
} from "native-base";
import React from "react";
import Colors from "../color";
import CartItems from "../Components/CartItems"; // Importamos el componente CartItems
import Buttone from "../Components/Buttone"; // Importamos el componente Buttone
import { useNavigation } from "@react-navigation/native";

function CartScreen() {
  const navigation = useNavigation(); // Obtenemos el objeto de navegación
  return (
    <Box flex={1} safeAreaTop bg={Colors.sudOrange}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          CARRITO
        </Text>
      </Center>
      {/* SI EL CARRITO ESTÁ VACÍO */}
      {/* Aquí deberías tener un componente CartEmpty para mostrar si el carrito está vacío */}
      {/* En caso de que el carrito esté vacío, se debería renderizar el componente CartEmpty */}
      
      {/* CART ITEMS */}
      {/* Renderizamos el componente CartItems, que mostrará los elementos del carrito */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
      
      
      {/* Total */}
      {/* Aquí mostramos el total de la compra */}
      <Center mt={5}>
        <HStack
          rounded={50}
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
        >
          <Text>Total</Text>
          <Button
            px={10}
            h={45}
            rounded={50}
            bg={Colors.main}
            _text={{ 
              color: Colors.white, 
              fontWeight: "semibold" 
            }}
            _pressed={{ 
              bg: Colors.main,
            }}
          >
            ₲34.000 {/* Aquí se muestra el total en moneda local */}
          </Button>
        </HStack>
      </Center>
      
      {/* CHECKOUT */}
      {/* Botón para proceder al checkout */}
      <Center px={5}>
        <Buttone 
          onPress={() => navigation.navigate("Shipping")} 
          bg={Colors.black} 
          color={Colors.white} 
          mt={10}
        >
          PAGAR
        </Buttone>
      </Center>
      </ScrollView>
    </Box>
    
  );
}

export default CartScreen;
