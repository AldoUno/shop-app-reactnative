
import { 
  Box, 
  Center, 
  FlatList, 
  HStack, 
  Image, 
  Pressable, 
  VStack, 
  Text, 
  Button 
} from 'native-base'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Colors from '../color'

const OrderItem = () => {
  const { cart } = useContext(CartContext)

  return (
    <FlatList 
      showsVerticalScrollIndicator={false} 
      data={cart} 
      keyExtractor={(item) => item.id} 
      renderItem={({item}) => (
        <Pressable>
          <Box mb={3}>
            <HStack 
              alignItems="center" 
              bg={Colors.white} 
              shadow={1} 
              rounded={10} 
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image 
                  source={{ uri:`http://${item.url}` }} 
                  alt={item.name} 
                  w="full" 
                  h={24} 
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2} >
                <Text isTruncated color={Colors.black} bold fontSize={12}>
                  {item.name}
                </Text>
                <Text color={Colors.lightBlack} mt={2} bold>
                  ₲{item.precio}
                </Text>
              </VStack>
              <Center>
                <Button 
                  bg={Colors.main} 
                  _pressed={{ bg:Colors.main }} 
                  _text={{ color:Colors.white }}
                >
                  {item.quantity}
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  )
}

export default OrderItem
