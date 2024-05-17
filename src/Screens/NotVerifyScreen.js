import { Center, Box, VStack, Image } from 'native-base'; // Importamos los componentes necesarios de NativeBase
import React from 'react'; // Importamos React
import Colors from '../color'; // Importamos el archivo de colores
import Buttone from '../Components/Buttone'; // Importamos el componente Buttone

function NotVerifyScreen() {
  return (
    /* Contenedor principal con fondo principal y espacio seguro en la parte superior */
    <Box flex={1} bg={Colors.main} safeAreaTop> 
        <Center w="full" h={250}> 
          <Image source={require("../../assets/favicon1.png")} 
          alt="Logo"
          size="lg"
          />
        </Center>
        <VStack space={6} px={5} alignItems={"center"}> 
          {/* Botón de registro */}
          <Buttone bg={Colors.black} color={Colors.white}>
            REGÍSTRATE
          </Buttone>
          {/* Botón de inicio de sesión */}
          <Buttone bg={Colors.white} color={Colors.black}>
            LOG IN
          </Buttone>
        </VStack>
    </Box>
  )
}

export default NotVerifyScreen; // Exportamos el componente NotVerifyScreen
