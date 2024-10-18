import {
  Box,
  Center,
  View,
  Text,
  ScrollView,
  VStack,
  FormControl,
  Input,
} from "native-base";
import React, { useContext, useEffect, useState } from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";

const ShippingInputs = [
  {
    label:"COMPRRADOR",
    type:"text",
    key:"nombre"
  },
  {
    label:"RUC",
    type:"text",
    key:"cedula"
  },
  {
    label:"CORREO ELECTRÓNICO",
    type:"text",
    key:"email"
  },
  {
    label:"CELULAR",
    type:"text",
    key:"phone"
  }
]

function ShippingScreen() {
  const navigation = useNavigation()
  const { user, setUser } = useContext(UserContext)
  const [shippingData, setShippingData] = useState({
    nombre: user.user?.name + user.user?.surname || "",
    cedula: user.user?.cedula || "",
    email: user.user?.email || "",
    phone: user.user?.phone || ""
  })

  const handleInputChange = (key, value) => {
    setShippingData({ ...shippingData, [key]: value });
  }

  console.log('user: ' , user) 

  const handleContinue = () => {
    setUser({ ...user, ...shippingData }); // Guardar los datos de envío en el contexto del usuario
    navigation.navigate("Placeorder");
  }

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DATOS DEL COMPRADOR
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={3} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.sudOrange}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{ 
                    bg:Colors.sudOrange,
                    borderWidth:1,
                    borderColor:Colors.main,  
                  }}
                  value={shippingData[i.key]}
                  onChangeText={(value) => handleInputChange(i.key, value)}
                />
              </FormControl>
            ))}
            <Buttone 
              onPress={handleContinue} 
              bg={Colors.main} 
              color={Colors.white} 
              mt={5}
            >
              CONTINUAR
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
