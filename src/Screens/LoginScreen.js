import { Text, Box, Heading, VStack, Input, Image, Button, Pressable} from 'native-base'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import React from 'react'
import Colors from '../color'
//import { Pressable } from 'react-native'

function LoginScreen({navigation}) {
  return (
    /* Enlace para ir a la pantalla de registro */
    <Box flex={1} bg={Colors.white}> 
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box 
        w="full" 
        h="full" 
        position="absolute" 
        top="0" 
        px="6"        
        justifyContent="center"
        >
          <Heading>LOG IN</Heading>
          <VStack space={8} pt="6">
            {/* USUARIO */}
            <Input
              InputLeftElement={
                <MaterialIcons name="email" size={20} color={Colors.black} />
              }            
              variant="underlined" 
              placeholder="user@gmail.com"
              w="70%"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
            />
            {/*CONTRASEÑA*/}
            <Input
              InputLeftElement={
                <Ionicons name="eye-sharp" size={20} color="black" />
              }            
              variant="underlined" 
              placeholder="************"
              w="70%"
              type="password"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
            />
          </VStack>
          {/* Botón de inicio de sesión */}
          <Button
          _pressed={{ 
            bg:Colors.main,
          }}
          my={30} 
          w="40%" 
          rounded={50} 
          bg={Colors.main}
          onPress={() => navigation.navigate('Bottom')}
          >
            LOG IN
          </Button>
           {/* Enlace para ir a la pantalla de registro */}
          <Pressable mt={4} onPress={() => navigation.navigate('Register')}>
            <Text color={Colors.black} bold>¡CREA TU CUENTA!</Text>
          </Pressable>
      </Box>
    </Box>
  )
}

export default LoginScreen
