import { Text, Box, Heading, VStack, Input, Image, Button, Pressable} from 'native-base'
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons'
import React from 'react'
import Colors from '../color'
//import { Pressable } from 'react-native'

function RegisterScreen({navigation}) {
  return (
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
          <Heading>SIGN UP</Heading>
          <VStack space={5} pt="6">
            {/*USERNAME*/}
            <Input
              InputLeftElement={
                <AntDesign name="user" size={20} color="black" />
              }            
              variant="underlined" 
              placeholder="Nombre de usuario"
              w="70%"
              pl={2}
              color={Colors.black}
              borderBottomColor={Colors.underline}
            />
            {/*EMAIL*/}
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
            SIGN UP
          </Button>
          <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
            <Text color={Colors.black} bold>INICIA SESIÓN</Text>
          </Pressable>
      </Box>
    </Box>
  )
}

export default RegisterScreen
