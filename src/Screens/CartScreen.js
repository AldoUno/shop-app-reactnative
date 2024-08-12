import React, { useContext } from 'react';
import { Box, Text, Center, ScrollView, HStack, VStack } from 'native-base';
import Colors from '../color';
import { CartContext } from '../context/CartContext';
import CartItems from '../Components/CartItems';
import Buttone from '../Components/Buttone';
import { useNavigation } from '@react-navigation/native';

function CartScreen() {
  const navigation = useNavigation();
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box flex={1} safeAreaTop bg={Colors.sudOrange} justifyContent="center" py={10}>
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          CARRITO
        </Text>
      </Center>
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={4}>
            {cart.map((product, index) => (
              <CartItems key={index} product={product} />
            ))}
          </VStack>
        </ScrollView>
      )}
      <Center mt={5}>
        <HStack
          rounded={50}
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
        >
          <Text>Total</Text>
          <Text>₲{total}</Text>
        </HStack>
      </Center>
      <Center px={5}>
        <Buttone
          onPress={() => navigation.navigate('Shipping')}
          bg={Colors.black}
          color={Colors.white}
          mt={10}
        >
          PAGAR
        </Buttone>
      </Center>
    </Box>
  );
}

export default CartScreen;