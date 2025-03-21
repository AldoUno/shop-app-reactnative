import { Box, Center, Text} from 'native-base'
import React from 'react'
import Colors from '../color'
import { FontAwesome } from '@expo/vector-icons'
import Buttone from './Buttone'
import { useNavigation } from '@react-navigation/native';


const CartEmpty = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} px={4} py={10}>
      <Center h='90%'>
        <Center w={200} h={200} bg={Colors.white} rounded="full" >
          <FontAwesome name="shopping-basket" size={64} color={Colors.main}/>
        </Center>
        <Text color={Colors.main} bold mt={5}>
          EL CARRITO SE HALLA VACÍO
        </Text>
      </Center>
      <Buttone  onPress={() => navigation.navigate('Home')} bg={Colors.black} color={Colors.white}>
        EMPIEZA A COMPRAR
      </Buttone>
    </Box>
  )
}

export default CartEmpty
