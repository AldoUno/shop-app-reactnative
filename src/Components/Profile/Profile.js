import React, { useEffect, useState, useContext } from "react";
import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import Colors from "../../color";
import Buttone from "../Buttone";
import { Logout, Edit} from '../../Services/fetchServices';
import { UserContext } from "../../context/UserContext";
import { useNavigation } from "@react-navigation/native"
import { CartContext } from '../../context/CartContext';



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
  const { user, setUser } = useContext(UserContext)
  const { clearCart } = useContext(CartContext);
  const navigation = useNavigation()
  const [userInfo, setUserInfo] = useState({
    name:  `${user.user?.name || ""} ${user.user?.surname || ""}`,
    email: user.user?.email || "",
    password: "",
    confirm_password: ""
  });


  const handleUpdateProfile = async () => {
    if (userInfo.password !== userInfo.confirm_password) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    try {
      const token = user.authorisation?.token;
      const userId = user.user?.id; // Obtener el ID del usuario

      if (!token || !userId) throw new Error("Faltan datos necesarios para actualizar el perfil.");

      const userDataToUpdate = {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password || undefined, // Solo envía la contraseña si ha sido cambiada
      };

      const response = await Edit(userDataToUpdate, 'update-user', userId, token); // Pasar los datos del usuario, ruta e ID

      if (response.ok) {
        const updatedUserData = await response.json();
        setUser(updatedUserData); // Actualiza el contexto con los nuevos datos del usuario
        console.log("Perfil actualizado correctamente");
      } else {
        const errorData = await response.json();
        console.error("Error al actualizar el perfil:", errorData.message);
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error.message);
    }
  };

  const handleLogout = async () => {
    //try {
      
      const token = user.authorisation.token
      console.log("usuario t: ",token)
      Logout(token)
      .then(async(response) => {
        if(response.ok){
          //
          navigation.navigate('Login'); // Redirigir al usuario a la pantalla de login
        }else{
          const errorData = await response.json();
          console.error("Error al cerrar sesión:", errorData.message);
        }
      })
      .finally(() => {
        setUser(null); // Limpiar el contexto de usuario
        clearCart();
      })
      /*const response = await Logout(token);
      if (response.ok) {
        setUser(null); // Limpiar el contexto de usuario
        navigation.navigate('Login'); // Redirigir al usuario a la pantalla de login
      } else {
        const errorData = await response.json();
        console.error("Error al cerrar sesión:", errorData.message);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }*/
  };

  
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
                value={userInfo[i.key]}
                onChangeText={(text) => setUserInfo({ ...userInfo, [i.key]: text })}
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
          <Buttone bg={Colors.main} color={Colors.white} onPress={handleUpdateProfile}>
            ACTUALIZAR PERFIL
          </Buttone>
          <Buttone bg={Colors.main} color={Colors.white} onPress={handleLogout}>
            CERRAR SESIÓN
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;