import React, { useEffect, useState } from "react";
import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import Colors from "../../color";
import Buttone from "../Buttone";
import { getInfoFromUser } from '../../Services/fetchServices';

const Inputs = [
  {
    label: "NOMBRE DE USUARIO",
    type: "text",
    key: "name"
  },
  {
    label: "EMAIL",
    type: "text",
    key: "email"
  },
  {
    label: "NUEVA CONTRASEÑA",
    type: "password",
    key: "password"
  },
  {
    label: "CONFIRMA CONTRASEÑA",
    type: "password",
    key: "confirm_password"
  },
];

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
       
        const response = await getInfoFromUser('userinfo');
        const data = await response.json();
        if (data.ok) {
          setUserInfo(prevState => ({
            ...prevState,
            name: data.data.name,
            email: data.data.email
          }));
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
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
                placeholder={userInfo[i.key]}
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
          <Buttone bg={Colors.main} color={Colors.white}>
            CERRAR SESIÓN
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;