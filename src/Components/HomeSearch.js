import { Input, HStack, Box, Pressable } from 'native-base'
import React, { useContext } from 'react'
//import { Pressable } from 'react-native'
import Colors from '../color'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../context/CartContext'

function HomeSearch({ searchQuery, setSearchQuery }) {
  const navigation = useNavigation()
  const { cart } = useContext(CartContext)
  return (
    <HStack 
      space={3} 
      w="full" 
      px={6} 
      bg={Colors.main} 
      py={4} 
      alignItems="center" 
      safeAreaTop>
        <Input 
          placeholder="Canastos, chocolates, vino..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} 
          w="85%" 
          bg={Colors.white} 
          type="search"
          variant="filled"
          h={12} 
          borderWidth={0}
          _focus={{ 
            bg:Colors.white,
          }}
        />
        <Pressable ml={3} onPress={() => navigation.navigate('Cart')}>
          <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
          {cart.length > 0 && (
          <Box 
            px={1} 
            rounded="full" 
            position="absolute" 
            top={-13} 
            left={2} 
            bg={Colors.coffe}
            _text={{ 
              color: Colors.white, 
              fontSize: '11px'
            }}
          >
            {cart.length}
          </Box>
          )}
        </Pressable>
      </HStack>
  )
}

export default HomeSearch
