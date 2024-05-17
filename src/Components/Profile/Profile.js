import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import React from "react";
import Colors from "../../color";
import Buttone from "../Buttone"

const Inputs = [
  {
    label: "NOMBRE DE USUARIO",
    type: "text",    
  },
  {
    label: "EMAIL",
    type: "text",    
  },
  {
    label: "NUEVA CONTRASEÑA",
    type: "password",    
  },
  {
    label: "CONFIRMA CONTRASEÑA",
    type: "password",    
  },
]

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: Colors.black,
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
                fontSize={15}
                _focus={{ 
                  bg: Colors.sudOrange, 
                  borderColor: Colors.main, 
                  borderWidth: 1, 
                }}
              />
            </FormControl>
            ))}
            <Buttone bg={Colors.main} color={Colors.white}>
              ACTUALIZAR PERFIL
            </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
