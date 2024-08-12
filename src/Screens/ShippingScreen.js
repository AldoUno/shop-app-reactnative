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
import React from "react";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label:"CIUDAD",
    type:"text"
  },
  {
    label:"PAÍS",
    type:"text"
  },
  {
    label:"CÓDIGO POSTAL",
    type:"text"
  },
  {
    label:"DIRECCIÓN",
    type:"text"
  },
]

function ShippingScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      {/* HEADER */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DIRECCIÓN DE ENVÍO
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
                />
              </FormControl>
            ))}
            <Buttone 
              onPress={() => navigation.navigate("Checkout")} 
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
